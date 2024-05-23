/**
* scenario test
*
* - usersReducer function
*  - should return the initial state when given by unknown action
*  - should return the users when given by RECEIVE_USERS action
*/

import { describe, it, expect } from 'vitest';
import usersReducer from './reducer';

describe('userReducer function', () => {
    it('return the initial state when given by unknown action', () => {
        // arrange
        const initialState = [];
        const action = {
            type: 'UNKNOWN',
        };

        // action
        const nextState = usersReducer(initialState, action);

        // assert
        expect(nextState).toEqual(initialState);
    });

    it('return the users when given by RECEIVE_USERS action', () => {
        // arrange
        const initialState = [];
        const action = {
            type: 'RECEIVE_USERS',
            payload: {
                users: [{
                    id: 'user1',
                    email: 'forkususer1@gmail.com',
                    avatar: 'forkusavatar.jpg',
                }],
            },
        };

        // action
        const nextState = usersReducer(initialState, action);

        // assert
        expect(nextState).toEqual(action.payload.users);
    });
});