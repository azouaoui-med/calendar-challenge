/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  toggleSidebar: PropTypes.bool.isRequired,
  handleToggleSidebar: PropTypes.func.isRequired,
};

const SidebarToggler = ({ toggleSidebar, handleToggleSidebar }) => {
  return (
    <div
      aria-label="nav button"
      className={`nav-icon ${toggleSidebar ? 'open' : ''}`}
      onClick={handleToggleSidebar}
      role="button"
      tabIndex="0"
    >
      <span />
      <span />
      <span />
    </div>
  );
};

SidebarToggler.propTypes = propTypes;

export default SidebarToggler;
