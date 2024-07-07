"use client";

import AuthLayout from "@/app/_components/layouts/Auth";
import {Card, Col, Container, Row} from "@/app/_components/helperComponents/BootstrapStyleHelper";
import {useEffect, useState} from "react";
import FoodList from "@/app/_components/FoodList";

const Page = () => {
    const [foodItems, setFoodItems] = useState([]);

    const loadFoodItems = async () => {

        const userId = JSON.parse(localStorage.getItem('user'))._id
        try {
            let response = await fetch("http://localhost:3000/api/restaurant/food/", {
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
                                  <FoodList foodItems={foodItems} />
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
