import React from 'react';
 import logo from "../images/course1logo.png";
 import defaultLogo from "../images/default-course.png";
import PopularCourse from "./PopularCourse";


const courses = [
    {title: "Горшечные растения", author: "lilPlant", img:logo},
    {title: "Название курса", author: "автор", img:defaultLogo},
    {title: "Название курса", author: "автор", img:defaultLogo},
    {title: "Название курса", author: "автор", img:defaultLogo},
    {title: "Название курса", author: "автор", img:defaultLogo}
];
let isDragging = false;

const PopularCourses = () => {

    React.useEffect(() => {
        const scroll = document.querySelector(".popular-courses-scroll");

        const dragging = (e) => {
            if(!isDragging) return;
            scroll.classList.add("dragging");
            scroll.scrollLeft -= e.movementX;
        };
        const dragStop = () => {
            isDragging = false;
            scroll.classList.remove("dragging");
        }
        scroll.addEventListener("mousedown", () => isDragging = true);
        scroll.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);
    });

    return (
        <div className="popular-courses-container">
            <h2 className="popular-courses-head">Популярные курсы</h2>
            <button className="go-to-all-courses">Все курсы</button>
            <div className="popular-courses-scroll">
                {courses.map(el => <PopularCourse img={el.img} title={el.title} author={el.author}/>)}
            </div>
        </div>
    );
};

export default PopularCourses;