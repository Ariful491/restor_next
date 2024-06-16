"use client";

import AuthLayout from "@/app/_components/layouts/Auth";
import { Card, Col, Container, Row } from "@/app/_components/helperComponents/BootstrapStyleHelper";
import { useEffect, useState } from "react";

const Page = () => {
    const [foodItems, setFoodItems] = useState([]);

    const loadFoodItems = async () => {
        try {
            let response = await fetch("http://localhost:3000/api/restaurant/food", {
                method: "GET",
            });
            let data = await response.json();
            setFoodItems(data.result);
        } catch (error) {
            console.error("Failed to load food items", error);
        }
    };

    useEffect(() => {
        loadFoodItems();
    }, []);

    return (
        <>
            <AuthLayout>
                <Row>
                    <Container>
                        <Col md={8} className="mx-auto my-5">
                            <Card>
                                <div className="card-header card-success">
                                    <h4>Food List</h4>
                                </div>
                                <div className="card-body table-responsive">
                                    <table className="table table-success table-bordered">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {foodItems.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.food_name}</td>
                                                <td>{item.food_price}</td>
                                                <td>{item.description}</td>
                                                <td>
                                                    <img src={item.img_path} alt={item.food_name} style={{ width: '50px' }} />
                                                </td>
                                                <td>
                                                    <button className="btn btn-success btn-sm mx-2">Edit</button>
                                                    <button className="btn btn-success btn-sm">Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Card>
                        </Col>
                    </Container>
                </Row>
            </AuthLayout>
        </>
    );
};

export default Page;
