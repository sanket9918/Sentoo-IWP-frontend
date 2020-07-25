import axios from 'axios'

// Add Property

export const addProperty = (data, history) => dispatch => {
    axios
        .post("http://127.0.0.1:5000/api/property/addprop", data)
        .then(res => history.push('/'))
        .catch(err => {
            console.log(err)
        })
}
