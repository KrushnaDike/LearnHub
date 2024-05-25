import { server } from '../store';
import {
  addLectureFail,
  addLectureRequest,
  addLectureSuccess,
  createCourseFail,
  createCourseRequest,
  createCourseSuccess,
  deleteCourseFail,
  deleteCourseRequest,
  deleteCourseSuccess,
  deleteLectureFail,
  deleteLectureRequest,
  deleteLectureSuccess,
  deleteUserFail,
  deleteUserRequest,
  deleteUserSuccess,
  getAdminStatsFail,
  getAdminStatsRequest,
  getAdminStatsSuccess,
  getAllUsersFail,
  getAllUsersRequest,
  getAllUsersSuccess,
  updateUserRoleFail,
  updateUserRoleRequest,
  updateUserRoleSuccess,
} from '../reducers/adminReducer';
import axios from 'axios';

export const createCourse = formData => async dispatch => {
  try {
    dispatch(createCourseRequest());
    const { data } = await axios.post(
      `${server}/course/createCourse`,
      formData,
      {
        headers: {
          'Content-type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );

    dispatch(createCourseSuccess(data.message));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(createCourseFail(error.response.data.message));
  }
};

export const deleteCourse = courseId => async dispatch => {
  try {
    dispatch(deleteCourseRequest());
    const { data } = await axios.delete(
      `${server}/course/deleteCourse/${courseId}`,
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch(deleteCourseSuccess(data.message));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(deleteCourseFail(error.response.data.message));
  }
};

export const addLecture = (courseId, formdata) => async dispatch => {
  try {
    dispatch(addLectureRequest());
    const { data } = await axios.post(
      `${server}/course/addCourseLecture/${courseId}`,
      formdata,
      {
        headers: {
          'Content-type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );

    dispatch(addLectureSuccess(data.message));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(addLectureFail(error.response.data.message));
  }
};

export const deleteLecture = (courseId, lectureId) => async dispatch => {
  try {
    dispatch(deleteLectureRequest());
    const { data } = await axios.delete(
      `${server}/course/deleteLecture/${courseId}/${lectureId}`,
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch(deleteLectureSuccess(data.message));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(deleteLectureFail(error.response.data.message));
  }
};

export const getAllUsers = () => async dispatch => {
  try {
    dispatch(getAllUsersRequest());
    const { data } = await axios.get(`${server}/user/getAllUsers`, {
      headers: {
        'Content-type': 'application/json',
      },
      withCredentials: true,
    });

    dispatch(getAllUsersSuccess(data.users));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(getAllUsersFail(error.response.data.message));
  }
};

export const updateUserRole = userId => async dispatch => {
  try {
    dispatch(updateUserRoleRequest());
    const { data } = await axios.put(
      `${server}/user/updateUserRole/${userId}`,
      {},
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch(updateUserRoleSuccess(data.message));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(updateUserRoleFail(error.response.data.message));
  }
};

export const deleteUser = userId => async dispatch => {
  try {
    dispatch(deleteUserRequest());
    const { data } = await axios.delete(`${server}/user/deleteUser/${userId}`, {
      headers: {
        'Content-type': 'application/json',
      },
      withCredentials: true,
    });

    dispatch(deleteUserSuccess(data.message));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(deleteUserFail(error.response.data.message));
  }
};

export const getDashboardStats = () => async dispatch => {
  try {
    dispatch(getAdminStatsRequest());
    const { data } = await axios.get(
      `${server}/other/admin/getDashboardStats`,
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch(getAdminStatsSuccess(data));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(getAdminStatsFail(error.response.data.message));
  }
};
