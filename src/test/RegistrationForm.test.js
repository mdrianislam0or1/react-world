/* eslint-disable no-undef */
import { render, fireEvent } from '@testing-library/react';
import RegistrationForm from '../pages/RegistrationForm';

describe('RegistrationForm component', () => {
    it('should render input field and submit button', () => {
        const { getByLabelText, getByText } = render(<RegistrationForm />);
        
        const emailInput = getByLabelText('Email');
        const registerButton = getByText('Register');

        expect(emailInput).toBeInTheDocument();
        expect(registerButton).toBeInTheDocument();
    });

    it('should update email state on input change', () => {
        const { getByLabelText } = render(<RegistrationForm />);
        const emailInput = getByLabelText('Email');

        fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } });

        expect(emailInput.value).toBe('test@gmail.com');
    });

    it('should call handleSubmit function when form is submitted', () => {
        const { getByLabelText, getByText } = render(<RegistrationForm />);
        const emailInput = getByLabelText('Email');
        const registerButton = getByText('Register');

        fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } });
        fireEvent.click(registerButton);
    });
});
