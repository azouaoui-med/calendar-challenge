import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Oval from '../Oval';

test('should call handleClick when click event is fired', () => {
  const handleClick = jest.fn();
  const { container } = render(<Oval handleClick={handleClick} />);
  const linkElement = container.firstChild;
  fireEvent.click(linkElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
