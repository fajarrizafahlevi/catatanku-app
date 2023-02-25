import React from 'react';
import PropTypes from 'prop-types';
import { FiLogOut } from 'react-icons/fi';

function LogoutButton({ logout }) {
  return (
    <button onClick={logout} className="logout-button">
      <FiLogOut />
    </button>
  );
}

LogoutButton.propTypes = {
  logout: PropTypes.func,
};

export default LogoutButton;
