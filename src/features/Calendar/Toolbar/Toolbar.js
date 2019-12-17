import React from 'react';
import PropTypes from 'prop-types';
import ViewSwitcher from '../ViewSwitcher/ViewSwitcher';
import Search from '../../../components/Search/Search';
import arrow from '../../../assets/svg/arrow.svg';

const propTypes = {
  onView: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const Toolbar = ({ onView, onNavigate, view, label }) => {
  /**
   *  switch between views | "month", "week"
   */
  const handleSwitchView = viewItem => {
    onView(viewItem);
  };

  /**
   * navigate between ranges of dates | "next", "prev"
   */
  const handleNavigationClick = action => {
    onNavigate(action);
  };

  return (
    <div className="calendar-header">
      <ViewSwitcher switchView={handleSwitchView} view={view} />
      <div className="navigation">
        <a
          href="#!"
          className="arrow-left"
          onClick={() => handleNavigationClick('PREV')}
        >
          <img src={arrow} alt="arrow left" />
        </a>
        <span className="label">{label}</span>
        <a
          href="#!"
          className="arrow-right"
          onClick={() => handleNavigationClick('NEXT')}
        >
          <img src={arrow} alt="arrow right" />
        </a>
      </div>
      <Search />
    </div>
  );
};

Toolbar.propTypes = propTypes;

export default Toolbar;
