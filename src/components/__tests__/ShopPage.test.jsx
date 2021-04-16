import { render, screen, cleanup } from '@testing-library/react';
import ShopPage from '../ShopPage';

afterEach(() => {
  cleanup();
});

test('should render navbar component', () => {
  render(<ShopPage />);
  const navbarElement = screen.getByTestId('shoppage');
  expect(navbarElement).toBeInTheDocument();
});