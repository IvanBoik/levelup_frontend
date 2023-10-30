import React from 'react';
import PersonalAreaHeader from "./PersonalAreaHeader";
import LessonBuilderBlock from "./LessonBuilderBlock";
import {CourseContext} from "../context";
import {NavLink} from "react-router-dom";

const AddNewLessonPage = () => {

    const {ctxCourse,
        setCtxCourse,
        ctxLesson,
        setCtxLesson} = React.useContext(CourseContext);

    localStorage.setItem("isEdit", "false");

    return (
        <div className="add-new-lesson-page">
            <PersonalAreaHeader/>
            <div className="add-new-lesson-page-container">
                <h2 className="add-new-lesson-page-head">Программа курса</h2>
                <LessonBuilderBlock/>
                <div className="course-program-page-footer-with-scroll">
                    <button className="course-program-page-footer-button" onClick={() => {
                        console.log(ctxLesson);
                        setCtxLesson({
                            title: "",
                            file: "",
                            duration: "",
                            introduction: "",
                            description: "",
                            homework: {
                                homeworkType: "",
                                freeAnswer: "",
                                questions: [{
                                    text: "",
                                    type: "radio",
                                    answers: [{
                                        text: "",
                                        isRight: true
                                    }]
                                }]
                            }
                        });
                        localStorage.setItem("lessonsCount", Number(localStorage.getItem("lessonsCount")) + 1);
                    }}>Сохранить</button>
                    <NavLink to="/profile/create_course/content" className="course-program-page-footer-button">Просмотр</NavLink>
                </div>
            </div>
        </div>
    );
};

export default AddNewLessonPage;