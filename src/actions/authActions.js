import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { SET_USER, GET_ERRORS } from './types';

// SignUp

export const registerUser = (userData, history) => dispatch => {
    axios
        .post('api/user/signup', userData)
        .then(res => history.push('/'))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
};

// Login

export const loginUser = userData => dispatch => {
    axios
        .post('api/user/signin',userData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('token', token);
            setAuthToken(token);
            const decode = jwt_decode(token);
            dispatch(setUser(decode));
        })
        .catch(
            err => {
                dispatch({
                    type: GET_ERRORS,
                    payload:err.response.data
                })
        }
    )
}

export const setUser = decode => {
    return {
        type: SET_USER,
        payload:decode
    }
}

export const logout = () => dispatch => {
    localStorage.removeItem('token');
    setAuthToken(false);
    dispatch(setUser({}));
}