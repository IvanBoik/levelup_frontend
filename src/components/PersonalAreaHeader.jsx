import React from 'react';
import logo from "../images/icon.svg";
import {NavLink} from "react-router-dom";

const PersonalAreaHeader = () => {
    return (
        <div className="personal-area-header">
            <NavLink to="/" className="personal-area-header-logo-block">
                <img src={logo} alt="" className="personal-area-header-icon"/>
                <p className="personal-area-header-logo-text">Личный кабинет пользователя</p>
            </NavLink>
            <div className="personal-area-header-links">
                <span><NavLink to="/profile" className="personal-area-header-link">Мои данные</NavLink></span>
                <span><NavLink to="/courses" className="personal-area-header-link">Мои курсы</NavLink></span>
                <span><NavLink to="/profile/create_course" className="personal-area-header-link">Добавить курс</NavLink></span>
                <span><NavLink className="personal-area-header-link">Добавить статью</NavLink></span>
            </div>
            <button className="personal-area-header-exit">Выйти</button>
        </div>
    );
};

export default PersonalAreaHeader;