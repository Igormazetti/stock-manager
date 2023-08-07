import Login from './page';

import { screen, render } from '@testing-library/react';

describe('Login Page', () => {
  it('should render Login page', () => {
    render(<Login />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
