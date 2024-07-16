"use client"

import AppLayout from "@/app/_components/layouts/App";
import {Col, Container, Row} from "@/app/_components/helperComponents/BootstrapStyleHelper";
import {useParams} from "next/navigation";

import React, {useEffect, useState} from "react";

export const CartContext = React.createContext('');

const Page = (props) => {

    const [restaurantName, setRestaurantName] = useState('');
    const [foods, setFoods] = useState([]);
    const [restaurant, setRestaurant] = useState({});
    const [cartDetails, setCardDetails] = useState([]);
    const [cartTotalProduct, setCartTotalProduct] = useState(0);

    const params = useParams();
    const {id} = props.searchParams;

    useEffect(() => {

        setRestaurantName(decodeURIComponent(params.name))
        loadFoods();
        loadRestaurantData();

    }, [])

    const loadRestaurantData = async () => {
        let response = await fetch('http://localhost:3000/api/customer?id=' + id, {
            method: "GET"
        })
        let data = await response.json();
        setRestaurant(data.result[0]);
    }


    const loadFoods = async () => {
        let result = await fetch('http://localhost:3000/api/customer/' + id, {
            method: 'GET'
        })

        let data = await result.json();
        setFoods(data.result);
    }

    const handleCart = (item) => {
        setCartTotalProduct(prevTotal => prevTotal + 1)
        setCardDetails(prevCartDetails => {
            const existingItemIndex = prevCartDetails.findIndex(cartItem => cartItem._id === item._id);

            if (existingItemIndex !== -1) {

                const updatedCartDetails = [...prevCartDetails];

                updatedCartDetails[existingItemIndex].counter += 1;

                localStorage.setItem('cart', JSON.stringify(updatedCartDetails))
                return updatedCartDetails;

            } else {

                const updatedCartDetails = [...prevCartDetails, {...item, counter: 1}];
                localStorage.setItem('cart', JSON.stringify(updatedCartDetails))
                return updatedCartDetails;
            }


        });
        // const cartDetails = JSON.parse(localStorage.getItem('cart')) || [];


    }


    const styles = {
        bgImage: {
            backgroundImage: 'url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            repeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: 'rgba(0,0,0,0.4)',
            backgroundBlendMode: 'multiply'

        },
        cardHeight: {
            height: '500px',
        }
    };

    return (
        <CartContext.Provider value={cartTotalProduct}>
            <AppLayout>
                <main>
                    <Row>
                        <Col xl={12}>
                            <div className='card ' style={{
                                height: "320px",

                            }}>
                                <div className='card-body text-white' style={styles.bgImage}>
                                    <center className="col-md-8 mx-auto  mt-5">
                                        <h4 className='fw-bolder'>
                                            {restaurantName}
                                        </h4>
                                    </center>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <div className={' bg-success text-white'}>
                        <Container>
                            <Row>
                                <Col xl={3}>
                                    <p className={'py-2'}>
                                        contact:- {restaurant?.contact}
                                    </p>

                                </Col>

                                <Col xl={3}>

                                    <p className={'py-2'}>
                                        email:- {restaurant?.email}
                                    </p>

                                </Col>

                                <Col xl={3}>

                                    <p className={'py-2'}>
                                        Address: {restaurant?.address}
                                    </p>

                                </Col>

                                <Col xl={3}>

                                    <p className={'py-2'}>
                                        City: {restaurant?.city}
                                    </p>

                                </Col>

                            </Row>
                        </Container>


                    </div>
                    <Row>
                        {
                            foods && foods.map((item, key) => {
                                return <Col xl={4} key={key}>
                                    <div className="card m-4">
                                        <img
                                            src={item.img_path}
                                            className="card-img-top" alt={item.food_name}/>
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {item.food_name}
                                            </h5>
                                            <p className="card-text">
                                                {item.description}
                                            </p>
                                            <div className={'text-end'}>
                                                <button onClick={() => handleCart(item)} className="btn btn-success">Add To
                                                    Cart
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            })
                        }

                    </Row>

                </main>
            </AppLayout>
        </CartContext.Provider>
    )
}

export default Page;