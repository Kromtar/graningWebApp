import axios from 'axios';
import cookie from 'react-cookies'
import jwtDecode from 'jwt-decode';

import {
  LOGIN_USER
} from './types';

//Login de Usuario a la API
export const loginUser = (credentials) => async (dispatch, getState) => {

    credentials.getToken = true; //TODO: Momentaneo para que la API nos retorne un Token y no el objeto de usuario

    try {
      const res = await axios.post('/api/loginUser', credentials);

      const expires = new Date();
      expires.setDate(Date.now() + 1000 * 60 * 60 * 24);

      const decodeToken = jwtDecode(res.data.token);

      //TODO: Configurar dominio y secure
      cookie.save('token', res.data.token, {
        path: '/',
        expires,
        maxAge: 60 * 60 * 24
      });
      dispatch({ type: LOGIN_USER, payload: {status: true, token: res.data.token, userId: decodeToken.id} });
    } catch (err) {
      console.log(err); //TODO:Manejo de error con mensaje
    }
};

//LogOut de usuario
export const logOutUser = () => dispatch => {
  dispatch({ type: LOGIN_USER, payload: false });
};

export const loginFromCookie = (token) => (dispatch) => {
  const decodeToken = jwtDecode(token);
  dispatch({ type: LOGIN_USER, payload: {status: true, token: token, userId: decodeToken.id} });
};

export const logOut = () => (dispatch) => {
  cookie.remove('token', { path: '/' })
  dispatch({ type: LOGIN_USER, payload: {status: false, token: '', userId: ''} });
}
