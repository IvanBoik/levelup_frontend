import React from 'react';
import PersonalAreaHeader from "./PersonalAreaHeader";
import {NavLink} from "react-router-dom";

const AddNewLessonPage = () => {
    return (
        <div className="add-new-lesson-page">
            <PersonalAreaHeader/>
            <div className="add-new-lesson-page-container">
                <h2 className="add-new-lesson-page-head">Программа курса</h2>
                <div className="add-new-lesson-page-data-block">
                    <input type="text" className="add-new-lesson-page-title-input"
                    placeholder="Название урока *"/>
                    <input type="text" className="add-new-lesson-page-little-description"
                        placeholder="Краткое описание *"/>
                    <label htmlFor="add-new-lesson-page-video-input" className="add-new-lesson-page-video-label">
                        + Добавить файл
                    </label>
                    <input id="add-new-lesson-page-video-input" type="file" accept="video/*"
                           className="add-new-lesson-page-video-input"/>
                </div>
                <div className="add-new-lesson-page-data-block">
                    <textarea name="content" cols="30" rows="10"
                              className="add-new-lesson-page-content"
                              placeholder="Введите содержание урока *"/>
                    <textarea name="homework" cols="30" rows="10"
                              className="add-new-lesson-page-content"
                              placeholder="Добавьте домашнее задание"/>
                </div>
                <button className="add-new-lesson-page-save-lesson">Сохранить урок</button>
                <div className="course-program-page-footer-with-scroll">
                    <button className="course-program-page-footer-button">Сохранить</button>
                    <button className="course-program-page-footer-button">Назад</button>
                </div>
            </div>
        </div>
    );
};

export default AddNewLessonPage;