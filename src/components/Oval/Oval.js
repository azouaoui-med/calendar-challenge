import React from 'react';
import PropTypes from 'prop-types';
import plus from '../../assets/svg/plus.svg';

const propTypes = {
  handleClick: PropTypes.func.isRequired,
};

const Oval = ({ handleClick }) => {
  return (
    <a href="#!" className="oval" onClick={handleClick}>
      <img src={plus} alt="oval" />
    </a>
  );
};

Oval.propTypes = propTypes;

export default Oval;
