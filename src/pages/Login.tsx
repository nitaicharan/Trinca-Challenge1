import React from 'react';
import "../styles/pages/login.scss";

export const Login = () => {
    return (
        <section className="login">
            <form className="login-form">
                <div className="login__group">
                    <label className="login__group--label" htmlFor="login">Login</label>
                    <input className="login__group--input" name="login" id="login" type="text" placeholder="e-mail" />
                </div>

                <div className="login__group">
                    <label className="login__group--label" htmlFor="password">Password</label>
                    <input className="login__group--input" name="password" id="password" type="password" placeholder="password" />
                </div>

                <div className="login-button">
                    <a className="btn btn--black btn-login">Login</a>
                </div>
            </form>
        </section>
    );
}