import axios from 'axios';
import cookie from 'react-cookies'
import jwtDecode from 'jwt-decode';

import {
  LOGIN_USER_STATUS_CHANGE,
  FETCH_CLIENTDETAIL,
  LOG_OUT,
  WINDOW_MAINPANEL_CHANGE,
  FETCH_PROJECTDETAIL
} from './types';

//Login de Usuario
//TODO: CONFIGURAR TOKEN
export const loginUser = (credentials) => async (dispatch) => {

    credentials.getToken = true;

    try {
      const res = await axios.post('/api/loginUser', credentials);

      const expires = new Date();
      expires.setDate(Date.now() + 1000 * 60 * 60 * 24);

      const decodeToken = jwtDecode(res.data.token);

      //TODO: Configurar dominio y secure
      cookie.save('token', res.data.token, {
        path: '/',
        expires,
        maxAge: 60 * 60 * 24,
        secure: true,
      });
      dispatch({ type: LOGIN_USER_STATUS_CHANGE, payload: {status: true, token: res.data.token, userId: decodeToken.id} });
    } catch (err) {
      console.log(err);
    }
};

//LogOut de usuario
export const logOutUser = () => dispatch => {
  dispatch({ type: LOGIN_USER_STATUS_CHANGE, payload: false });
};

//Realiza un login con el token de una cookie
export const loginFromCookie = (token) => async (dispatch) => {
  const decodeToken = jwtDecode(token);

  try {
    const res = await axios.get('/api/validateToken', { headers: { auth: token } });
    if(res.data.status){
      dispatch({ type: LOGIN_USER_STATUS_CHANGE, payload: {status: true, token: token, userId: decodeToken.id} });
    }
  } catch (err) {
    console.log(err);
  }
};

//LogOut general para todos los combineReducers
//TODO: Utilizar la action logOutUser para este proposito
export const logOut = () => (dispatch) => {
  cookie.remove('token', { path: '/' })
  dispatch({ type: LOG_OUT, payload: {status: false, token: '', userId: ''} });
}

//Obtiene los detalles de un cliente
export const getClientDetail = (token, userId) => async (dispatch) =>{
  try {
    const resU = await axios.get('/api/getClientDetail', { headers: { auth: token, id: userId } });
    dispatch({ type: FETCH_CLIENTDETAIL, payload: resU.data });
  } catch (err) {
    console.log(err);
  }
};

//Obtiene los detalles de un proyecto
//TODO: Verificar en backend que el proyecto sea del usuario
export const getProjectDetail = (token, proyectId) => async (dispatch) =>{
  try {
    const resP = await axios.get('/api/getProjectDetail', { headers: { auth: token, id: proyectId } });
    dispatch({ type: FETCH_PROJECTDETAIL, payload: resP.data });
    dispatch({ type: WINDOW_MAINPANEL_CHANGE, payload: 'detail' });
  } catch (err) {
    console.log(err);
  }
};
