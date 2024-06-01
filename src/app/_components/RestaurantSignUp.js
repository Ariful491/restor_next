const RestaurantSignUp = () => {
    return (
        <>
            <h3>
                Restaurant signUp
            </h3>

            <div>
                <div className="input-wrapper">
                    <input type="text" className="input-field" placeholder="Name"/>
                </div>

                <div className="input-wrapper">
                    <input type="text" className="input-field" placeholder="Enter restaurant name"/>
                </div>

                <div className="input-wrapper">
                    <input type="text" className="input-field" placeholder="Enter city name"/>
                </div>

                <div className="input-wrapper">
                    <input type="text" className="input-field" placeholder="Enter full address "/>
                </div>
                <div className="input-wrapper">
                    <input type="text" className="input-field" placeholder="Enter contact number "/>
                </div>

                <div className="input-wrapper">
                    <input type="email" className="input-field" placeholder="Enter email id"/>
                </div>
                <div className="input-wrapper">
                    <input type="password" className="input-field" placeholder="Enter password"/>
                </div>
                <div className="input-wrapper">
                    <input type="password" className="input-field" placeholder="Enter confirm password"/>
                </div>
                <div className="input-wrapper">
                    <button className="button"> sign up</button>
                </div>
            </div>

        </>
    )
}


export default RestaurantSignUp;