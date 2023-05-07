import {NavLink} from "react-router-dom";
import logo from "../images/icon.svg";
import arrow from "../images/arrow.svg";

const HeaderForCourseAndLesson = (props) => {
    if (props.isStudent) {
        return (
            <div className="header-for-course-and-lesson-with-buttons">
                <div className="header-for-course-and-lesson">
                    <NavLink to="/" className="header-for-course-and-lesson-icon-link">
                        <img src={logo} alt="" className="header-for-course-and-lesson-icon"/>
                    </NavLink>
                    <p className="header-for-course-and-lesson-text">
                        Образовательная<br/>платформа
                    </p>
                </div>
                <div className="header-for-course-and-lesson-buttons">
                    <NavLink to="/courses/1" end className={({isActive}) =>
                        isActive?"header-for-course-and-lesson-button-active"
                            :"header-for-course-and-lesson-button"}>Описание</NavLink>
                    <NavLink to="/courses/1/lessons" end className={({isActive}) =>
                        isActive?"header-for-course-and-lesson-button-active"
                            :"header-for-course-and-lesson-button"}>Уроки</NavLink>
                    {props.lessons !== undefined &&
                        <button className="header-button-of-lessons-list">
                            <img src={arrow} alt=""/>
                        </button>}
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="header-for-course-and-lesson">
                <NavLink to="/" className="header-for-course-and-lesson-icon-link">
                    <img src={logo} alt="" className="header-for-course-and-lesson-icon"/>
                </NavLink>
                <p className="header-for-course-and-lesson-text">
                    Образовательная<br/>платформа
                </p>
            </div>
        );
    }

};

export default HeaderForCourseAndLesson;