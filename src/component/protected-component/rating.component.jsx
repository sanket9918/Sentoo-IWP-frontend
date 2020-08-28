import React, { Component } from "react";
import { Container, Row, Col, Card, Button, CardBody } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";
import { logout } from "../../actions/authActions";
import axios from "axios";
import { backendURL } from "../../utils/integration";
const styles = (theme) => ({
  root: {
    width: "20em",
    "& label.Mui-focused": {
      color: "#A81432",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#A81432",
    },
  },
});

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      commentList: [],
      loading: true,
      myComment: "",
      commented_status: false,
      mycomment_status: false,
    };
  }

  getMyComment() {
    const { location } = this.props;
    const { user } = this.props.auth;
    axios
      .post(`${backendURL}/api/property/getusercomment`, {
        uid: location.query.uid,
        email: user.email,
      })
      .then((res) => {
        this.setState({
          myComment: res.data,
          commented_status: true,
        });
      });
  }
  getComment() {
    const { location } = this.props;
    axios
      .post(`${backendURL}/api/property/getcomment`, {
        uid: location.query.uid,
      })
      .then((res) => {
        this.setState({
          commentList: res.data,
          loading: false,
        });
      });
  }
  onChangeComment = (e) => {
    e.preventDefault();
    this.setState({
      comment: e.target.value,
    });
  };
  onLogout = (e) => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push("/");
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    this.getComment();
    this.getMyComment();
  }
  componentDidUpdate(prev) {
    if (this.state.commented_status !== prev.commented_status) {
      this.getComment();
    }
  }
  render() {
    const { classes, location } = this.props;
    const { user } = this.props.auth;
    const { commentList, loading, myComment, commented_status } = this.state;
    return (
      <>
        <section className="section section-lg section-shaped">
          <div className="shape shape-style-1 shape-default"></div>
          <Container>
            <Row>
              <Col lg="5">
                <div className="text-center"></div>
                <Card
                  className="card-profile shadow block-card"
                  style={{ backgroundColor: "#A81432" }}
                >
                  <div className="px-4">
                    <Row className="justify-content-center">
                      <div className="card-profile-image">
                        <div className="center-tag">
                          <img
                            alt="..."
                            className="rounded-circle"
                            style={{
                              height: "8em",
                              width: "8em",
                              margin: "3em",
                            }}
                            src={require("../../assets/img/building_profile.svg")}
                          />
                        </div>
                      </div>
                      <div className="text-center mt-1 mb-3 ">
                        <h3 className="text-white">
                          {location.query.blockName}{" "}
                          <span className="font-weight-light text-white">
                            , {location.query.blockCode}
                          </span>
                        </h3>
                        <div className="h6 font-weight-300 text-white">
                          <i className="ni location_pin mr-2 text-white" />
                          {location.query.blockLocation}
                        </div>
                        <div className="h6 mt-4 text-white">
                          <i className="ni business_briefcase-24 mr-2" />
                          Average rating -
                        </div>
                        <br />
                        <Button
                          className="my-4"
                          type="button"
                          onClick={() => {
                            this.props.history.push("/dashboard");
                          }}
                        >
                          Back
                        </Button>
                      </div>
                    </Row>
                  </div>
                </Card>
              </Col>

              <Col>
                <div classname="tidy-mobile">
                  <br />
                </div>
                {commented_status ? (
                  <div className="center-tag">
                    <br />
                    <h3>You previously commented</h3>
                    <br />
                    {this.state.comment || myComment}
                    <br />
                    <Button
                      className="my-4"
                      type="button"
                      style={{ backgroundColor: "#A81432", color: "#fff" }}
                      onClick={(e) => {
                        e.preventDefault();
                        axios
                          .post(`${backendURL}/api/property/deletecomment`, {
                            uid: location.query.uid,
                            email: user.email,
                          })
                          .then((res) => {
                            this.setState({
                              commented_status: false,
                            });
                          });
                      }}
                    >
                      Delete
                    </Button>
                    <br />
                    <span>
                      <i>* deleted comments get refreshed automatically</i>
                    </span>
                  </div>
                ) : (
                  <div>
                    <h3 className="center-tag">Post Your comments!</h3>
                    <form noValidate autoComplete="off" className="center-tag">
                      <TextField
                        className={classes.root}
                        id="standard-basic"
                        label="Comments"
                        onChange={this.onChangeComment}
                        value={this.state.comment}
                      />
                      <br />
                      <Button
                        className="my-4"
                        type="submit"
                        style={{ backgroundColor: "#A81432", color: "#fff" }}
                        onClick={(e) => {
                          e.preventDefault();
                          axios
                            .post(`${backendURL}/api/property/addcomment`, {
                              uid: location.query.uid,
                              comment: this.state.comment,
                              email: `${user.email}`,
                            })
                            .then(
                              this.setState({
                                commented_status: true,
                                mycomment_status: true,
                              })
                            );
                        }}
                      >
                        Submit Comment
                      </Button>
                    </form>
                  </div>
                )}
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="center-tag">
                  <br />
                  <h3>Previous comments</h3>
                  <br />
                </div>
                <section>
                  {loading ? (
                    <div className="center-tag">
                      <span>
                        Please wait while comments are being loaded...
                      </span>
                    </div>
                  ) : (
                    commentList.map((e) => (
                      <Card style={{ margin: "1em" }}>
                        <CardBody>{e.comment}</CardBody>
                      </Card>
                    ))
                  )}
                </section>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

Rating.propTypes = {
  classes: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(withStyles(styles)(Rating));
