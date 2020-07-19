import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const ProtectedRoute = ({ component: Component, auth, ...props }) => (
    <Route {...props}
        render={prop =>
            auth.isAuthenticated || auth.isAuthenticated_org === true ? (
                <Component {...prop} />
            ) :
                (<Redirect to="/error" />)}
    />

);

ProtectedRoute.propTypes = {
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(ProtectedRoute)