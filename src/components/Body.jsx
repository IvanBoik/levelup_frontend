import React from 'react';
import PopularCourses from "./PopularCourses";
import PopularArticles from "./PopularArticles";
import Footer from "./Footer";
import Header from "./Header";

const Body = () => {
    React.useEffect(() => {
        document.querySelector(".banner-button").addEventListener("click", () =>
            window.scroll({
                top: 670,
                left: 0,
                behavior: "smooth",
            }));
    });

    return (
        <div className="main-body">
            <Header/>
            <div className="banner-container">
                <div className="banner-text-container">
                    <p className="banner-head-text">LevelUp</p>
                    <p className="banner-text">место для повышения вашего уровня</p>
                </div>
                <button className="banner-button">Поехали</button>
            </div>
            <PopularCourses/>
            <Footer/>
        </div>
    );
};

export default Body;