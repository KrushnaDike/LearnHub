import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  message: null,
  error: null,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    getAdminStatsRequest: state => {
      state.loading = true;
    },
    getAdminStatsSuccess: (state, action) => {
      state.loading = false;
      state.stats = action.payload.stats;
      state.userCount = action.payload.userCount;
      state.subscribersCount = action.payload.subscribersCount;
      state.viewsCount = action.payload.viewsCount;
      state.userPercentage = action.payload.userPercentage;
      state.subscribersPercentage = action.payload.subscribersPercentage;
      state.viewsPercentage = action.payload.viewsPercentage;
      state.userProfit = action.payload.userProfit;
      state.subscribersProfit = action.payload.subscribersProfit;
      state.viewsProfit = action.payload.viewsProfit;
    },
    getAdminStatsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getAllUsersRequest: state => {
      state.loading = true;
    },
    getAllUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getAllUsersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateUserRoleRequest: state => {
      state.loading = true;
    },
    updateUserRoleSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateUserRoleFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteUserRequest: state => {
      state.loading = true;
    },
    deleteUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    createCourseRequest: state => {
      state.loading = true;
    },
    createCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteCourseRequest: state => {
      state.loading = true;
    },
    deleteCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    addLectureRequest: state => {
      state.loading = true;
    },
    addLectureSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteLectureRequest: state => {
      state.loading = true;
    },
    deleteLectureSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
  },
});

export const {
  getAdminStatsRequest,
  getAdminStatsSuccess,
  getAdminStatsFail,
  getAllUsersRequest,
  getAllUsersSuccess,
  getAllUsersFail,
  updateUserRoleRequest,
  updateUserRoleSuccess,
  updateUserRoleFail,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFail,
  createCourseRequest,
  createCourseSuccess,
  createCourseFail,
  deleteCourseRequest,
  deleteCourseSuccess,
  deleteCourseFail,
  addLectureRequest,
  addLectureSuccess,
  addLectureFail,
  deleteLectureRequest,
  deleteLectureSuccess,
  deleteLectureFail,
  clearError,
  clearMessage,
} = adminSlice.actions;
export default adminSlice.reducer;
