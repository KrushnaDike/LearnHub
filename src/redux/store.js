import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer.js';
import profileReducer from './reducers/profileReducer.js';
import courseReducer from './reducers/courseReducer.js';
import subscriptionReducer from './reducers/subscriptionReducer.js';
import adminReducer from './reducers/adminReducer.js';
import otherReducer from './reducers/otherReducer.js';

export const server = 'http://localhost:2000/api/v1';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    subscription: subscriptionReducer,
    admin: adminReducer,
    other: otherReducer,
  },
});

export default store;
