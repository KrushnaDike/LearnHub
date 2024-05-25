import { server } from '../store';
import axios from 'axios';
import {
  contactFail,
  contactRequest,
  contactSuccess,
  courseRequestFail,
  courseRequestRequest,
  courseRequestSuccess,
} from '../reducers/otherReducer';

export const contactUs = (name, email, message) => async dispatch => {
  try {
    dispatch(contactRequest());
    const { data } = await axios.post(
      `${server}/other/contact`,
      { name, email, message },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch(contactSuccess(data.message));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(contactFail(error.response.data.message));
  }
};

export const courseRequest = (name, email, course) => async dispatch => {
  try {
    dispatch(courseRequestRequest());
    const { data } = await axios.post(
      `${server}/other/courseRequest`,
      { name, email, course },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch(courseRequestSuccess(data.message));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(courseRequestFail(error.response.data.message));
  }
};
