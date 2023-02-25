import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChangeHandler] = useInput('');
  const [password, onPasswordChangeHandler] = useInput('');
  const locale = localStorage.getItem('locale');

  function onSubmitHandler(event) {
    event.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    login(user);
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChangeHandler}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChangeHandler}
      />
      <button className="submit-button">
        {locale === 'id' ? 'Masuk' : 'Login'}
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
