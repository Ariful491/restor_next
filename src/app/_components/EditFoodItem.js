"use client"

import {Card, Col, Container, Row} from "@/app/_components/helperComponents/BootstrapStyleHelper";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

const EditFoodItem = ({foodItem = {}}) => {

    const {
        food_name = '',
        food_price = 0,
        img_path = '',
        description = '',
        _id = ''
    } = foodItem;

    const [foodName, setFoodName] = useState('');
    const [foodPrice, setFoodPrice] = useState('');
    const [foodPath, setFoodPath] = useState('');
    const [Description, setDescription] = useState('');
    const [error, setError] = useState(false);
    const router = useRouter();


    const handleForm = async (e) => {
        e.preventDefault();



        if (!foodName || !foodPath || !foodPrice || !Description ) {
            setError(true)
            return null;
        } else {
            setError(false);
        }



        let response = await fetch("http://localhost:3000/api/restaurant/food/" + _id, {
            method: "POST",
            body: JSON.stringify({foodName, foodPrice, foodPath, Description})
        })
        response = await response.json();


        if (response.success) {
            alert("Food item add  successfully .")
            router.push('/restaurant/food/list')

        }

    }

    useEffect(() => {
        setFoodName(food_name);
        setFoodPrice(food_price);
        setFoodPath(img_path);
        setDescription(description);

    }, [food_name, food_price, img_path, description]);


    return (
        <>
            <Row>
                <Container>
                    <Col md={6} className={'mx-auto my-5'}>
                        <Card>
                            <form method={'post'} onSubmit={handleForm}>
                                <div>
                                    <h4>Edit New Food Item</h4>
                                    <div className={'card-body'}>

                                        <div className="input-group mb-3">

                                            <span className="input-group-text" id="basic-addon1">Food Name</span>
                                            <input type="text" className="form-control" placeholder="Food Name"
                                                   value={foodName}
                                                   onChange={(e) => setFoodName(e.target.value)}
                                            />

                                        </div>

                                        <div className={'text-start mb-3'}>
                                            {
                                                error && !foodName ?
                                                    <span className={'text-danger'}>Name is required.</span>
                                                    : ''
                                            }
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1">Price</span>
                                            <input type="text" className="form-control" placeholder="Price"
                                                   value={foodPrice}
                                                   onChange={(e) => setFoodPrice(e.target.value)}
                                            />
                                        </div>
                                        <div className={'text-start mb-3'}>
                                            {
                                                error && !foodPrice ?
                                                    <span className={'text-danger'}>Price is required.</span>
                                                    : ''
                                            }
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1">Path</span>
                                            <input type="text" className="form-control" placeholder="Path"
                                                   value={foodPath}
                                                   onChange={(e) => setFoodPath(e.target.value)}
                                            />
                                        </div>
                                        <div className={'text-start mb-3'}>
                                            {
                                                error && !foodPath ?
                                                    <span className={'text-danger'}>Image is required.</span>
                                                    : ''
                                            }
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1">Description</span>
                                            <input type="text" className="form-control" placeholder="Description"
                                                   value={Description}
                                                   onChange={(e) => setDescription(e.target.value)}
                                            />
                                        </div>
                                        <div className={'text-start mb-3'}>
                                            {
                                                error && !Description ?
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