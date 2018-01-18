import { LOGIN_USER } from '../actions/types';

export default function(state = {status: false, token: '', userId: ''} , action) {
  switch (action.type){
    case LOGIN_USER:
      return action.payload;
    default:
      return state;
  }
}
