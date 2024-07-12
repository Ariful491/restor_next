"use client"
import AppLayout from "@/app/_components/layouts/App";
import {Col, Row} from "@/app/_components/helperComponents/BootstrapStyleHelper";
import {useEffect, useState} from "react";


export default function Home() {

    const [locations, setLocations] = useState([]);
    const [restaurant, setRestaurant] = useState([]);

    const loadLocation = async () => {
        let response = await fetch('http://localhost:3000/api/customer/locations', {
            method: 'GET'
        })
        let data = await response.json();
        setLocations(data.result)
    }

    useEffect(() => {
        loadLocation().then(r => console.log(r));
        loadRestaurant();

    }, [])

    const loadRestaurant = async () => {
        let response = await fetch('http://localhost:3000/api/customer/', {
            method: "GET"
        })
        let data = await response.json();
        setRestaurant(data.result)
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
        <>
            <AppLayout>
                <main>
                    <Row>
                        <Col xl={12}>
                            <div className='card ' style={{
                                height: "320px",

                            }}>
                                <div className='card-body text-white' style={styles.bgImage}>
                                    <center className="col-md-8 mx-auto  mt-5">
                                        <h4 className="fw-bolder   py-3 rounded-5 my-5">
                                            FOOD DELIVERY APP
                                        </h4>

                                        <div className="input-group">

                                            <select className=" form-control form-control-lg">
                                                <option value=''>Select Location</option>

                                                {
                                                    locations && locations.map((item, key) => {
                                                        if (item) {
                                                            return <option key={key} value={item}>{item}</option>;
                                                        }

                                                    })
                                                }
                                            </select>


                                            <input type="text" placeholder="Enter food or restuarant name"
                                                   className="form-control py-3 w-50 form-control-lg"/>
                                        </div>

                                    </center>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {
                            restaurant && restaurant.map((item, key) => {
                                if (item.city) {
                                    return <Col xl={4} key={key}>
                                        <a href="" className={'btn btn-warning  d-block py-4 m-2'}>
                                            <h3 className={'m-3'}>
                                                {item.city}
                                            </h3>
                                            <p className={'m-3'}>
                                                Contact: {item.contact},
                                            </p>
                                            <p className={'m-3'}>
                                                Email: {item.email}
                                            </p>
                                            <p className={'m-3'}>
                                                 {item.address}
                                            </p>
                                        </a>
                                    </Col>
                                }
                                return null;
                            })
                        }
                    </Row>
                </main>
            </AppLayout>
        </>

    );
}
