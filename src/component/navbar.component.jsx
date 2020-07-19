import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    UncontrolledCollapse,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

class Navbar1 extends Component {
    // componentDidMount() {
    //   // let headroom = new Headroom(document.getElementById("navbar-main"));
    //   // headroom.init()
    // }
    render() {
        return (
            <div>
                <header className="header-global">
                    <Navbar
                        className="navbar-main navbar-transparent navbar-light headroom"
                        expand="lg"
                        id="navbar-main"
                    >
                        <Container>
                            <NavbarBrand className="mr-lg-5" >
                                <Link to='/'>
                                    <h3 ><b>Sentoo</b></h3>
                                </Link>
                            </NavbarBrand>
                            <button className="navbar-toggler" id="navbar_global">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <UncontrolledCollapse navbar toggler="#navbar_global">
                                <div className="navbar-collapse-header">
                                    <Row>
                                        <Col className="collapse-brand" xs="6">

                                        </Col>
                                        <Col className="collapse-close" xs="6">
                                            <button className="navbar-toggler" id="navbar_global">
                                                <span />
                                                <span />
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                                    <UncontrolledDropdown nav>

                                    </UncontrolledDropdown>
                                    <UncontrolledDropdown nav>
                                        {/*   */}
                                    </UncontrolledDropdown>
                                </Nav>
                                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link-icon"
                                            href="#"
                                            id="tooltip333589074"
                                            target="_blank"
                                        >
                                            <span style={{color:'black'}}>About</span>
                                            <span className="nav-link-inner--text d-lg-none ml-2">
                                                About
                      </span>
                                        </NavLink>
                                        
                                    </NavItem>
                                    

                                </Nav>
                            </UncontrolledCollapse>
                        </Container>
                    </Navbar>
                </header>
            </div>

        )
    }
}

export default Navbar1