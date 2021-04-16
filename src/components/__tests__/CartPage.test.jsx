import { render, screen, cleanup } from '@testing-library/react';
import CartPage from '../CartPage';

afterEach(() => {
  cleanup();
});

test('should render cartpage component', () => {
  render(<CartPage />);
  const cartElement = screen.getByTestId('cartpage');
  expect(cartElement).toBeInTheDocument();
});