import {NavLink} from "react-router-dom";
import logo from "../images/icon.svg";

const HeaderForCourseAndLesson = () => {
    return (
        <div className="header-for-course-and-lesson">
            <NavLink to="/">
                <img src={logo} alt="" className="header-for-course-and-lesson-icon"/>
            </NavLink>
            <p className="header-for-course-and-lesson-text">
                Образовательная<br/>платформа
            </p>
        </div>
    );
};

export default HeaderForCourseAndLesson;