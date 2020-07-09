import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { ReactComponent as QuestionIcon } from '../assets/question-mark.svg';
import { ReactComponent as CloseIcon } from '../assets/close.svg';

const Popup = ({ text, closePopup }) => (
  <div className="fixed w-full top-0 bottom-0 left-0 right-0 m-auto grid items-center justify-center">
    <div className="w-4/5 md:w-3/5 m-auto p-4 md:p-8 bg-white border-primary-dark border-2">
      <button type="button" className="w-6 h-6 p-1 mb-4" onClick={closePopup}>
        <CloseIcon className="w-full h-full" />
      </button>
      <p>{text}</p>
    </div>
  </div>
);
const TogglePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="relative w-12 h-12 p-1">
      <button
        type="button"
        onClick={() => setShowPopup((s) => !s)}
        title="Need some explanation?"
      >
        <QuestionIcon className="w-full h-full" />
      </button>
      {showPopup ? (
        <Popup
          text={t('pages.current.chartExplanation')}
          closePopup={() => setShowPopup((s) => !s)}
        />
      ) : null}
    </div>
  );
};

Popup.propTypes = {
  text: propTypes.string.isRequired,
  closePopup: propTypes.func.isRequired,
};

export default TogglePopup;
