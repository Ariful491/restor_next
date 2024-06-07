import {Col, Container, Row} from "@/app/_components/helperComponents/BootstrapStyleHelper";

const Footer = () => {
    return (
        <>
            <Row >
                <Container >
                    <Col md='12' xl='12' sm='12' className='text-center bg-gradient bg-success  shadow-md border-3 p-2 text-white  '  >
                        <div>
                            2024 &copy; All right reserved for Ariful Hoque Restaurant App
                        </div>
                    </Col>
                </Container>
            </Row>
        </>
    )
}

export default Footer;