import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../thread/action';
import { receiveUsersActionCreator } from '../user/action';

function asyncPopulatedUsersAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const user = await api.getAllUsers();
      const thread = await api.getAllThreads();

      dispatch(receiveUsersActionCreator(user));
      dispatch(receiveThreadsActionCreator(thread));
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
// eslint-disable-next-line
export { asyncPopulatedUsersAndThreads };
