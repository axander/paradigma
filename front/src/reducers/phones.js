import { SHOW_PHONES } from '../actions'

const initialState = {
    list: []
}

export function showPhones(state = initialState, action) {
    
    switch (action.type) {
        case SHOW_PHONES:
            return Object.assign({}, state, {list: action.payload, loaded: true})
        default:
            return state 
    }
    
}
