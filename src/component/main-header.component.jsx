import React, { Component } from 'react'
import { Container, Row, Col, Button } from "reactstrap";
import Navbar1 from './navbar.component';
import About from './about.component';
import { Link } from 'react-router-dom';
class Hero extends Component {

    render() {
        return (
          <>
            <Navbar1 />
            <div className="position-relative main-content">
              <section className="section section-lg section-hero section-shaped">
                <div className="shape shape-style-1 shape-default"></div>
                <Container className="py-lg-md d-flex">
                  <div className="col px-0">
                    <Row>
                      <Col sm="12" lg="6" md="12">
                        <h1 className="display-3" style={{ fontSize: "48px" }}>
                          Rest assured and get an accomodation{" "}
                        </h1>

                        <p className="lead">
                          Get yourself your own suitable and comfortable stay by
                          choosing the highest rated hostel.
                        </p>

                        <div className="btn-wrapper">
                          <Link to="/login">
                            <Button
                              className="btn-icon mb-3 mb-sm-0"
                              color="danger"
                            >
                              <span className="btn-inner--text">Try it!</span>
                            </Button>
                          </Link>
                        </div>
                      </Col>
                      <Col lg="6" md="12">
                        <img
                          alt="..."
                          className="img-fluid"
                          style={{ height: "40em" }}
                          src={require("../assets/img/building.svg")}
                        />
                      </Col>
                    </Row>
                  </div>
                </Container>
              </section>
              <About />
            </div>
          </>
        );

    }

}
export default Hero;