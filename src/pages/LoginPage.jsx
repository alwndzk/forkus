// // import React from 'react';
// import { Link } from 'react-router-dom';
// import InputLogin from '../components/InputLogin';
// import { useDispatch } from 'react-redux';
// import { asyncSetAuthUser } from '../states/authUser/action';

// function LoginPage() {
//     const dispatch = useDispatch();

//     const onLogin = ({ email, password }) => {
//         dispatch(asyncSetAuthUser({ email, password}));
//     };

//     return (
//         <div>
//             <header className="center-text top-margin">
//                 <h1>Forkus</h1>
//             </header>
//             <article>
//                 <InputLogin loginUser={onLogin} />
//                 <p className="center-text top-margin">
//                     Belum punya akun?
//                     {' '}
//                     <Link to="/register" className="text-decoration-none">Daftar</Link>
//                 </p>
//             </article>
//         </div>
//     );
// }

// export default LoginPage;
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InputLogin from '../components/InputLogin';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <div>
      <header className="center-text top-margin">
        <h1>Forkus</h1>
      </header>
      <article>
        <InputLogin loginUser={onLogin} />
        <p className="center-text top-margin">
          Belum punya akun?{' '}
          <Link to="/register" className="text-decoration-none">
            Daftar
          </Link>
        </p>
      </article>
    </div>
  );
}

export default LoginPage;
