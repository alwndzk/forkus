/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/**
 * scenario test
 *
 * - InputRegister component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import {
 describe, it, expect, vi, afterEach,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import InputRegister from './InputRegister';

expect.extend(matchers);

describe('InputRegister component', () => {
    afterEach(() => {
        cleanup();
    });

    it('handle Nama typing correctly', async () => {
        // arrange
        render(<InputRegister registerUser={() => {}} />);
        const emailInput = screen.getByPlaceholderText('Email');

        // action
        await userEvent.type(emailInput, 'Alwan Dzaki');

        // assert
        expect(emailInput).toHaveValue('Alwan Dzaki');
    });

    it('handle Email typing correctly', async () => {
        // arrange
        render(<InputRegister registerUser={() => {}} />);
        const emailInput = screen.getByPlaceholderText('Nama');

        // action
        await userEvent.type(emailInput, 'forkus12@gmail.com');

        // assert
        expect(emailInput).toHaveValue('forkus12@gmail.com');
    });
    it('handle Password typing correctly', async () => {
        // arrange
        render(<InputRegister registerUser={() => {}} />);
        const passwordInput = await screen.getByPlaceholderText('Password');

        // action
        await userEvent.type(passwordInput, 'forkusnotoday');

        // assert
        expect(passwordInput).toHaveValue('forkusnotoday');
    });

    it('call register function when login button is clicked', async () => {
        // Arrange
    
        const mockRegister = vi.fn();
        render(<InputRegister registerUser={mockRegister} />);
        const nameInput = await screen.getByPlaceholderText('Nama');
        await userEvent.type(nameInput, 'Alwan Dzaki');
        const emailInput = await screen.getByPlaceholderText('Email');
        await userEvent.type(emailInput, 'forkus12@gmail.com');
        const passwordInput = await screen.getByPlaceholderText('Password');
        await userEvent.type(passwordInput, 'forkusnotoday');
        const registerButton = await screen.getByRole('button', { name: 'Daftar' });
    
        // Action
        await userEvent.click(registerButton);
    
        // Assert
        expect(mockRegister).toBeCalledWith({
          name: 'Alwan Dzaki',
          email: 'forkus12@gmail.com',
          password: 'forkusnotoday',
        });
    });
});