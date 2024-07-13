"use client"

import AppLayout from "@/app/_components/layouts/App";
import {Col, Row} from "@/app/_components/helperComponents/BootstrapStyleHelper";
import {useParams, useRouter} from "next/navigation";
import {useEffect, useState} from "react";


const Page = () => {

    const [restaurantName, setRestaurantName] = useState('');

    const params = useParams();
    useEffect(() => {
        setRestaurantName(decodeURIComponent(params.name))

    }, [])

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
            </main>
        </AppLayout>
    )
}

export default Page;