import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search bands title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Selecione sua banda/i);
  expect(linkElement).toBeInTheDocument();
});
