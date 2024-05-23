/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/**
* test scenario for threadsReducer
*
*  - threadsReducers function
*  - should return the initial state when given by unknown action
*  - should return the talks when given by RECEIVE_THREADS action
*  - should return the talks with the new talk when given by ADD_THREAD action
*
*/

import { describe, it, expect } from 'vitest';
import threadsReducer from './reducer';

describe('threadsReducer function', () => {
    it('return initial state when given by unknown action', () => {
    //arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    
    //action
    const nextState = threadsReducer(initialState, action);

    //assert
    expect(nextState).toEqual(initialState);
    });

    it('return thread when given by RECEIVE_THREADS action', () => {
    //arrange
    const initialState = [];
    const action = {
        type: 'RECEIVE_THREADS',
        payload: {
            threads: [
                {
                    id: 'thread-1',
                    title: 'judul thread ke-1',
                    body: 'body thread ke-1',
                    createdAt: '2022-09-22T10:06:55.888Z',
                    ownerId: 'user-1',
                    totalComments: 0,
                }, {
                    id: 'thread-2',
                    title: 'judul thread ke-2',
                    body: 'body thread ke-2',
                    createdAt: '2022-09-22T10:06:55.889Z',
                    ownerId: 'user-2',
                    totalComments: 2,
                }, {
                    id: 'thread-3',
                    title: 'judul thread ke-3',
                    body: 'body thread ke-3',
                    createdAt: '2022-09-22T10:06:55.890Z',
                    ownerId: 'user-3',
                    totalComments: 4,
                },
            ],
        },
    };

    //action
    const nextState = threadsReducer(initialState, action);

    //assert
    expect(nextState).toEqual(action.payload.threads);
    });

    it('return threads with the new thread when given by ADD_THREAD action', () => {
    //arrange
    const initialState = [
        {
            id: 'thread-1',
            title: 'judul thread ke-1',
            body: 'body thread ke-1',
            createdAt: '2022-09-22T10:06:55.888Z',
            ownerId: 'user-1',
            totalComments: 0, 
        },
    ];

    const action = {
        type: 'ADD_THREAD',
        payload: {
            thread: {
                id: 'thread-2',
                title: 'judul thread ke-2',
                body: 'body thread ke-2',
                createdAt: '2022-09-22T10:06:55.889Z',
                ownerId: 'user-2',
                totalComments: 2,               
            },
        },
    };

    //action
    const nextState = threadsReducer(initialState, action);

    //assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
    });
});