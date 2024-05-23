import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/user/action';
import InputRegister from '../components/InputRegister';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate('/');
  };

  return (
    <div>
      <article>
        <InputRegister registerUser={onRegister} />

        <p className="center-text top-margin">
          Kamu sudah punya akun?{' '}
          <Link to="/" className="text-decoration-none">
            Masuk
          </Link>
        </p>
      </article>
    </div>
  );
}

export default RegisterPage;
