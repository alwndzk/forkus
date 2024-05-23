/**
* scenario test
*
* - authUserReducer function
*  - should return the initial state when given by unknown action
*  - should return the authUser when given by RECEIVE_AUTH_USER action
*/
import { describe, it, expect } from 'vitest';
import authUserReducer from './reducer';

describe('authUserReducer function', () => {
    it('return initial state when given by unknow action', () => {
        // arrange
        const initialState = null;
        const action = { type: 'UNKNOWN' };

        // action
        const nextState = authUserReducer(initialState, action);

        // assert
        expect(nextState).toEqual(initialState);
    });

    it('return the authUser when given by RECEIVE_AUTH_USER action', () => {
        // arrange
        const initialState = null;
        const action = {
            type: 'SET_AUTH_USER',
            payload: {
                authUser: [{
                    id: 'user-1',
                    name: 'Forkus User 1',
                    email: 'forkususer1@gmail.com',
                    avatar: 'avatarforkus1.jpg',
                }],
            },
        };

        // action
        const nextState = authUserReducer(initialState, action);

        // assert
        expect(nextState).toEqual(action.payload.authUser);
    });

    it('return null when given by UNSET_AUTH_USER action', () => {
        // arrange
        const initialState = null;
        const action = {
            type: 'UNSET_AUTH_USER',
            payload: {
                authUser: null,
            },
        };

        // action
        const nextState = authUserReducer(initialState, action);

        // assert
        expect(nextState).toEqual(action.payload.authUser);
    });
});
