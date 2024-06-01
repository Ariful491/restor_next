import {Card, Col, Container, Row} from "@/app/_components/helperComponents/BootstrapStyleHelper";

const RestaurantLogin = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md='6' className='mx-auto'>
                        <div>
                            <Card className='shadow-lg mt-4   rounded-3'>
                                <div className='card-header bg-success bg-opacity-75 text-white shadow   p-2 mb-4 rounded-3'>
                                    <h4>Login</h4>
                                </div>
                                <div className='m-1 p-2'>
                                    <input type="email" className="form-control " placeholder="Enter email id"/>
                                </div>
                                <div className='m-1 p-2'>
                                    <input type="password" className=" form-control  " placeholder="Enter password"/>
                                </div>
                                <div className='m-1 p-3'>
                                    <button className="  btn btn-primary"> Login</button>
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