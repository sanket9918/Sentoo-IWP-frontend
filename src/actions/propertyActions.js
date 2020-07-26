import axios from 'axios'

// Add Property

export const addProperty = (data, history) => dispatch => {
    axios
        .post("https://sentoo-back.herokuapp.com//api/property/addprop", data)
        .then(res => history.push('/'))
        .catch(err => {
            console.log(err)
        })
}
