import {Card, Col, Container, Row} from "@/app/_components/helperComponents/BootstrapStyleHelper";
import {useState} from "react";
import {useRouter} from "next/navigation";

const RestaurantLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const type = true;

    const router = useRouter();

    const handleLogin = async () => {
        if (!email || !password) {
            setError(true)
            return null;
        } else {
            setError(false);
        }

        let response = await fetch("http://localhost:3000/api/restaurant", {
            method: "POST",
            body: JSON.stringify({email, password, type})
        })
        response = await response.json();
        if (response.success) {
            alert("Restaurant success fully signup .")
            const {result} = response;
            delete result.password;
            localStorage.setItem('user', JSON.stringify(result));
            router.push('/restaurant/dashboard');
        } else {
            alert(response.error);
        }

    }

    return (
        <>
            <Container>
                <Row>
                    <Col md='6' className='ms-auto'>
                        <div>
                            <Card className='shadow-lg mt-4  bg-white bg-opacity-75 rounded-3'>
                                <div
                                    className='card-header bg-success bg-opacity-75 text-white shadow   p-2 mb-4 rounded-3'>
                                    <h4>Login</h4>
                                </div>
                                <div className='m-1 p-2'>
                                    <input type="email" className="form-control "
                                           value={email}
                                           onChange={(e) => setEmail(e.target.value)}
                                           placeholder="Enter email id"/>
                                    <div className={'text-start'}>
                                        {
                                            error && !email ?
                                                <span className={'text-danger'}>Email is required.</span>
                                                : ''
                                        }
                                    </div>
                                </div>
                                <div className='m-1 p-2'>
                                    <input type="password" className=" form-control  "
                                           value={password}
                                           onChange={(e) => setPassword(e.target.value)}
                                           placeholder="Enter password"/>
                                    <div className={'text-start'}>
                                        {
                                            error && !password ?
                                                <span className={'text-danger'}>Password is required.</span>
                                                : ''
                                        }
                                    </div>
                                </div>
                                <div className='m-1 p-3'>
                                    <button onClick={handleLogin} className="  btn btn-primary"> Login</button>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default RestaurantLogin;