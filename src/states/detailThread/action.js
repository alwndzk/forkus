import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  CREATE_COMMENT: 'CREATE_COMMENT',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}
function createCommentActionCreator(comment) {
  return {
    type: ActionType.CREATE_COMMENT,
    payload: {
      comment,
    },
  };
}

function asyncCreateComment({ content }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { threadDetail } = getState();

    try {
      const comment = await api.createNewComment({
        content,
        threadId: threadDetail.id,
      });
      dispatch(createCommentActionCreator(comment));
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

// function asyncReceiveThreadDetail(threadId) {
//     return async (dispatch) => {
//         try {
//             const threadDetail = await api.getThreadDetails(threadId);
//             // alert(threadDetail);
//             dispatch(receiveThreadDetailActionCreator(threadDetail));
//         } catch (error) {
//             alert(error.message);
//         }
//     }
// }

export {
  ActionType,
  asyncReceiveThreadDetail,
  clearThreadDetailActionCreator,
  asyncCreateComment,
};
