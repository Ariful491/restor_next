import {Card, Col, Container, Row} from "@/app/_components/helperComponents/BootstrapStyleHelper";
import {useState} from "react";
import {useRouter} from "next/navigation";


const RestaurantSignUp = () => {
    const router = useRouter();

    const [name, setName] = useState('');
    const [restaurantName, setRestaurantName] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSingUp = async () => {
        let response = await fetch("http://localhost:3000/api/restaurant", {
            method: "POST",
            body: JSON.stringify({name, restaurantName, city, address, contact, email, password})
        })
        response = await response.json();
        if (response.success) {
            alert("Restaurant success fully signup .")
            const {result} = response;
            delete result.password;
            localStorage.setItem('user', JSON.stringify(result));
            router.push('/restaurant/dashboard');
        }
    }


    return (
        <>
            <Container>
                <Row>
                    <Col md='6' className='ms-auto'>
                        <div>
                            <Card className='shadow-lg mt-4 rounded-3 bg-white bg-opacity-75'>
                                <div
                                    className='card-header bg-success bg-opacity-75 text-white shadow   p-2 mb-4 rounded-3'>
                                    <h4>Sign Up</h4>
                                </div>

                                <div className="p-1 m-1">
                                    <input type="text" className="form-control"
                                           value={name}
                                           onChange={(e) => setName(e.target.value)}
                                           placeholder="Name"/>
                                </div>

                                <div className="p-1 m-1">
                                    <input type="text" className="form-control"
                                           value={restaurantName}
                                           onChange={(e) => setRestaurantName(e.target.value)}
                                           placeholder="Enter restaurant name"/>
                                </div>

                                <div className="p-1 m-1">
                                    <input type="text"
                                           value={city}
                                           onChange={(e) => setCity(e.target.value)}
                                           className="form-control" placeholder="Enter city name"/>
                                </div>

                                <div className="p-1 m-1">
                                    <input type="text"
                                           value={address}
                                           onChange={(e) => setAddress(e.target.value)}
                                           className="form-control" placeholder="Enter full address "/>
                                </div>
                                <div className="p-1 m-1">
                                    <input type="text"
                                           value={contact}
                                           onChange={(e) => setContact(e.target.value)}
                                           className="form-control" placeholder="Enter contact number "/>
                                </div>

                                <div className="p-1 m-1">
                                    <input type="email"
                                           value={email}
                                           onChange={(e) => setEmail(e.target.value)}
                                           className="form-control" placeholder="Enter email id"/>
                                </div>
                                <div className="p-1 m-1">
                                    <input type="password"
                                           value={password}
                                           onChange={(e) => setPassword(e.target.value)}
                                           className="form-control" placeholder="Enter password"/>
                                </div>
                                <div className="p-1 m-1">
                                    <input type="password"
                                           value={confirmPassword}
                                           onChange={(e) => setConfirmPassword(e.target.value)}
                                           className="form-control"
                                           placeholder="Enter confirm password"/>
                                </div>
                                <div className="p-1 m-1">
                                    <button className="btn btn-primary" onClick={handleSingUp}> sign up</button>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default RestaurantSignUp;