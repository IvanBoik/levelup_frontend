import React from 'react';
import PersonalAreaHeader from "./PersonalAreaHeader";
import {NavLink} from "react-router-dom";

let lessons = [
    {
        title: "Морковь для новичков 1",
        introduction: "Вы узнаете, как выбрать правильный сорт моркови, в зависимости от ее качеств"
    },
    {
        title: "Морковь для новичков 2",
        introduction: "Вы узнаете, как выбрать правильный сорт моркови, в зависимости от ее качеств"
    },
    {
        title: "Морковь для новичков 3",
        introduction: "Вы узнаете, как выбрать правильный сорт моркови, в зависимости от ее качеств"
    }
];

const CourseProgramPage = () => {
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
                                    <button className="course-program-page-lesson-block-button">Удалить</button>
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
                <div className="course-program-page-footer">
                    <button className="course-program-page-footer-button">Сохранить</button>
                </div>
            </div>
        </div>
    );
};

export default CourseProgramPage;