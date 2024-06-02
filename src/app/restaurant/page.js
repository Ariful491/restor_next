"use client"
import RestaurantLogin from "@/app/_components/RestaurantLogin";
import RestaurantSignUp from "@/app/_components/RestaurantSignUp";
import {useState} from "react";
import AppLayout from "@/app/_components/layouts/App";

const Restaurant = () => {
    const [login, setLogin] = useState(true);


    return (
        <>
            <AppLayout>
                <div style={{
                    backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/007/550/780/original/food-delivery-app-on-a-smartphone-tracking-a-delivery-man-on-a-moped-with-a-ready-meal-technology-and-logistics-concept-city-skyline-in-the-background-vector.jpg")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "100vh"

                }}>

                    <div className="container ">
                        {
                            login ? <RestaurantLogin/> : <RestaurantSignUp/>
                        }
                        <div className="col-md-6 ms-auto">
                            <button
                                onClick={() => setLogin(!login)}
                                className="button-link"
                            >
                                {!login ? 'Already have account ? login' : 'Do not have any account? signUp'}
                            </button>
                        </div>

                    </div>
                </div>
            </AppLayout>
        </>
    )
}

export default Restaurant;