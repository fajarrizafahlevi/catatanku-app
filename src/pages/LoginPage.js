import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../component/form/LoginInput';
import { login } from '../utils/network-data';
import LocaleContext from '../context/LocaleContext';

function LoginPage({ loginSuccess }) {
  const { locale } = React.useContext(LocaleContext);

  async function onLoginHandler({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section>
      <h2>
        {locale === 'id'
          ? 'Masuk untuk menggunakan aplikasi'
          : 'Login to use the app'}
      </h2>
      <LoginInput login={onLoginHandler} />
      <p className="register-login-link">
        {locale === 'id' ? 'Belum punya akun? ' : "Don't have an account? "}
        <Link to="/register">
          {locale === 'id' ? 'Daftar di sini' : 'Register here'}
        </Link>
      </p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
