import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import ThemeContext from '../../context/ThemeContext';

function ThemeButton() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme-button">
      {theme === 'light' ? <FiMoon /> : <FiSun />}
    </button>
  );
}

export default ThemeButton;
