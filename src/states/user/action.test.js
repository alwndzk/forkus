/* eslint-disable no-undef */
/* eslint-disable no-self-assign */
/**
 * test scenario
 *
 * - asyncRegisterUser thunk
 *  - should handle register user when success
 *  - should handle register user when fail
 */

import {
 describe, it, expect, vi,
} from 'vitest';
import { asyncRegisterUser } from './action';
import api from '../../utils/api';

const fakeRegisterResponse = [
    {
        name: 'forkus',
        email: 'forkususer@gmail.com',
        password: 'forkususer12',
    },
];

const fakeErrorResponse = new Error('Seems like something went wrong');

describe('asyncRegisterUser thunk', () => {
    it('handle user when registration success', async () => {
        // arrange
        // mock register success
        api.registerUser = () => Promise.resolve();

        await asyncRegisterUser(fakeRegisterResponse)();
    });

    it('should handle user registration failure', async () => {
        // mock register fail
        api.registerUser = () => Promise.reject(fakeErrorResponse);
        window.alert = vi.fn();

        await asyncRegisterUser(fakeRegisterResponse)();
        
        // assert
        expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
      });
    });