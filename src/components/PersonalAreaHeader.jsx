import React from 'react';
import logo from "../images/icon.svg";
import {NavLink, useNavigate} from "react-router-dom";


const PersonalAreaHeader = (props) => {
    const navigate = useNavigate();

    return (
        <div className="personal-area-header">
            <NavLink to="/" className="personal-area-header-logo-block">
                <img src={logo} alt="" className="personal-area-header-icon"/>
                <p className="personal-area-header-logo-text">
                    {props.is ? "Личный кабинет пользователя" : "Создание авторского курса"}
                </p>
            </NavLink>
            <div className="personal-area-header-links">
                <NavLink to={props.is ? "/profile" : "/profile/create_course"} end
                                className={({isActive}) => isActive
                                    ? "personal-area-header-link-active"
                                    : "personal-area-header-link"}>
                                {props.is ? "Мои данные" : "Описание"}
                </NavLink>
                <NavLink to={props.is ? "/courses" : "/profile/create_course/content"}
                               className={({isActive}) => isActive
                                   ? "personal-area-header-link-active"
                                   : "personal-area-header-link"}>
                                {props.is ? "Мои курсы" : "Содержание"}
                </NavLink>
                <NavLink to={props.is ? "/profile/create_course" : "/profile/create_course/publication"} end
                               className={({isActive}) => isActive
                                   ? "personal-area-header-link-active"
                                   : "personal-area-header-link"}
                                onClick={() => {props.is && props.setIs(false)}}>
                                {props.is ? "Добавить курс" : "Публикация"}
                </NavLink>
                <NavLink to={props.is ? "/profile/create_article" : "/profile"} end
                               className={({isActive}) => isActive
                                   ? "personal-area-header-link-active"
                                   : "personal-area-header-link"}
                                onClick={() => {props.is && props.setIs(false)}}>
                                {props.is ? "Добавить статью" : "Личный кабинет"}
                </NavLink>
            </div>
            <button className="personal-area-header-exit" onClick={() => {
                localStorage.removeItem("user");
                navigate("/login");
            }}>Выйти</button>
        </div>
    );
};

export default PersonalAreaHeader;