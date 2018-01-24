import { SELECT_PROJECTDETAIL, LOG_OUT } from '../actions/types';

export default function(state = '' , action) {
  switch (action.type){
    case SELECT_PROJECTDETAIL:
      return action.payload;
    case LOG_OUT:
      return '';
    default:
      return state;
  }
}
