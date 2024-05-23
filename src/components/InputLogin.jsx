/* eslint-disable jsx-a11y/label-has-associated-control */
// import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function InputLogin({ loginUser }) {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');

    return (
        <div className="card mx-auto mt-5" style={{ maxWidth: '450px' }}>
            <div className="card-body">
                <h5 className="card-title center-text">LOGIN</h5>
                <form>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail" value={email} onChange={onEmailChange} placeholder="Email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword" value={password} onChange={onPasswordChange} placeholder="Password" />
                    </div>
                    <button type="button" className="btn btn-primary btn-md btn-block" onClick={() => loginUser({ email, password })}>Masuk</button>
                </form>
            </div>
        </div>
    );
}

InputLogin.propTypes = {
    loginUser: PropTypes.func.isRequired,
};

export default InputLogin;