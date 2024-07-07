"use client"

import {Card, Col, Container, Row} from "@/app/_components/helperComponents/BootstrapStyleHelper";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

const EditFoodItem = ({foodItem}) => {

    const [food_name, setFoodName] = useState('');
    const [food_price, setFoodPrice] = useState(0);
    const [img_path, setFoodPath] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(false);
    const router = useRouter();


    const handleForm = async (e) => {
        e.preventDefault();

        if (!food_name || !img_path || !food_price || !description) {
            setError(true)
            return null;
        } else {
            setError(false);
        }
        const user_id = JSON.parse(localStorage.getItem('user'))._id;


        let response = await fetch("http://localhost:3000/api/restaurant/food/" + foodItem._id, {
            method: "POST",
            body: JSON.stringify({food_name, img_path, food_price, description, user_id})
        })
        response = await response.json();
        if (response.success) {
            alert("Food item add  successfully .")
            router.push('/restaurant/food/list')

        }

    }

    useEffect(() => {
        setFoodName(foodItem.food_name);
        setFoodPrice(foodItem.food_price);
        setFoodPath(foodItem.img_path);
        setDescription(foodItem.description);
    }, []);


    return (
        <>
            <Row>
                <Container>
                    <Col md={6} className={'mx-auto my-5'}>
                        <Card>
                            <form method={'post'} onSubmit={handleForm}>
                                <div>
                                    <h4>Add New Food Item</h4>
                                    <div className={'card-body'}>
                                        <div className="input-group mb-3">

                                            <span className="input-group-text" id="basic-addon1">Food Name</span>
                                            <input type="text" className="form-control" placeholder="Food Name"
                                                   value={food_name}
                                                   onChange={(e) => setFoodName(e.target.value)}
                                            />

                                        </div>
                                        <div className={'text-start mb-3'}>
                                            {
                                                error && !food_name ?
                                                    <span className={'text-danger'}>Name is required.</span>
                                                    : ''
                                            }
                                        </div>

                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1">Price</span>
                                            <input type="text" className="form-control" placeholder="Price"
                                                   value={food_price}
                                                   onChange={(e) => setFoodPrice(e.target.value)}
                                            />
                                        </div>
                                        <div className={'text-start mb-3'}>
                                            {
                                                error && !food_price ?
                                                    <span className={'text-danger'}>Price is required.</span>
                                                    : ''
                                            }
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1">Path</span>
                                            <input type="text" className="form-control" placeholder="Path"
                                                   value={img_path}
                                                   onChange={(e) => setFoodPath(e.target.value)}
                                            />
                                        </div>
                                        <div className={'text-start mb-3'}>
                                            {
                                                error && !img_path ?
                                                    <span className={'text-danger'}>Image is required.</span>
                                                    : ''
                                            }
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1">Description</span>
                                            <input type="text" className="form-control" placeholder="Description"
                                                   value={description}
                                                   onChange={(e) => setDescription(e.target.value)}
                                            />
                                        </div>
                                        <div className={'text-start mb-3'}>
                                            {
                                                error && !description ?
                                                    <span className={'text-danger'}>Description is required.</span>
                                                    : ''
                                            }
                                        </div>

                                        <div className={'text-center'}>
                                            <button type={'submit'} className={"btn btn-outline-success px-5"}>Update
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>


                        </Card>
                    </Col>
                </Container>
            </Row>
        </>
    )
}

export default EditFoodItem;