import React from 'react';
import PersonalAreaHeader from "./PersonalAreaHeader";
import {NavLink} from "react-router-dom";

const CourseProgramPage = () => {

    const [lessons, setLessons] = React.useState([]);
    localStorage.setItem("lessonsCount", lessons.length);

    return (
        <div className="course-program-page">
            <PersonalAreaHeader/>
            <div className="course-program-page-container">
                <div className="course-program-page-container-without-footer">
                    <h2 className="course-program-page-head">Программа курса</h2>
                    {lessons.map((x, index) => (
                        <div className="course-program-page-lesson-block">
                            <p className="course-program-page-lesson-index">{index+1}</p>
                            <div className="course-program-page-lesson-block-content">
                                <h2 className="course-program-page-lesson-title">{x.title}</h2>
                                <p className="course-program-page-lesson-introduction">{x.introduction}</p>
                                <div className="course-program-page-lesson-block-buttons">
                                    <button className="course-program-page-lesson-block-button">Редактировать</button>
                                    <button className="course-program-page-lesson-block-button"
                                    onClick={() => {
                                        setLessons(lessons.filter((x, i) => i !== index));
                                    }}>Удалить</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {lessons.length===0 &&
                        <div className="course-program-page-no-lessons-block">
                            <p className="course-program-page-no-lessons-text">
                                В курсе пока нет ни одного урока.
                            </p>
                            <p className="course-program-page-no-lessons-text">
                                Создайте свой первый урок
                            </p>
                        </div>}
                    <NavLink to="/profile/create_course/content/create_lesson"
                             className="course-program-page-add-new-lesson">+ Новый урок</NavLink>
                </div>
            </div>
        </div>
    );
};

export default CourseProgramPage;