'use client'
import AuthLayout from "@/app/_components/layouts/Auth";

import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import EditFoodItem from "@/app/_components/EditFoodItem";

const Page = () => {

    const [foodItem, setFoodItem] = useState([]);
    const params = useParams();


    const getDataById = async (id) => {
        try {
            let response = await fetch("http://localhost:3000/api/restaurant/food/" + id, {
                method: "GET",
            });
            let data = await response.json();
            setFoodItem(data.result)

        } catch (error) {
            console.error("Failed to load food items", error);
        }

    }


    useEffect(() => {
        getDataById(params.id)

    }, []);


    return (
        <>
            <AuthLayout>
                <EditFoodItem foodItem={foodItem}/>
            </AuthLayout>
        </>
    )
}
export default Page;