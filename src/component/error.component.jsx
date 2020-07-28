import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Error extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);

   }
    render() {
        return (
            <>
                <section className="section section-lg section-shaped">
                    <div className="shape shape-style-1 shape-default">

                    </div>
                    <Container className="py-md">
                        <Row className="row-grid justify-content-between align-items-center">
                            <div style={{ margin: "auto", textAlign: "center" }}>
                                <Col lg="12">
                                    <img
                                        alt="..."
                                        className="img-fluid"
                                        style={{ paddingBottom: "1em", height: "20em" }}
                                        src={require("../assets/img/error.svg")}

                                    />
                                    <h1 className="display-3">
                                        Oops, something went wrong!
                                    </h1>                                  


                                    <Link to="/">
                                        <Button
                                            className="my-4"
                                            type="submit"
                                            style={{ backgroundColor:"#A81432",color:"#fff"}}

                                        >
                                            Main Page
                                </Button>
                                    </Link>


                                </Col>
                            </div>
                        </Row>
                    </Container>
                </section>
                </>
        )
    }
}

export default Error;