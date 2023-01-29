import React from "react";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/api";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <main className="register-page">
      <h2>Silahkan Daftar Baru</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>
        Sudah punya akun? silahkan <Link to="/">Masuk</Link>
      </p>
    </main>
  );
}

export default RegisterPage;
