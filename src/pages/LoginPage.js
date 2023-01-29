import React from "react";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/api";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <main className="login-page">
      <h2>Silahkan Masuk</h2>
      <LoginInput login={onLogin} />
      <p>
        Belum memiliki akun? <Link to="/register">Klik Disini</Link>
      </p>
    </main>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage;
