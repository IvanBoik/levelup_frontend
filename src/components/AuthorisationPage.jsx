import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import cross from "../images/close-cross.svg";
import googleLogo from "../images/google.svg";
import AuthService from "../api/AuthService";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from "axios";


const AuthorisationPage = () => {
    const navigate = useNavigate();

    const [ user, setUser ] = React.useState(null);
    const [ profile, setProfile ] = React.useState([]);

    const googleLogin = useGoogleLogin({
        onSuccess: (codeResponse) => {setUser(codeResponse); console.log(codeResponse);},
        onError: (error) => console.log('Login Failed:', error)
    });

    React.useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then(async (res) => {
                        const response = res.data;
                        const userFromBack = await AuthService.googleAuthorization(response);
                        localStorage.setItem("user", JSON.stringify(userFromBack.user));
                        localStorage.setItem("accessToken", response.accessToken);
                        localStorage.setItem("refreshToken", response.refreshToken);
                        navigate("/profile");
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    const registration = async () => {
        const name = document.querySelector("#registration-input-1").value;
        const surname = document.querySelector("#registration-input-2").value;
        const email = document.querySelector("#registration-input-3").value;
        const password = document.querySelector("#registration-input-4").value;
        const passwordConfirm = document.querySelector("#registration-input-5").value;
        if (password !== passwordConfirm) throw new Error();
        try {
            const response = await AuthService.registration({
                enabled: true,
                email,
                credentials: [{
                    type: "password",
                    value: password,
                    temporary: false
                }],
                firstName: name,
                lastName: surname,
                username: email
            },
                {
                    email,
                    password,
                    name,
                    surname
                });
            console.log(response);
            localStorage.setItem("user", JSON.stringify(response.user));
            localStorage.setItem("accessToken", response.accessToken);
            localStorage.setItem("refreshToken", response.refreshToken);
            navigate("/profile");
        }
        catch (e) {
            console.log(e);
            alert("Ошибка авторизации");
        }
    }

    const login = async () => {
        const email = document.querySelector("#login-input-1").value;
        const password = document.querySelector("#login-input-2").value;

        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem("user", JSON.stringify(response.user));
            localStorage.setItem("accessToken", response.accessToken);
            localStorage.setItem("refreshToken", response.refreshToken);
            navigate("/profile");
        }
        catch (e) {
            console.log(e);
            alert("Ошибка авторизации");
        }
    }

    const loginForm = (
        <div>
            <div className="login-block-form">
                <input type="text" className="login-block-form-input" id="login-input-1"
                       placeholder="E-mail"/>
                <input type="password" className="login-block-form-input password" id="login-input-2"
                       placeholder="Пароль"/>
                <button className="login-block-form-enter"
                onClick={() => login()}>Войти</button>
            </div>
            <div className="login-block-footer">
                <p className="login-block-footer-text">Войти с помощью Google</p>
                {/*<GoogleLogin onSuccess={(x) => console.log(x)} onError={(x) => console.log(x)}/>*/}
                <button className="google-enter" onClick={() => googleLogin()}>
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
            onClick={() => registration()}>Регистрация</button>
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