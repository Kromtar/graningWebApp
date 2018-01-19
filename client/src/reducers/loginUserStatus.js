import { LOGIN_USER_STATUS_CHANGE, LOG_OUT } from '../actions/types';

const defaultState = {status: false, token: '', userId: ''}

export default function(state = defaultState , action) {
  switch (action.type){
    case LOGIN_USER_STATUS_CHANGE:
      return action.payload;
    case LOG_OUT:
      return defaultState;
    default:
      return state;
  }
}
