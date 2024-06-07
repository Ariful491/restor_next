"use client"

import {Card, Col, Container, Row} from "@/app/_components/helperComponents/BootstrapStyleHelper";
import {useState} from "react";

const AddFoodItems = () => {

    const [foodName, setFoodName] = useState('');
    const [foodPrice, setFoodPrice] = useState(0);
    const [foodPath, setFoodPath] = useState('');
    const [description, setDescription] = useState('');
    const handleForm = (e) => {
        e.preventDefault();
        console.log(foodName, foodPrice, foodPath, description);
    }

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
                                                   value={foodName}
                                                   onChange={(e) => setFoodName(e.target.value)}
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1">Price</span>
                                            <input type="text" className="form-control" placeholder="Price"
                                                   value={foodPrice}
                                                   onChange={(e) => setFoodPrice(e.target.value)}
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1">Path</span>
                                            <input type="text" className="form-control" placeholder="Path"
                                                   value={foodPath}
                                                   onChange={(e) => setFoodPath(e.target.value)}
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1">Description</span>
                                            <input type="text" className="form-control" placeholder="Description"
                                                   value={description}
                                                   onChange={(e) => setDescription(e.target.value)}
                                            />
                                        </div>

                                        <div className={'text-center'}>
                                            <button type={'submit'} className={"btn btn-outline-success px-5"}>Save
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

export default AddFoodItems;