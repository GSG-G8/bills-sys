import React, { useState } from 'react';
import propTypes from 'prop-types';
import toggleImg from '../assets/up-arrow-svgrepo-com.svg';

const ToggleContainer = ({ children, title }) => {
  const [isToggle, setIsToggle] = useState(false);
  const toggle = () => setIsToggle(!isToggle);

  return (
    <div>
      <div className="flex justify-between py-5 border-b my-3">
        <button
          type="button"
          onClick={toggle}
          className="flex focus:outline-none mx-3 justify-between w-full items-center"
        >
          <span className="text-xl">{title}</span>
          <img
            className={`w-5 ${isToggle ? '' : 'transform rotate-180'}`}
            src={toggleImg}
            alt="toggleContainer"
          />
        </button>
      </div>
      {isToggle && children}
    </div>
  );
};

ToggleContainer.propTypes = {
  children: propTypes.element.isRequired,
  title: propTypes.string.isRequired,
};

export default ToggleContainer;
