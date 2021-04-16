import { render, screen, cleanup } from '@testing-library/react';
import Navbar from '../Navbar';

afterEach(() => {
  cleanup();
});

test('should render navbar component', () => {
  render(<Navbar />);
  const navbarElement = screen.getByTestId('navbar');
  expect(navbarElement).toBeInTheDocument();
});
