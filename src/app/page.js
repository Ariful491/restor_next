import AppLayout from "@/app/_components/layouts/App";
import {Col, Row} from "@/app/_components/helperComponents/BootstrapStyleHelper";


export default function Home() {

    const styles = {
        bgImage: {
            background: 'url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            repeat: 'no-repeat',
            backgroundSize: 'cover',
        },
        cardHeight: {
            height: '500px',
        }
    };

    return (
        <>
            <AppLayout>
                <main>
                    <Row>
                        <Col xl={12}>
                            <div className='card ' style={{
                                height: "500px",

                            }}>
                                <div className='card-body text-white' style={styles.bgImage}>
                                    <center className="col-md-6 mx-auto text-danger mt-5">
                                        <h4>
                                            FOOD DELIVERY APP
                                        </h4>
                                        <div className="input-group mb-3 mt-4">

                                            <span className="input-group-text">PRODUCT NAME</span>
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="floatingInputGroup1"
                                                       placeholder="Search"/>
                                                <label htmlFor="floatingInputGroup1">Search</label>
                                            </div>
                                        </div>
                                    </center>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </main>
            </AppLayout>
        </>

    );
}
