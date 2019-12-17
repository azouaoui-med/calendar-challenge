import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Ilyes Boudjelthia', () => {
  const { getByText } = render(<App />);
  const element = getByText(/Ilyes Boudjelthia/i);
  expect(element).toBeInTheDocument();
});
