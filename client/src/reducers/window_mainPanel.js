import { WINDOW_MAINPANEL_CHANGE, LOG_OUT } from '../actions/types';

export default function(state = 'list' , action) {
  switch (action.type){
    case WINDOW_MAINPANEL_CHANGE:
      return action.payload;
    case LOG_OUT:
      return 'list';
    default:
      return state;
  }
}
