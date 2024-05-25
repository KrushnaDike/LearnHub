import { server } from '../store';
import axios from 'axios';

import {
  allCoursesFail,
  allCoursesRequest,
  allCoursesSuccess,
  getCourseFail,
  getCourseRequest,
  getCourseSuccess,
} from '../reducers/courseReducer';

export const getAllCourses =
  (category = '', keyword = '') =>
  async dispatch => {
    try {
      dispatch(allCoursesRequest());
      const { data } = await axios.get(
        `${server}/course/getAllCourses?keyword=${keyword}&category=${category}`
      );

      dispatch(allCoursesSuccess(data.courses));
    } catch (error) {
      console.log('🚀 ~ login ~ error:', error);
      dispatch(allCoursesFail(error.response.data.message));
    }
  };

export const getCourseLectures = courseId => async dispatch => {
  try {
    dispatch(getCourseRequest());
    const { data } = await axios.get(
      `${server}/course/getCourseLectures/${courseId}`,
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch(getCourseSuccess(data.lectures));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(getCourseFail(error.response.data.message));
  }
};
