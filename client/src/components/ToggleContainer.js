import React, { useState } from 'react';
import propTypes from 'prop-types';
import toggleImg from '../assets/up-arrow-svgrepo-com.svg';

const ToggleContainer = ({ children, title }) => {
  const [isToggle, setIsToggle] = useState(false);
  const toggle = () => setIsToggle(!isToggle);

  return (
    <div>
      <button
        type="button"
        onClick={toggle}
        className="flex justify-between py-5 border-b hover:border-primary-dark my-3 focus:outline-none w-full items-center"
      >
        <span className="text-xl">{title}</span>
        <img
          className={`w-5 ${isToggle ? '' : 'transform rotate-180'}`}
          src={toggleImg}
          alt="toggleContainer"
        />
      </button>
      {isToggle && children}
    </div>
  );
};

ToggleContainer.propTypes = {
  children: propTypes.element.isRequired,
  title: propTypes.string.isRequired,
};

export default ToggleContainer;
