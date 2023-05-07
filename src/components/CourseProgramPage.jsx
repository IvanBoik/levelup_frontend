import React from 'react';
import PersonalAreaHeader from "./PersonalAreaHeader";
import {NavLink} from "react-router-dom";

let lessons = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

const CourseProgramPage = () => {
    return (
        <div className="course-program-page">
            <PersonalAreaHeader/>
            <div className="course-program-page-container">
                <div className="course-program-page-container-without-footer">
                    <h2 className="course-program-page-head">Программа курса</h2>
                    {lessons.map((x) => <div>{x}</div>)}
                    {lessons.length===0 &&
                        <div className="course-program-page-no-lessons-block">
                            <p className="course-program-page-no-lessons-text">
                                В курсе пока нет ни одного урока.
                            </p>
                            <p className="course-program-page-no-lessons-text">
                                Создайте свой первый урок
                            </p>
                        </div>}
                    <NavLink to="/profile/course_program/add_lesson"
                             className="course-program-page-add-new-lesson">+ Новый урок</NavLink>
                </div>
                <div className="course-program-page-footer">
                    <button className="course-program-page-footer-button">Сохранить</button>
                    <button className="course-program-page-footer-button">Назад</button>
                </div>
            </div>
        </div>
    );
};

export default CourseProgramPage;