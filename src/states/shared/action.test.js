/* eslint-disable no-unused-vars */
/* eslint-disable no-self-assign */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/**
 * test scenario
 *
 * - asyncPopulateUsersAndTalks thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */
import {
 describe, beforeEach, afterEach, it, vi, expect,
} from 'vitest';
import { asyncPopulatedUsersAndThreads } from './action';
import { receiveThreadsActionCreator } from '../thread/action';
import { receiveUsersActionCreator } from '../user/action';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const fakeThreadsResponse = [
    {
        id: 'thread-1',
        title: 'judul thread ke-1',
        body: 'body thread ke-1',
        createdAt: '2022-09-22T10:06:55.888Z',
        ownerId: 'user-1',
        totalComments: 0,
    },
];

const fakeUsersResponse = [
    {
        id: 'user-1',
        name: 'test pengguna ke-1',
        email: 'forkus1@gmail.com',
        avatar: 'avatarforkus1.jpg',
    },
];

const fakeErrorResponse = new Error('Seems like something went wrong?');

describe('asyncPopulatedUsersAndThreads', () => {
    beforeEach(() => {
        api.getAllUsers = api.getAllUsers;
        api.getAllThreads = api.getAllThreads;
    });

    afterEach(() => {
        api.getAllUsers = api.getAllUsers;
        api.getAllThreads = api.getAllThreads;

        // delete backup data
        delete api.getAllUsers;
        delete api.getAllThreads;
    });

    it('should dispatch action correctly when data fetching success', async () => {
        // arrange
        // implementaion stub
        api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
        api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);
        // dispatch mock
        const dispatch = vi.fn();
        // alert mock
        window.alert = vi.fn();

        // action
        await asyncPopulatedUsersAndThreads()(dispatch);

        // assert
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse));
        expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse));
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
      });
});