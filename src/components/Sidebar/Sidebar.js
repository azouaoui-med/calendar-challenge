import React from 'react';
import logo from '../../assets/img/logo.png';
import userpic from '../../assets/img/userpic.jpg';
import overview from '../../assets/svg/1.svg';
import messages from '../../assets/svg/2.svg';
import workout from '../../assets/svg/3.svg';
import calendar from '../../assets/svg/4.svg';
import goals from '../../assets/svg/5.svg';
import achivements from '../../assets/svg/6.svg';
import measurements from '../../assets/svg/7.svg';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="profile">
        <div className="picture">
          <img src={userpic} alt="profile" />
        </div>
        <div className="username">Ilyes Boudjelthia</div>
      </div>
      <div className="menu">
        <nav>
          <ul>
            <li>
              <a href="!#">
                <img src={overview} alt="menu icon" />
                <span>overview</span>
              </a>
            </li>
            <li>
              <a href="!#">
                <img src={messages} alt="menu icon" />
                <span>messages</span>
              </a>
            </li>
            <li>
              <a href="!#">
                <img src={workout} alt="menu icon" />
                <span>workout</span>
              </a>
            </li>
            <li>
              <a href="!#" className="active">
                <img src={calendar} alt="menu icon" />
                <span>calendar</span>
              </a>
            </li>
            <li>
              <a href="!#">
                <img src={goals} alt="menu icon" />
                <span>goals</span>
              </a>
            </li>
            <li>
              <a href="!#">
                <img src={achivements} alt="menu icon" />
                <span>achivements</span>
              </a>
            </li>
            <li>
              <a href="!#">
                <img src={measurements} alt="menu icon" />
                <span>measurements</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="copy">
        <span>go go nassim</span>
      </div>
    </aside>
  );
};

export default Sidebar;
