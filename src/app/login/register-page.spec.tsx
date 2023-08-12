import axios from 'axios';
import Login from './page';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import Cookies from 'js-cookie';
import { useRouter } from './__mocks__/next/router';

describe('Login Page', () => {
  beforeEach(() => {
    useRouter.mockReturnValue({
      push: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render Login page', () => {
    render(<Login />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('should render error messages', async () => {
    render(<Login />);
    const axiosMock = jest.spyOn(axios, 'post');

    fireEvent.click(screen.getByText('Entrar'));

    await waitFor(() => {
      screen.getByTestId('email-error');

      expect(axiosMock).not.toHaveBeenCalled;
    });

    expect(screen.getByTestId('email-error')).toHaveTextContent(
      'Insira seu e-mail'
    );
    expect(screen.getByTestId('password-error')).toHaveTextContent(
      'Insira sua senha'
    );

    expect;
  });

  it('should call submit function with fields properly filled', async () => {
    render(<Login />);

    // Mock the axios post request to prevent actual API calls during testing
    const axiosMock = jest.spyOn(axios, 'post');
    axiosMock.mockResolvedValueOnce({
      data: { token: 'test-token', company: { id: 1, name: 'Test Company' } },
    });

    // Fill in valid email and password
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Senha'), {
      target: { value: 'password123' },
    });

    // Simulate submitting the form
    fireEvent.click(screen.getByText('Entrar'));

    // Wait for asynchronous operations to complete
    await waitFor(() => {
      // Check if submit function was called
      expect(axiosMock).toHaveBeenCalledWith(
        `${process.env.NEXT_PUBLIC_API_URL}/company/login`,
        { email: 'test@example.com', password: 'password123' }
      );

      // Check if cookies and localStorage were set
      expect(Cookies.get('auth-token')).toEqual('test-token');
      expect(Cookies.get('company-id')).toEqual('1');
      expect(localStorage.getItem('company-name')).toEqual(
        JSON.stringify('Test Company')
      );
    });
  });
});
