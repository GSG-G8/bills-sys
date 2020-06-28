import React, { useState } from 'react';
import toggle from '../assets/up-arrow-svgrepo-com.svg';
import Tips from './Tips';

const ToggleContainer = () => {
  const [showTips, setShowTips] = useState(false);
  const toggleTips = () => setShowTips(!showTips);

  return (
    <div className="flex justify-between p-10">
      <h1 className="text-3xl">Tips</h1>
      {showTips && <Tips />}
      <button type="button" onClick={toggleTips}>
        <img
          className={`w-10 ${showTips ? 'transform rotate-180' : ''}`}
          src={toggle}
          alt="toggleContainer"
        />
      </button>
    </div>
  );
};

ToggleContainer.propTypes = {};

export default ToggleContainer;
