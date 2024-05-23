/* eslint-disable no-underscore-dangle */
import api from '../../utils/api';
import {
 describe, it, expect, vi, beforeEach, afterEach, 
} from 'vitest';
import { asyncPreloadProcess, setIsPreloadActionCreator } from './action';
import { setAuthUserActionCreator } from '../authUser/action';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const fakeUsersResponse = [
    {
        id: 'user-1',
        name: 'Forkus user 1',
        email: 'forkususer@gmail.com',
        avatar: 'forkusavatar.jpg',
    },
];

const fakeErrorResponse = () => {
    throw new Error('Seems like something went wrong?');
};

describe('AsyncPreloadProcess thunk', () => {
    beforeEach(() => {
        api._getUserProfile = api.getUserProfile;
    });

    afterEach(() => {
        api.getUserProfile = api._getUserProfile;
        delete api._getUserProfile;
    });

    it('dispatch setAuthUserActionCreator when getUserProfile success', async () => {
        // arrange
        // stub implementation
        api.getUserProfile = () => Promise.resolve(fakeUsersResponse);

        // mock dispatch
        const dispatch = vi.fn();

        // action
        await asyncPreloadProcess()(dispatch);

        // assert
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeUsersResponse));
        expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
    });

    it('dispatch setAuthUserActionCreator with argument null when getUserProfile API call failed', async () => {
        // arrange
        // stub implementation
        api.getUserProfile = () => Promise.reject(fakeErrorResponse);

        // mock dispatch
        const dispatch = vi.fn();

        // action
        await asyncPreloadProcess()(dispatch);
        // assert
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(null));  
        expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));  
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
    });
});