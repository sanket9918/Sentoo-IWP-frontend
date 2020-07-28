import React, { Component } from 'react'
import { Container, Card, Button, CardBody } from "reactstrap";
import axios from 'axios'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/authActions'
import { Link } from 'react-router-dom';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propertyList: [],
            loading: true
        }
    }

    getProp() {
        axios
            .post("https://sentoo-back.herokuapp.com/api/property/getprop")
            .then(res =>
                this.setState({
                    propertyList: res.data,
                    loading: false
                }))

    }
    onLogout = e => {
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/');
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.getProp();
    }
    render() {
        const { propertyList, loading } = this.state
        const { user } = this.props.auth
        return (
            <>
                <section className="section section-lg section-shaped">
                    <div className="shape shape-style-1 shape-default" >

                    </div>
                    <Container>
                        <section className="section section-shaped">

                            <div className="shape shape-style-1 shape-default greeting-box" style={{ backgroundColor: "#A81432", borderRadius: '1em' }} >

                            </div>
                            <div className='center-tag '><h3 className='text-white' ><b>Hello {user.name}</b></h3><hr style={{ width: '40%', backgroundColor: 'white' }} />
                                <span className='text-white'>Find your suitable accomodation from the choices given below</span><br />
                                <Button
                                    className="my-4"
                                    type="submit"
                                    style={{ backgroundColor: "#A81432", color: "#fff" }}
                                    onClick={this.onLogout}                                 
                                >
                                    logout
                                    </Button>
                            </div>
                        </section>
                        <Container>
                            <div style={{ marginTop: '2em' }}>
                                <span style={{ fontSize: '1.5em' }}>
                                    Help the community to find more properties!

                                </span>
                                <br />
                                <div className="grid" style={{ marginTop: '1em' }}>
                                    <Link to='/property'>
                                    <Card style={{ backgroundColor: '#A81432', textAlign: 'center', cursor: 'pointer' }}>
                                        <CardBody>
                                                <i class="fa fa-plus add text-white" aria-hidden="true"></i><br /><br />

                                            <span className='text-white'>Add Property</span>
                                        </CardBody>
                                        </Card>
                                    </Link>

                                </div>
                            </div>
                            <hr />
                        </Container>

                    </Container>

                </section>

                <section className="section  section-shaped" style={{ marginTop: '-10em' }} >
                    <div className="shape shape-style-1 shape-default" >
                      
                    </div>
                    
                    <Container>
                        <span style={{ fontSize: '1.5em'}}>Properties to explore</span>
                        {loading ? <div className="center-tag"><span>Please wait while assets are being loaded...</span></div> :
                            <div className="grid" style={{ marginTop: '2em' }}>
                                {propertyList.map((e) => (
                                    <Link to={{
                                        pathname: '/rating',
                                        query: {
                                            uid: e.uid,
                                            blockCode: e.code,
                                            blockName: e.name,
                                            blockLocation: e.location,
                                        }

                                    }}>
                                        <Card style={{ backgroundColor: '#A81432', textAlign: 'center', cursor: 'pointer' }} key={e.id} onClick={() => {

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


                            </div>}
                    </Container>
                </section>
            </>

        )
    }
}
Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(
    mapStateToProps, { logout }
)(Dashboard)