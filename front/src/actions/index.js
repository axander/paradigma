import axios from 'axios'

export const SHOW_PHONES = 'SHOW_PHONES'

export function showPhones() {
    
    return (dispatch, getState) => {
        axios.get('http://localhost:3000/phones')
            .then((response) => {
                dispatch( { type: SHOW_PHONES, payload: response.data } ) 
            }) 
    }
} 

