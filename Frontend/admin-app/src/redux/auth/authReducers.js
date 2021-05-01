import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './authTypes';
const initialCakeState = {
    token: null,
    user: {
        firstname: '',
        lastname: '',
        email: '',
        picture: ''
    },
    authenticate: false,
    authenticating: false
}
const authReducer = (state = initialCakeState, action) => {
      console.log(action)
      switch(action.type){
          case LOGIN_REQUEST:
              return {
                ...state,  
                authenticating: true
            }
          case LOGIN_SUCCESS:
              return {
                ...state,  
                token: action.payload.token,
                user: action.payload.user,
                authenticate: true,
                authenticating: false
            }

          case LOGIN_FAILURE:
              return action.payload  
              
          default:
              return state;    
      }
}

export default authReducer;