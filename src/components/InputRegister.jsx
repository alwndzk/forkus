/* eslint-disable jsx-a11y/label-has-associated-control */
// import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function InputRegister({ registerUser }) {
    const [name, onNameChange] = useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');

    return (
        <div className="card mx-auto mt-5" style={{ maxWidth: '450px' }}>
            <div className="card-body">
                <h5 className="card-title center-text">REGISTER</h5>
                <form>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Nama</label>
                        <input type="text" className="form-control" id="inputName" value={name} onChange={onNameChange} placeholder="Nama" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail" value={email} onChange={onEmailChange} placeholder="Email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword" value={password} onChange={onPasswordChange} placeholder="Password" />
                        <div className="form-text" style={{ fontSize: '0.8rem' }}>
                            Kamu harus menggunakan kata dan angka untuk memperkuat password
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary btn-md btn-block" onClick={() => registerUser({ name, email, password })}>Daftar</button>
                </form>
            </div>
        </div>
    );
}
InputRegister.propTypes = {
    registerUser: PropTypes.func.isRequired,
};

export default InputRegister;