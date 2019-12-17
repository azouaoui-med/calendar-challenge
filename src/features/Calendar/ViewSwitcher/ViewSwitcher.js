import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  switchView: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
};

const ViewSwitcher = ({ switchView, view }) => {
  return (
    <div className="view-switcher">
      <a
        href="#!"
        className={view === 'week' ? 'active' : null}
        onClick={() => switchView('week')}
      >
        Week
      </a>
      <a
        href="#!"
        className={view === 'month' ? 'active' : null}
        onClick={() => switchView('month')}
      >
        Month
      </a>
    </div>
  );
};

ViewSwitcher.propTypes = propTypes;

export default ViewSwitcher;
