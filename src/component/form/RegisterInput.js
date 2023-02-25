import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';
import LocaleContext from '../../context/LocaleContext';

function RegisterInput({ register }) {
  const [name, onNameChangeHandler] = useInput('');
  const [email, onEmailChangeHandler] = useInput('');
  const [password, onPasswordChangeHandler] = useInput('');
  const [confirmPassword, onConfirmPasswordChangeHandler] = useInput('');
  const { locale } = React.useContext(LocaleContext);

  function onSubmitHandler(event) {
    event.preventDefault();

    if (confirmPassword === password) {
      const user = {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      };

      register(user);
    } else {
      alert(locale === 'id' ? 'Password tidak sama' : 'Password is not same');
    }
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder={locale === 'id' ? 'Nama' : 'Name'}
        value={name}
        onChange={onNameChangeHandler}
      />
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
      <input
        type="password"
        placeholder={
          locale === 'id' ? 'Konfirmasi password' : 'Confrim password'
        }
        value={confirmPassword}
        onChange={onConfirmPasswordChangeHandler}
      />
      <button className="submit-button">
        {locale === 'id' ? 'Daftar' : 'Register'}
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
