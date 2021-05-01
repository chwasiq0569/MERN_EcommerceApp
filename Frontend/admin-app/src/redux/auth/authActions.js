import axios from '../../helpers/axios';
// import axios from 'axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './authTypes';

export const loginRequest = (user) => {
        return {
            type: LOGIN_REQUEST,
            payload: {
                ...user
            }
        }
}
export const loginSuccess = (token, user) => {
        return {
            type: LOGIN_SUCCESS,
            payload: {
                token,
                user
            }
        }
}
export const loginFailure = (error) => {
        console.log('error: ', error)
        return {
            type: LOGIN_FAILURE,
            payload: {
                ...error
            }
        }
}

export const loggingInRequest = (user) => {
    return async (dispatch) => {
        const res = await axios.post('http://localhost:5000/api/signin', {
           ...user
        })
        dispatch(loginRequest(res))
        if(res.status === 201 || res.status === 200){
            const { token, user } = res.data;
            localStorage.setItem('token', token);
            dispatch(loginSuccess(token, user))
        }
        else{
                dispatch(loginFailure(res.data.error))
        }
    }
}

// export { loginRequest };