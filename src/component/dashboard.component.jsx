import React, { Component } from 'react'
import { Container, Row, Col, Button } from "reactstrap";
class Dashboard extends Component {
    render() {
        return (
            <>

                <div className='position-relative'>
                    <section className="section section-sm  section-shaped" style={{height:'100vh'}}>
                        <div className="shape shape-style-1 shape-default">

                        </div>
                        <Container className="py-md">
                            <div style={{ margin: 'auto', textAlign: "center" }} className="col px-0">
                                <Row>
                                    <Col>
                                        <img
                                            alt="..."
                                            className="img-fluid"
                                            style={{ maxHeight: '2em', margin: '1em' }}
                                            src={require("../assets/img/divider.svg")}

                                        />
                                        <br />
                                        <h2>
                                            Welcome                                        </h2>
                                    </Col>

                                </Row>
                            </div>
                        </Container>
                    </section>
                </div>

            </>
        )
    }
}
export default Dashboard;