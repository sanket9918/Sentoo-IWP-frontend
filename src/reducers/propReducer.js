import { ADD_PROPERTY } from '../actions/types'

const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_PROPERTY:
            return action.payload;
        default:
            return state

    }
}