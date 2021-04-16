import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import ShopPage from '../ShopPage';

afterEach(() => {
  cleanup();
});

test('should render navbar component', () => {
  render(<ShopPage />);
  const navbarElement = screen.getByTestId('shoppage');
  expect(navbarElement).toBeInTheDocument();
});