import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import cross from "../images/close-cross.svg";
import googleLogo from "../images/google.svg";
import UserService from "../api/UserService";


const AuthorisationPage = () => {
    const nav = useNavigate();
    const registration = () => {
        const name = document.querySelector("#registration-input-1").value;
        const surname = document.querySelector("#registration-input-2").value;
        const email = document.querySelector("#registration-input-3").value;
        const password = document.querySelector("#registration-input-4").value;
        const passwordConfirm = document.querySelector("#registration-input-5").value;
        if (password !== passwordConfirm) throw new Error();
        UserService.save({
            name: name,
            surname: surname,
            email: email,
            password: password
        });

        nav("/profile");
    }

    const loginForm = (
        <div>
            <div className="login-block-form">
                <input type="text" className="login-block-form-input"
                       placeholder="E-mail"/>
                <input type="password" className="login-block-form-input password"
                       placeholder="Пароль"/>
                <button className="login-block-form-enter">Войти</button>
            </div>
            <div className="login-block-footer">
                <p className="login-block-footer-text">Войти с помощью Google</p>
                <button className="google-enter">
                    <img src={googleLogo} alt="" className="google-enter-logo"/>
                </button>
            </div>
        </div>
    );

    const registrationForm = (
        <div className="login-block-registration-form">
            <input type="text" className="login-block-form-input" id="registration-input-1"
                   placeholder="Имя"/>
            <input type="text" className="login-block-form-input" id="registration-input-2"
                   placeholder="Фамилия"/>
            <input type="text" className="login-block-form-input" id="registration-input-3"
                   placeholder="E-mail"/>
            <input type="password" className="login-block-form-input" id="registration-input-4"
                   placeholder="Пароль"/>
            <input type="password" className="login-block-form-input" id="registration-input-5"
                   placeholder="Повторите пароль"/>
            <button className="login-block-form-enter"
            onClick={() => registration()}>Войти</button>
        </div>
    );

    let [formState, setFormState] = React.useState(loginForm);

    React.useEffect(() => {
        const button1 = document.querySelector("#nav-button-1");
        const button2 = document.querySelector("#nav-button-2");
        button1.addEventListener("click", () => {
            button1.classList.add("login-block-nav-button-active");
            button2.classList.remove("login-block-nav-button-active");
        });
        button2.addEventListener("click", () => {
            button1.classList.remove("login-block-nav-button-active");
            button2.classList.add("login-block-nav-button-active");
        });
    });

    return (
        <div className="authorisation-page">
            <div className="login-block">
                <div className="login-block-header">
                    <button className="login-block-nav-button login-block-nav-button-active" id="nav-button-1"
                    onClick={() => setFormState(loginForm)}>Войти</button>
                    <button className="login-block-nav-button" id="nav-button-2"
                    onClick={() => setFormState(registrationForm)}>Регистрация</button>
                    <NavLink to="/" className="login-block-close-nav-link">
                        <img src={cross} alt="" className="login-block-close-cross-img"/>
                    </NavLink>
                </div>
                {formState}
            </div>
            <h2 className="authorisation-page-head">
                Покоряйте новые высоты с <br/>Level Up
            </h2>
        </div>
    );
};

export default AuthorisationPage;