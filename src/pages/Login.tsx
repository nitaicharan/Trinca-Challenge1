import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "../styles/pages/login.scss";

interface IProps {
}

export const Login = (props: IProps) => {
    const [state, setState] = useState({ email: '', password: '' })
    const { logIn } = useContext(AuthContext);

    const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await logIn({ ...state });
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setState({ ...state, [event.target.name]: event.target.value })
    }

    return (
        <section className="login">
            <form className="login-form" onSubmit={onSubmitHandler}>
                <div className="login__group">
                    <label className="login__group--label" htmlFor="login">Login</label>
                    <input onChange={onChangeHandler} className="login__group--input" name="email" id="login" type="text" placeholder="e-mail" />
                </div>

                <div className="login__group">
                    <label className="login__group--label" htmlFor="password">Password</label>
                    <input onChange={onChangeHandler} className="login__group--input" name="password" id="password" type="password" placeholder="password" />
                </div>

                <div className="login-button">
                    <button type="submit" className="btn btn--black btn-login">Login</button>
                </div>
            </form>
        </section>
    );
}