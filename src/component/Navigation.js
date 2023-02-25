import React from 'react';
import { Link } from 'react-router-dom';
import { FiFilePlus, FiFolder } from 'react-icons/fi';
import PropTypes from 'prop-types';
import LocaleButton from './button/LocaleButton';
import ThemeButton from './button/ThemeButton';
import LogoutButton from './button/LogoutButton';
import LocaleContext from '../context/LocaleContext';

function Navigation({ user, logout }) {
  const { locale } = React.useContext(LocaleContext);

  if (user === null) {
    return (
      <nav className="navigation">
        <h1>
          <Link to="/">{locale === 'id' ? 'Catatanku' : 'MyNotes'}</Link>
        </h1>
        <ul>
          <ThemeButton />
          <LocaleButton />
        </ul>
      </nav>
    );
  }

  return (
    <nav className="navigation">
      <h1>
        <Link to="/">{locale === 'id' ? 'Catatanku' : 'MyNotes'}</Link>
      </h1>
      <ul>
        <li>
          <Link to="/notes/new">
            <FiFilePlus />
          </Link>
        </li>
        <li>
          <Link to="/archives">
            <FiFolder />
          </Link>
        </li>
        <ThemeButton />
        <LocaleButton />
        <LogoutButton logout={logout} />
        <li>{user.name}</li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

export default Navigation;
