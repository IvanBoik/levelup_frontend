import React from 'react';
import {NavLink} from "react-router-dom";

window.onload=function(){
    const allLinks = document.querySelectorAll(".header-href");
    allLinks.forEach(link => {
        link.addEventListener("click", () => {
            document.querySelector(".header-href-active").classList.remove(".header-href-active");
            link.classList.add(".header-href-active");
        })
    });
}

const Header = () => {
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
                <NavLink to="/profile" className={({isActive}) =>
                    isActive?"header-href header-href-active":"header-href"}>Личный<br/>кабинет</NavLink>
            </div>
        </div>
    );
};

export default Header;