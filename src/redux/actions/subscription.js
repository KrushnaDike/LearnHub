import { server } from '../store';
import axios from 'axios';
import {
  buySubscriptionFail,
  buySubscriptionRequest,
  buySubscriptionSuccess,
  cancelSubscriptionFail,
  cancelSubscriptionRequest,
  cancelSubscriptionSuccess,
} from '../reducers/subscriptionReducer';

export const buySubscription = () => async dispatch => {
  try {
    dispatch(buySubscriptionRequest());
    const { data } = await axios.get(`${server}/payment/buySubscription`, {
      withCredentials: true,
    });

    dispatch(buySubscriptionSuccess(data.subscriptionId));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(buySubscriptionFail(error.response.data.message));
  }
};

export const cancelSubscription = () => async dispatch => {
  try {
    dispatch(cancelSubscriptionRequest());
    const { data } = await axios.delete(
      `${server}/payment/cancelSubscription`,
      {
        withCredentials: true,
      }
    );

    dispatch(cancelSubscriptionSuccess(data.message));
  } catch (error) {
    console.log('🚀 ~ login ~ error:', error);
    dispatch(cancelSubscriptionFail(error.response.data.message));
  }
};
