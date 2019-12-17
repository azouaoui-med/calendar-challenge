import React from 'react';
import { render } from '@testing-library/react';
import Search from '../Search';

test('should renders search input', () => {
  const { getByTestId } = render(<Search />);
  const element = getByTestId('search-input');
  expect(element).toBeDefined();
});
