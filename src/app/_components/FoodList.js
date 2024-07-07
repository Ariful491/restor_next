import React from 'react';


const FoodList = ({foodItems}) => {

    const removeItem = (id) => {
           alert(id)
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
                        <button className="btn btn-success btn-sm mx-2" >Edit</button>
                        <button className="btn btn-success btn-sm">Delete</button>
                    </td>
                </tr>
            ))}


            </tbody>
        </table>
    )
}
export default FoodList;