import { server } from '../store';
import axios from 'axios';
import {
  loginRequest,
  loginSuccess,
  loginFail,
  loadUserRequest,
  loadUserSuccess,
  loadUserFail,
  logoutRequest,
  logoutSuccess,
  logoutFail,
  signupRequest,
  signupSuccess,
  signupFail,
} from '../reducers/userReducer.js';

export const login = (email, password) => async dispatch => {
  try {
    dispatch(loginRequest());
    const { data } = await axios.post(
      `${server}/user/login`,
      { email, password },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch(loginSuccess(data));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(loginFail(error.response.data.message));
  }
};

export const register = formdata => async dispatch => {
  try {
    dispatch(signupRequest());
    const { data } = await axios.post(`${server}/user/signup`, formdata, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
      withCredentials: true,
    });

    dispatch(signupSuccess(data));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(signupFail(error.response.data.message));
  }
};

export const loadUser = () => async dispatch => {
  try {
    dispatch(loadUserRequest());
    const { data } = await axios.get(`${server}/user/getMyProfile`, {
      withCredentials: true,
    });

    dispatch(loadUserSuccess(data.user));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(loadUserFail(error.response.data.message));
  }
};

export const logout = () => async dispatch => {
  try {
    dispatch(logoutRequest());
    const { data } = await axios.get(`${server}/user/logout`, {
      withCredentials: true,
    });

    dispatch(logoutSuccess(data.message));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(logoutFail(error.response.data.message));
  }
};
