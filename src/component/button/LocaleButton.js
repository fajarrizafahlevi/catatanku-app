import React from 'react';
import { FiGlobe } from 'react-icons/fi';
import LocaleContext from '../../context/LocaleContext';

function LocaleButton() {
  const { toggleLocale } = React.useContext(LocaleContext);

  return (
    <button className="locale-button" onClick={toggleLocale}>
      <FiGlobe />
    </button>
  );
}

export default LocaleButton;
