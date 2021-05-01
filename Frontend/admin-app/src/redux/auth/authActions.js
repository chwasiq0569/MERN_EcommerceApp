import { LOGIN_REQUEST } from './authTypes';
const loginRequest = (user) => {
    return {
        type: LOGIN_REQUEST,
        payload: {
            ...user
        }
    }
}
export default loginRequest;