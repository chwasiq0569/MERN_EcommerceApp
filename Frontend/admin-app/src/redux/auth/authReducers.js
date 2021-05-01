import { LOGIN_REQUEST } from './authTypes';
const initialCakeState = {
    name: "Wasiq"
}
const authReducer = (state = initialCakeState, action) => {
      switch(action.type){
          case LOGIN_REQUEST:
              return action.payload
          default:
              return state;    
      }
}

export default authReducer;