import axios from '../../helpers/axios';
// import axios from 'axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS } from './authTypes';

export const loginRequest = (user) => {
        console.log('user: ', user)
        return {
            type: LOGIN_REQUEST,
            payload: {
                ...user
            }
        }
}
export const loginSuccess = (user) => {
        console.log('user: ', user)
        return {
            type: LOGIN_SUCCESS,
            payload: {
                ...user
            }
        }
}
// export const loginFailure = (user) => {
//         console.log('user: ', user)
//         return {
//             type: LOGIN_SUCCESS,
//             payload: {
//                 ...user
//             }
//         }
// }

export const loggingInRequest = (user) => {
    return async (dispatch) => {
        const res = await axios.post('http://localhost:5000/api/signin', {
           ...user
        })
        dispatch(loginRequest(res))
    }
}

// export { loginRequest };