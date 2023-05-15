import React from 'react';
import PersonalAreaHeader from "./PersonalAreaHeader";
import {NavLink} from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import arrow from "../images/dropdown-arrow.svg";

const CreateCoursePage = () => {
    const topicList = ["IT", "Дизайн", "Здоровье и спорт"];
    const difficultyList = ["Начальный", "Простой", "Средний", "Продвинутый", "Высокий"];
    const [topicName, setTopicName] = React.useState("Категории");
    const [difficultyName, setDifficultyName] = React.useState("Сложность");
    const [topicIsOpen, setTopicIsOpen] = React.useState(false);
    const [difficultyIsOpen, setDifficultyIsOpen] = React.useState(false);
    return (
        <div>
            <PersonalAreaHeader/>
            <div className="create-course-page-container">
                <h2 className="create-course-page-head">Создание нового курса</h2>
                <div className="create-course-page-drop-down-container">
                    <div className="create-course-page-drop-down-block">
                        <button className="create-course-page-drop-down-button"
                                onClick={() => setTopicIsOpen(true)}>
                            {topicName} <img src={arrow} alt=""/>
                        </button>
                        {topicIsOpen && <DropDownMenu list={topicList} setIsOpen={setTopicIsOpen} setName={setTopicName}/>}
                    </div>
                    <div className="create-course-page-drop-down-block">
                        <button className="create-course-page-drop-down-button"
                                onClick={() => setDifficultyIsOpen(true)}>
                            {difficultyName} <img src={arrow} alt=""/>
                        </button>
                        {difficultyIsOpen && <DropDownMenu list={difficultyList} setIsOpen={setDifficultyIsOpen} setName={setDifficultyName}/>}
                    </div>
                </div>
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
                <p className="create-course-page-future-work-example-string">
                    Примеры будущих работ
                </p>
                <label htmlFor="future-work-input-for-create-course-page" className="create-course-page-future-work-input-label">
                    + Файл
                </label>
                <input type="file" id="future-work-input-for-create-course-page" className="create-course-page-avatar-input"
                       accept="image/png, image/jpeg"/>
                <NavLink className="create-course-page-nav-link">Сохранить</NavLink>
            </div>
        </div>
    );
};

export default CreateCoursePage;