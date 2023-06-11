import React from 'react';
import PersonalAreaHeader from "./PersonalAreaHeader";
import testIMG from "../images/hw-test-button.svg";
import freeAnswerIMG from "../images/hw-free-answer-button.svg";
import {NavLink} from "react-router-dom";
import LessonBuilderBlock from "./LessonBuilderBlock";

const AddNewLessonPage = () => {

    const startValue = localStorage.getItem("lessonsCount");
    const [lessonBuilders, setLessonBuilders] = React.useState([0]);

    return (
        <div className="add-new-lesson-page">
            <PersonalAreaHeader/>
            <div className="add-new-lesson-page-container">
                <h2 className="add-new-lesson-page-head">Программа курса</h2>
                {lessonBuilders.map((x, index) => {
                    return <LessonBuilderBlock index={startValue + index + 1}/>;
                })}
                <button className="add-new-lesson-page-save-lesson"
                onClick={() => setLessonBuilders([...lessonBuilders, 0])}>+ Новый урок</button>
                <div className="course-program-page-footer-with-scroll">
                    <button className="course-program-page-footer-button">Сохранить</button>
                    <button className="course-program-page-footer-button">Просмотр</button>
                </div>
            </div>
        </div>
    );
};

export default AddNewLessonPage;