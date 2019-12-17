import React from 'react';
import moment from 'moment';
import { render, fireEvent, cleanup } from '@testing-library/react';
import EventModal from '../EventModal';

let event;
const closeModal = jest.fn();
const handleChange = jest.fn();
const handleSave = jest.fn();

beforeEach(() => {
  event = {
    start: new Date(),
    end: new Date(),
    title: 'event title',
    className: 'event-primary-fill',
  };
  cleanup();
});

afterEach(cleanup);

test('input title should have event title in as a value', () => {
  const { getByTestId } = render(
    <EventModal
      show
      closeModal={closeModal}
      event={event}
      handleChange={handleChange}
      handleSave={handleSave}
    />,
  );
  const titleInput = getByTestId('titleInput');
  const startInput = getByTestId('startInput');
  const endInput = getByTestId('endInput');

  expect(titleInput.value).toBe(event.title);
  expect(startInput.value).toBe(moment(event.end).format('YYYY-MM-DD'));
  expect(endInput.value).toBe(moment(event.end).format('YYYY-MM-DD'));
});

test('should call handleSave on click save', () => {
  const { getByTestId } = render(
    <EventModal
      show
      closeModal={closeModal}
      event={event}
      handleChange={handleChange}
      handleSave={handleSave}
    />,
  );
  const titleInput = getByTestId('titleInput');

  expect(titleInput.value).toBe(event.title);
});

test('should call handleSave on click save', () => {
  const { getByText } = render(
    <EventModal
      show
      closeModal={closeModal}
      event={event}
      handleChange={handleChange}
      handleSave={handleSave}
    />,
  );
  const element = getByText('Save');
  fireEvent.click(element);
  expect(handleSave).toHaveBeenCalledTimes(1);
});

test('should call closeModal on click close', () => {
  const { getByTestId } = render(
    <EventModal
      show
      closeModal={closeModal}
      event={event}
      handleChange={handleChange}
      handleSave={handleSave}
    />,
  );
  const element = getByTestId('closeModal');
  fireEvent.click(element);
  expect(closeModal).toHaveBeenCalledTimes(1);
});
