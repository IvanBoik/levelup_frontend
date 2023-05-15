import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    let isUser = localStorage.getItem("accessToken") !== 'null';

    return (
        <div className="main-header">
            <div className="main-icon-block"/>
            <div className="links">
                <NavLink to="/" className={({isActive}) =>
                    isActive?"header-href header-href-active":"header-href"}>Главная</NavLink>
                <NavLink to="/articles" className={({isActive}) =>
                    isActive?"header-href header-href-active":"header-href"}>Статьи</NavLink>
                <NavLink to="/courses" className={({isActive}) =>
                    isActive?"header-href header-href-active":"header-href"}>Курсы</NavLink>
                <NavLink to={isUser ? "/profile" : "/login"} className={({isActive}) =>
                    isActive?"header-href header-href-active":"header-href"}>Личный<br/>кабинет</NavLink>
            </div>
        </div>
    );
};

export default Header;