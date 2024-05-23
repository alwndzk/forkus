/**
* scenario test
*
* - isPreloadReducer function
*  - should return the initial state when given by unknown action
*  - should return the authUser when given by SET_IS_PRELOAD action
*/

import { describe, it, expect } from 'vitest';
import isPreloadReducer from './reducer';

describe('isPreloadReducer function', () => {
    it('return the initial state when given by unknown action', () => {
        // arrange
        const initialState = true;
        const action = { type: 'UNKNOWN' };

        // action
        const nextState = isPreloadReducer(initialState, action);

        // assert
        expect(nextState).toEqual(initialState);
    });

    it('return the isPreload when given by SET_IS_PRELOAD action', () => {
        // arrange
        const initialState = [];
        const action = {
            type: 'SET_IS_PRELOAD',
            payload: {
                isPreload: false,
            },
        };

        // action
        const nextState = isPreloadReducer(initialState, action);

        // assert
        expect(nextState).toEqual(action.payload.isPreload);
    });
});