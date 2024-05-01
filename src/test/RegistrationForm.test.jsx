/* eslint-disable no-undef */

import { render, fireEvent } from '@testing-library/react';
import RegistrationForm from './RegistrationForm';

describe('Registration Form', () => {
    test('calls onRegister with email when submitted', () => {
        const onRegisterMock = jest.fn();
        const { getByPlaceholderText, getByText } = render(<RegistrationForm onRegister={onRegisterMock} />);

        const emailInput = getByPlaceholderText('Enter your email');
        const registerButton = getByText('Register');

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.click(registerButton);

        expect(onRegisterMock).toHaveBeenCalledWith('test@example.com');
    });
});
