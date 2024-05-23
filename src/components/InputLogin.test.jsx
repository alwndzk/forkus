/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/**
 * scenario test
 *
 * - InputLogin component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import {
 describe, it, expect, afterEach, vi, 
} from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import InputLogin from './InputLogin';

expect.extend(matchers);

describe('InputLogin component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should handle username typing correctly', async () => {
        // arrange
        render(<InputLogin loginUser={() => {}} />);
        const emailInput = screen.getByPlaceholderText('Email');

        // action
        await userEvent.type(emailInput, 'forkus12@gmail.com');

        // assert
        expect(emailInput).toHaveValue('forkus12@gmail.com');
    });

    it('should handle password typing correctly', async () => {
    // arrange
    render(<InputLogin loginUser={() => {}} />);
    const passwordInput = screen.getByPlaceholderText('Password');

    // action
    await userEvent.type(passwordInput, 'forkusoke');

    // assert
    expect(passwordInput).toHaveValue('forkusoke');
    });

    it('should call login function when login button is clicked', async () => {
    // arrange
    const mockLogin = vi.fn();
    render(<InputLogin loginUser={mockLogin} />);
    const emailInput = screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'forkus12@gmail.com');
    const passwordInput = screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'forkusoke');
    const loginButton = screen.getByRole('button', { name: 'Masuk' });

    // action
    await userEvent.click(loginButton);

    // assert
    expect(mockLogin).toBeCalledWith({
        email: 'forkus12@gmail.com',
        password: 'forkusoke',
      });
    });
});