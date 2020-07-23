import React, { Component } from 'react'
import { Container, Row, Col } from "reactstrap";
class About extends Component{
    render() {
        return (
            <>
        
            <div className='position-relative'>
                <section className="section section-sm section-shaped">
                    <div className="shape shape-style-1 shape-default">

                    </div>
                        <Container>
                            <div style={{ margin: 'auto', textAlign: "center", marginTop: '-8em' }}>
                        <Row>
                        <Col>
                                <img
                                    alt="..."
                                            className="img-fluid"
                                    style={{height:"1em",margin:'1em'}}        
                                    src={require("../assets/img/divider.svg")}

                                        />
                                        <br />
                                        <h4>
                                            Live with a style
                                        </h4>
                                        
                                        <img
                                            alt="..."
                                            className="img-fluid"
                                            style={{ height: "1em", margin: '1em',transform:'rotate(180deg)' }}
                                            src={require("../assets/img/divider.svg")}

                                        />
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
export default About;