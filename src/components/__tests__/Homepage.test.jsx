import { render, screen, cleanup } from '@testing-library/react';
import Homepage from '../Homepage';

afterEach(() => {
  cleanup();
});

test('should render homepage component', () => {
  render(<Homepage />);
  const homepageElement = screen.getByTestId('homepage');
  expect(homepageElement).toBeInTheDocument();
});
