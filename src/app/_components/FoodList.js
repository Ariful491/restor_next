import React from 'react';
import {useRouter} from "next/navigation";


const FoodList = ({foodItems, callback}) => {
    const router = useRouter();
    const removeItem = async (id) => {
        try {
            let response = await fetch("http://localhost:3000/api/restaurant/food/" + id, {
                method: "DELETE",
            });
            let data = await response.json();
            if (data) {
                alert("DELETED successfully.")
            }
            callback()
        } catch (error) {
            console.error("Failed to load food items", error);
        }
    }

    const handleEdit = (id) => {
        router.push('/restaurant/food/' + id);
    }


    return (
        <table className="table table-success table-bordered">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Image</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>


            {foodItems && foodItems.map((item, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.food_name}</td>
                    <td>{item.food_price}</td>
                    <td>{item.description}</td>
                    <td>
                        <img src={item.img_path} alt={item.food_name}
                             style={{width: '50px'}}/>
                    </td>
                    <td>
                        <button className="btn btn-success btn-sm mx-2" onClick={() => handleEdit(item._id)}>Edit
                        </button>
                        <button className="btn btn-success btn-sm" onClick={() => removeItem(item._id)}>Delete</button>
                    </td>
                </tr>
            ))}


            </tbody>
        </table>
    )
}
export default FoodList;