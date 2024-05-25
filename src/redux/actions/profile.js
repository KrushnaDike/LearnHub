import { server } from '../store';
import axios from 'axios';
import {
  changePasswordFail,
  changePasswordRequest,
  changePasswordSuccess,
  forgetPasswordFail,
  forgetPasswordRequest,
  forgetPasswordSuccess,
  removeFromPlaylistFail,
  removeFromPlaylistRequest,
  removeFromPlaylistSuccess,
  resetPasswordFail,
  resetPasswordRequest,
  resetPasswordSuccess,
  updateProfileFail,
  updateProfilePictureFail,
  updateProfilePictureRequest,
  updateProfilePictureSuccess,
  updateProfileRequest,
  updateProfileSuccess,
} from '../reducers/profileReducer.js';
import {
  addToPlaylistFail,
  addToPlaylistRequest,
  addToPlaylistSuccess,
} from '../reducers/courseReducer.js';

export const updateProfile = (name, email) => async dispatch => {
  try {
    dispatch(updateProfileRequest());
    const { data } = await axios.put(
      `${server}/user/updateProfile`,
      { name, email },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch(updateProfileSuccess(data.message));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(updateProfileFail(error.response.data.message));
  }
};

export const changePassword = (oldPassword, newPassword) => async dispatch => {
  try {
    dispatch(changePasswordRequest());
    const { data } = await axios.put(
      `${server}/user/changePassword`,
      { oldPassword, newPassword },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch(changePasswordSuccess(data.message));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(changePasswordFail(error.response.data.message));
  }
};

export const updateProfilePicture = formdata => async dispatch => {
  try {
    dispatch(updateProfilePictureRequest());
    const { data } = await axios.put(
      `${server}/user/updateProfilePicture`,
      formdata,
      {
        headers: {
          'Content-type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );

    dispatch(updateProfilePictureSuccess(data.message));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(updateProfilePictureFail(error.response.data.message));
  }
};

export const forgetPassword = email => async dispatch => {
  try {
    dispatch(forgetPasswordRequest());
    const { data } = await axios.post(
      `${server}/user/forgetPassword`,
      { email },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch(forgetPasswordSuccess(data.message));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(forgetPasswordFail(error.response.data.message));
  }
};

export const resetPassword = (token, newPassword) => async dispatch => {
  try {
    dispatch(resetPasswordRequest());
    const { data } = await axios.put(
      `${server}/user/resetPassword/:${token}`,
      { newPassword },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch(resetPasswordSuccess(data.message));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(resetPasswordFail(error.response.data.message));
  }
};

export const addToPlaylist = courseId => async dispatch => {
  try {
    dispatch(addToPlaylistRequest());
    const { data } = await axios.post(
      `${server}/user/addToPlaylist`,
      { courseId },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch(addToPlaylistSuccess(data.message));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(addToPlaylistFail(error.response.data.message));
  }
};

export const removeFromPlaylist = courseId => async dispatch => {
  try {
    dispatch(removeFromPlaylistRequest());
    const { data } = await axios.delete(
      `${server}/user/removeFromPlaylist?courseId=${courseId}`,
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch(removeFromPlaylistSuccess(data.message));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(removeFromPlaylistFail(error.response.data.message));
  }
};
