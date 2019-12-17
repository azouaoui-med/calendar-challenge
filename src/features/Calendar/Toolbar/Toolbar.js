import React from 'react';
import ViewSwitcher from '../ViewSwitcher/ViewSwitcher';
import Search from '../../../components/Search/Search';
import arrow from '../../../assets/svg/arrow.svg';

const Toolbar = params => {
  /**
   *  switch between views | "month", "week"
   */
  const handleSwitchView = view => {
    params.onView(view);
  };

  /**
   * navigate between ranges of dates | "next", "prev"
   */
  const handleNavigationClick = action => {
    params.onNavigate(action);
  };

  return (
    <div className="calendar-header">
      <ViewSwitcher switchView={handleSwitchView} view={params.view} />
      <div className="navigation">
        <a
          href="#!"
          className="arrow-left"
          onClick={() => handleNavigationClick('PREV')}
        >
          <img src={arrow} alt="arrow left" />
        </a>
        <span className="label">{params.label}</span>
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

export default Toolbar;
