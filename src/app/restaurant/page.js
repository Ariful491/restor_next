"use client"
import RestaurantLogin from "@/app/_components/RestaurantLogin";
import RestaurantSignUp from "@/app/_components/RestaurantSignUp";
import {useState} from "react";

const Restaurant = () => {
    const [login, setLogin] = useState(true);


    return (
        <>
            <div className="container">

                {
                    login ? <RestaurantLogin/> : <RestaurantSignUp/>
                }
                <div>
                    <button
                        onClick={() => setLogin(!login)}
                        className="button-link"
                    >
                        {!login ? 'Already have account ? login' : 'do not have any account? signUp'}
                    </button>
                </div>

            </div>
        </>
    )
}

export default Restaurant;