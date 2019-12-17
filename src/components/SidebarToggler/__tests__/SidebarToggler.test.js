import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SidebarToggler from '../SidebarToggler';

test('should call handleToggleSidebar when click event is fired', () => {
  const handleToggleSidebar = jest.fn();
  const { container } = render(
    <SidebarToggler handleToggleSidebar={handleToggleSidebar} toggleSidebar />,
  );
  const linkElement = container.firstChild;
  fireEvent.click(linkElement);
  expect(handleToggleSidebar).toHaveBeenCalledTimes(1);
});
