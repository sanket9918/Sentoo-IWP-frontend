import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from "reactstrap";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';
import { logout } from '../../actions/authActions'
const styles = theme => ({
    root: {
        width: "20em",
        "& label.Mui-focused": {
            color: "#A81432"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#A81432"
        },
    }
})

class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    onSubmit(e) {
        e.preventDefault();
    }
    onLogout = e => {
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/');
    }
    render() {
        const { classes, location } = this.props;
        return (
            <>

                <section className="section section-lg section-shaped">
                    <div className="shape shape-style-1 shape-default">

                    </div>
                    <Container>
                        <Row>
                            <Col lg='5'>
                                <div className='text-center'></div>
                                <Card className="card-profile shadow block-card" style={{ backgroundColor: '#A81432' }}>
                                    <div className="px-4">
                                        <Row className="justify-content-center">

                                            <div className="card-profile-image">
                                                <div className='center-tag'>

                                                    <img
                                                        alt="..."
                                                        className="rounded-circle"
                                                        style={{ height: '8em', width: '8em', margin: '3em' }}
                                                        src={require("../../assets/img/building_profile.svg")}
                                                    />
                                                </div>
                                            </div>
                                            <div className="text-center mt-1 mb-3 ">
                                                <h3 className='text-white'>
                                                    {location.query.blockName}{" "}
                                                    <span className="font-weight-light text-white">, {location.query.blockCode}</span>
                                                </h3>
                                                <div className="h6 font-weight-300 text-white">
                                                    <i className="ni location_pin mr-2 text-white" />
                     {location.query.blockLocation}
                    </div>
                                                <div className="h6 mt-4 text-white">
                                                    <i className="ni business_briefcase-24 mr-2" />
                      Average rating -
                    </div><br />
                                                <Button
                                                    className="my-4"
                                                    type="button"
                                                    onClick={this.onLogout}
                                                >
                                                    Logout
                                </Button>

                                            </div>

                                        </Row>
                                    </div>
                                </Card>
                            </Col>

                            <Col>
                                <div classname="tidy-mobile"><br /></div>
                                <h3 className='center-tag'>
                                    Post Your comments!
                                </h3>
                                <form noValidate autoComplete="off" className='center-tag' onSubmit={this.onSubmit}>
                                    <TextField className={classes.root} id="standard-basic" label="Comments" /><br />
                                    <Button
                                        className="my-4"
                                        type="submit"
                                        style={{ backgroundColor: "#A81432", color: "#fff" }}

                                    >
                                        Submit Comment
                                </Button>

                                </form>

                            </Col>

                        </Row>
                    </Container>
                </section>


            </>
        )
    }
}

Rating.propTypes = {
    classes: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, { logout })(withStyles(styles)(Rating));