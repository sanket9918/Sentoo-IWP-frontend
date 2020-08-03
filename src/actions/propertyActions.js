import axios from 'axios'
import { backendURL } from '../utils/integration'
// Add Property

export const addProperty = (data, history) => dispatch => {
    axios
        .post(`${backendURL}/api/property/addprop`, data)
        .then(res => history.push('/dashboard'))
        .catch(err => {
            console.log(err)
        })
}
