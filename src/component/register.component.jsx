import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardBody, CardHeader, Form, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser } from '../actions/authActions'
import { Link } from 'react-router-dom';



class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            name: '',
            errors: {}
        }
    }
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');

        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/');
        } if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }
    onSubmit = e => {
        e.preventDefault();

        const data = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name
        }

        this.props.registerUser(data, this.props.history);
    }
    render() {
        const { errors } = this.state
        return (
            <>
                

                <div className='position-relative'>
                    <section className="section section-lg section-shaped section-login" >
                        <div className="shape shape-style-1 shape-default">

                        </div>
                        <Container className="py-md">
                            <div className="col px-0">
                                <Row>
                                    <Col lg={{ size: '6', offset: '3' }} >
                                        <div style={{ margin: 'auto', textAlign: "center", }}>
                                            <Card className="bg-secondary shadow border-0">
                                                <CardHeader className="pb-1" style={{ backgroundColor: "#A81432" }}>
                                                    <div className="text-muted text-center mb-3" >
                                                        <h4 className="text-white">Register</h4>
                                                    </div>
                                                </CardHeader>
                                                <CardBody className="px-sm-5 py-sm-5" style={{ backgroundColor: "#A81432" }}>
                                                    <Form noValidate onSubmit={this.onSubmit}>
                                                        <FormGroup>
                                                            <InputGroup className="input-group-alternative">
                                                                <InputGroupAddon addonType="prepend">
                                                                    <InputGroupText>
                                                                        <i className="fa fa-user" />
                                                                    </InputGroupText>
                                                                </InputGroupAddon>
                                                                <Input
                                                                    placeholder="Name"
                                                                    onChange={this.onChange}
                                                                    value={this.state.name}
                                                                    error={errors.name}
                                                                    id="name"
                                                                    type="text"


                                                                />

                                                            </InputGroup>
                                                        </FormGroup>
                                                        <span
                                                            style={
                                                                {
                                                                    color: 'orange'
                                                                }
                                                            }>
                                                            {errors.name}
                                                        </span>
                                                        <FormGroup>
                                                            <InputGroup className="input-group-alternative">
                                                                <InputGroupAddon addonType="prepend">
                                                                    <InputGroupText>
                                                                        <i className="ni ni-email-83" />
                                                                    </InputGroupText>
                                                                </InputGroupAddon>
                                                                <Input
                                                                    placeholder="Email"
                                                                    onChange={this.onChange}
                                                                    value={this.state.email}
                                                                    error={errors.email}
                                                                    id="email"
                                                                    type="email"


                                                                />

                                                            </InputGroup>
                                                        </FormGroup>
                                                        <span
                                                            style={
                                                                {
                                                                    color: 'orange'
                                                                }
                                                            }>
                                                            {errors.email}
                                                            {errors.emailNotFound}
                                                        </span>
                                                        <FormGroup

                                                        >
                                                            <InputGroup className="input-group-alternative">
                                                                <InputGroupAddon addonType="prepend">
                                                                    <InputGroupText>
                                                                        <i className="ni ni-lock-circle-open" />
                                                                    </InputGroupText>
                                                                </InputGroupAddon>
                                                                <Input
                                                                    placeholder="Password"
                                                                    onChange={this.onChange}
                                                                    value={this.state.password}
                                                                    error={errors.password}
                                                                    id="password"
                                                                    type="password"

                                                                />
                                                            </InputGroup>
                                                        </FormGroup>
                                                        <span className="red-text" style={
                                                            {
                                                                color: 'orange'
                                                            }
                                                        }>
                                                            {errors.password}
                                                            {errors.passwordIncorrect}
                                                        </span><br />
                                                        <Button
                                                            className="my-4"
                                                            type="submit"
                                                        >
                                                            Sign Up
                    </Button><br />
                                                        <span style={{color:'white'}}>
                                                            Already have an account? 
                                                            <Link to='/login'>
                                                                <b> Login</b> </Link> 
                                                        </span>

                                                    </Form>
                                                </CardBody>
                                            </Card>



                                        </div>
                                    </Col>

                                </Row>
                            </div>
                        </Container>
                    </section>
                </div>

            </>)
    }
}
Register.propTypes = {
    registerUser: PropTypes.func,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})
export default connect(
    mapStateToProps,{registerUser}
)(Register)