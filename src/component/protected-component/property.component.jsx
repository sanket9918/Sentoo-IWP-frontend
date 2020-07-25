import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Row, Col,Button } from "reactstrap";
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { addProperty} from '../../actions/propertyActions'

const style = theme => ({
    root: {
        '& label.Mui-focused': {
            color: '#A81432'
        },
        '& .MuiOutlinedInput-root': {

            '& fieldset': {
                borderColor: '#A81432',
            },
            '&:hover fieldset': {
                borderColor: '#A81432',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#A81432',

            },
        },
    }
})


class Property extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uid: "",
            code: "",
            name: "",
            location: "",
            errors: {}
        }
    }
    onChangeUID = e => {
        this.setState({
            uid: e.target.value

        })
    }
    onChangeName = e => {
        this.setState({
            name: e.target.value

        })
    }
    onChangeLocation = e => {
        this.setState({
            location: e.target.value

        })
    }
    onChangeCode = e => {
        this.setState({
            code: e.target.value

        })
    }
    onSubmit = e => {
        e.preventDefault()

        const newProp = {
            uid: this.state.uid,
            code: this.state.code,
            name: this.state.name,
            location: this.state.location
            
        }
        this.props.addProperty(newProp,this.props.history)
    }
    render() {
        const { classes } = this.props
        return (
            <>
                <div className='position-relative '>
                    <section className="section section-lg section-shaped" >
                        <div className="shape shape-style-1 shape-default">

                        </div>
                        <Container className="py-md">

                            <div className="col px-0">
                                <Row>
                                    <Col lg={{ size: '6' }}>

                                        <h1 className="display-3" style={{ fontSize: "2rem" }}>
                                            Enter the details of the property{" "}

                                        </h1>
                                        <form noValidate onSubmit={this.onSubmit}>
                                        <TextField
                                            className={classes.root}
                                            label="Block UID"
                                            variant="outlined"
                                            id="uid"
                                            value={this.state.uid}
                                            onChange={this.onChangeUID}
                                            style={{ margin: '1em' }} /><br />
                                        <TextField
                                            className={classes.root}
                                            label="Block Code"
                                            variant="outlined"
                                            id="property-form"
                                            value={this.state.code}
                                            onChange={this.onChangeCode}
                                            style={{ margin: '1em' }} /><br />
                                        <TextField
                                            className={classes.root}
                                            label="Block Name"
                                            variant="outlined"
                                            id="property-form"
                                            value={this.state.name}
                                            onChange={this.onChangeName}
                                            style={{ margin: '1em' }} /><br />
                                        <TextField
                                            className={classes.root}
                                            label="Location"
                                            variant="outlined"
                                            id="property-form"
                                            value={this.state.location}
                                            onChange={this.onChangeLocation}
                                                style={{ margin: '1em' }} /><br />
                                            <div className='centre-tag'>
                                            <Button
                                                className="my-4"
                                                    type="submit"
                                                    
                                                style={{ backgroundColor: "#A81432", color: "#fff" ,margin:"1em"}}

                                            >
                                                    Submit
                                </Button></div>
                                        </form>
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

Property.propTypes = {
    property:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    property:state.property
})

export default  connect(mapStateToProps,{addProperty})( withStyles(style)(Property));