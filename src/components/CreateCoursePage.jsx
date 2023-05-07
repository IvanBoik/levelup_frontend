import React from 'react';
import PersonalAreaHeader from "./PersonalAreaHeader";
import {NavLink} from "react-router-dom";

const CreateCoursePage = () => {
    return (
        <div className="create-course-page">
            <PersonalAreaHeader/>
            <div className="create-course-page-container">
                <h2 className="create-course-page-head">Создание нового курса</h2>
                <p className="create-course-page-course-name-string">Название курса *</p>
                <input type="text" className="create-course-page-course-name-input"/>
                <p className="create-course-page-course-name-characters-maximum">Максимум 64 символа</p>
                <label htmlFor="avatar-input-for-create-course-page" className="create-course-page-avatar-input-label">
                    + Файл обложки
                </label>
                <input type="file" id="avatar-input-for-create-course-page" className="create-course-page-avatar-input"
                       accept="image/png, image/jpeg"/>
                <textarea name="description" cols="30" rows="10" className="create-course-page-description-input"
                          placeholder="Добавьте описание курса"/>
                <div className="create-course-page-links">
                    <NavLink className="create-course-page-nav-link">Сделать курс платным</NavLink>
                    <NavLink to="/profile/course_program" className="create-course-page-nav-link">Создать курс</NavLink>
                </div>
            </div>
        </div>
    );
};

export default CreateCoursePage;