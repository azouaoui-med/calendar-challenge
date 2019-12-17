import React from 'react';
import { render } from '@testing-library/react';
import Event from '../Event';

test('should have the same text as the event title passed in porps', () => {
  const event = {
    title: 'event title',
  };
  const { container } = render(<Event event={event} />);
  const linkElement = container.firstChild;
  expect(linkElement).toHaveTextContent(event.title);
});
