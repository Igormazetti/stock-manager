import Register from './page';

import { screen, render } from '@testing-library/react';

describe('Register Page', () => {
  it('should render Register page', () => {
    render(<Register />);
    expect(screen.getByText('Registre sua conta')).toBeInTheDocument();
  });
});
