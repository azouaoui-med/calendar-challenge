import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  event: PropTypes.objectOf(PropTypes.any).isRequired,
};

const Event = ({ event }) => {
  return <div className={`event ${event.className}`}>{event.title}</div>;
};

Event.propTypes = propTypes;

export default Event;
