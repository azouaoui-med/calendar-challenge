import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from '../Sidebar';

test('should contain 7 menu items', () => {
  const { container } = render(<Sidebar />);
  const element = container.firstChild;
  expect(element.querySelectorAll('li').length).toBe(7);
});
