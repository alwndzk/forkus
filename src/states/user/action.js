// import api from '../../utils/api';

// const ActionType = {
//     RECEIVE_USERS: 'RECEIVE_USERS',
// };

// function receiveUsersActionCreator(users) {
//     return {
//         type: ActionType.RECEIVE_USERS,
//         payload: {
//             users,
//         },
//     };
// }

// function asyncRegisterUser({ name, email, password }) {
//     return async () => {
//         try {
//             await api.registerUser({ name, email, password });
//         } catch (error) {
//             alert(error.message);
//         }
//     };
// }

// export {
//     ActionType,
//     receiveUsersActionCreator,
//     asyncRegisterUser,
// }

import api from '../../utils/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async () => {
    try {
      await api.registerUser({ name, email, password });
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncRegisterUser,
};
