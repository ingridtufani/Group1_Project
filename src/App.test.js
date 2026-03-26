import { render, screen } from '@testing-library/react';
import App from './App';

test('renders group number and team members', () => {
  render(<App />);

  expect(screen.getByText(/Group 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Leiziane Trevisan Dardin/i)).toBeInTheDocument();
  expect(screen.getByText(/Ingrid Tufani Savioli/i)).toBeInTheDocument();
  expect(screen.getByText(/Sabrina Johanna Zimmer/i)).toBeInTheDocument();
  expect(screen.getByText(/Patricia Diniz Magalhaes 448624/i)).toBeInTheDocument();
});