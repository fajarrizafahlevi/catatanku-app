import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../component/form/RegisterInput';
import { register } from '../utils/network-data';
import LocaleContext from '../context/LocaleContext';

function RegisterPage() {
  const { locale } = React.useContext(LocaleContext);
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);

    if (!error) {
      alert(
        locale === 'id'
          ? 'Pendaftaran berhasil! Silahkan masuk~'
          : 'Registration Success! Please login~'
      );

      navigate('/');
    }
  }

  return (
    <section>
      <h2>
        {locale === 'id'
          ? 'Isi form untuk mendaftar akun'
          : 'Fill the form to register account'}
      </h2>
      <RegisterInput register={onRegisterHandler} />
      <p className="register-login-link">
        {locale === 'id' ? 'Sudah punya akun? ' : 'Already have an account? '}
        <Link to="/">{locale === 'id' ? 'Masuk disini' : 'Login here'}</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
