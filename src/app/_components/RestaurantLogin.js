const RestaurantLogin = () => {
    return (
        <>
            <h3>Login Component</h3>
            <div>
                <div className="input-wrapper">
                    <input type="email" className="input-field" placeholder="Enter email id"/>
                </div>
                <div className="input-wrapper">
                    <input type="password" className="input-field" placeholder="Enter password"/>
                </div>
                <div className="input-wrapper">
                    <button className="button"> Login </button>
                </div>
            </div>
        </>
    )
}


export default RestaurantLogin;