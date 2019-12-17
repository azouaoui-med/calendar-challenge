/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Calendar from '../features/Calendar/Calendar';
import SidebarToggler from '../components/SidebarToggler/SidebarToggler';

const Layout = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);

  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <div className={`wrapper ${toggleSidebar ? 'open' : ''}`}>
      <Sidebar />
      <main>
        <SidebarToggler
          toggleSidebar={toggleSidebar}
          handleToggleSidebar={handleToggleSidebar}
        />
        <Calendar />
        <div
          className="overlay"
          aria-label="nav button"
          onClick={handleToggleSidebar}
          role="button"
          tabIndex="0"
        />
      </main>
    </div>
  );
};

export default Layout;
