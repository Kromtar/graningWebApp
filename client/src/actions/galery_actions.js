import axios from 'axios';

import {
  FETCH_GALERY,
  SELECT_PROJECTDETAIL
} from './types';

//Lista toda la galeria
export const fetchGalery = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/getGalery');
    dispatch({ type: FETCH_GALERY, payload: res.data });
  } catch(err){
    console.log(err);
  }
}

//Busca los detalles de un proyecto para la galeria
export const selectProjectDetail = (projectSelected) => (dispatch) => {
  dispatch({ type: SELECT_PROJECTDETAIL, payload: {projectSelected} });
}
