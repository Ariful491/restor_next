import AuthLayout from "@/app/_components/layouts/Auth";
import {Card, Col, Container, Row} from "@/app/_components/helperComponents/BootstrapStyleHelper";


const Page = () => {
    return (
        <>
            <AuthLayout>
                <Row>
                    <Container>
                        <Col md={8} className={'mx-auto'}>
                            <Card>
                                <div className={'card-header'}>
                                    <h4> Food List</h4>
                                </div>
                                <div className={'card-body'}>
                                    <table className="table table-dark">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colSpan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card>


                        </Col>
                    </Container>
                </Row>
            </AuthLayout>
        </>
    )
}
export default Page;