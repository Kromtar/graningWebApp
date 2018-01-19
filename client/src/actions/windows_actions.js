import {
  WINDOW_MAINPANEL_CHANGE
} from './types';

export const openDetailWindow = () => (dispatch) => {
  dispatch({ type: WINDOW_MAINPANEL_CHANGE, payload: 'detail' });
}

export const openListWindow = () => (dispatch) => {
  dispatch({ type: WINDOW_MAINPANEL_CHANGE, payload: 'list' });
}
