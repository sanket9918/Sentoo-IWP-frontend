import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardBody } from "reactstrap";
import { property } from '../../utils/property'
import Rating from './rating.component';
import { Link, Route } from 'react-router-dom';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }


    }
    cardClick(e){
    }
    render() {
        return (
            <>
                <section className="section section-lg section-shaped">
                    <div className="shape shape-style-1 shape-default" >

                    </div>
                    <Container>
                        <section className="section  section-shaped">

                            <div className="shape shape-style-1 shape-default" style={{ backgroundColor: "#A81432", borderRadius: '1em' }} >

                            </div>
                            <div className='center-tag '><h3 className='text-white' >Let's get started:-)</h3></div>
                        </section>
                    </Container>
                </section>

                <section className="section  section-shaped">
                    <div className="shape shape-style-1 shape-default" >

                    </div>
                    <Container>
                        <div className="grid">
                            {property.map((e) => (
                                <Link to={{
                                    pathname: '/rating',
                                    query: {
                                        blockId:e.id,
                                        blockCode: e.code,
                                        blockName: e.name,
                                        blockLocation: e.location,
                                        
                                    }
                                    
                                }}>
                                <Card style={{ backgroundColor: '#A81432', textAlign: 'center',cursor:'pointer'}} key={e.id} onClick={() => {
                                    console.log(e.id)
                                }}>
                                    <CardBody>
                                        <span className="text-white card-text">{e.code}</span><br />
                                        <span className="text-white card-text">{e.name}</span>
                                        <hr />
                                        <span className="text-white card-text">{e.location}</span>

                                    </CardBody>
                                    </Card>
                                </Link>
                            )
                            )
                            }


                        </div>
                    </Container>
                </section>
            </>

        )
    }
}

export default Dashboard;