import axios from 'axios';

import {
  FETCH_GALERY,
  SELECT_PROJECTDETAIL
} from './types';

export const fetchGalery = () => async (dispatch) => {
  const res = await axios.get('/api/getGalery');
  dispatch({ type: FETCH_GALERY, payload: res.data });
}

export const selectProjectDetail = (projectSelected) => (dispatch) => {
  dispatch({ type: SELECT_PROJECTDETAIL, payload: {projectSelected} });
}
