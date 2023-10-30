import React from 'react';
import PersonalAreaHeader from "./PersonalAreaHeader";
import publicationNo from "../images/publicationNo.svg";
import publicationYes from "../images/publicationYes.svg";
import checkListYes from "../images/checkListYes.svg";
import checkListNo from "../images/checkListNo.svg";
import { NavLink } from "react-router-dom";

const CoursePublicationPage = () => {

    const [course, setCourse] = React.useState({
        author: "",
        avatar: "",
        title: "",
        description: "",
        price: "",
        dateOfCreate: "",
        difficulty: "",
        topic: "",
        lessons: [{
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
        }]
    });

    const lessonsCheck = (lessons) => {
        let res = true;
        label: for (let l of lessons) {
            if (l.title === "") {
                res = false;
                break;
            }
            if (l.file === "") {
                res = false;
                break;
            }
            if (l.introduction === "") {
                res = false;
                break;
            }
            if (l.description === "") {
                res = false;
                break;
            }
            if (l.homework.homeworkType === "") {
                continue;
            }
            if (l.homework.homeworkType === "freeAnswer") {
                if (l.homework.freeAnswer === "") {
                    res = false;
                    break;
                }
                else {
                    continue;
                }
            }
            for (let q of l.homework.questions) {
                if (q.text === "") {
                    res = false;
                    break label;
                }
                for (let a of q.answers) {
                    if (a.text === "") {
                        res = false;
                        break label;
                    }
                }
            }
        }

        return res;
    }

    const map = [course.title !== "",
        course.avatar !== "",
        course.description.length > 200,
        lessonsCheck(course.lessons),
        course.lessons.length > 2];

    return (
        <div>
            <PersonalAreaHeader/>
            <div className="course-publication-page-container">
                <h2 className="course-publication-page-head">Настройки публикации</h2>
                <div className="course-publication-page-ready-check-block">
                    <div className="course-publication-page-ready-check-line">
                        <img src={map.filter(x => x === true).length === 5 ? publicationYes : publicationNo}
                             alt="" className="course-publication-page-ready-check-line-img"/>
                        <p className="course-publication-page-ready-check-line-text">
                            Готовность курса {map.filter(x => x === true).length + "/5"}
                        </p>
                    </div>
                    <ul className="course-publication-page-check-list">
                        <li className="course-publication-page-check-list-item">
                            <img src={map[0] ? checkListYes : checkListNo}
                                 alt="" className="course-publication-page-check-list-item-img"/>
                            <p className="course-publication-page-check-list-item-text">Есть название</p>
                        </li>
                        <li className="course-publication-page-check-list-item">
                            <img src={map[1] ? checkListYes : checkListNo}
                                 alt="" className="course-publication-page-check-list-item-img"/>
                            <p className="course-publication-page-check-list-item-text">Есть обложка</p>
                        </li>
                        <li className="course-publication-page-check-list-item">
                            <img src={map[2] ? checkListYes : checkListNo}
                                 alt="" className="course-publication-page-check-list-item-img"/>
                            <p className="course-publication-page-check-list-item-text">Есть описание длиннее 200 символов</p>
                        </li>
                        <li className="course-publication-page-check-list-item">
                            <img src={map[3] ? checkListYes : checkListNo}
                                 alt="" className="course-publication-page-check-list-item-img"/>
                            <p className="course-publication-page-check-list-item-text">Нет пустых уроков</p>
                        </li>
                        <li className="course-publication-page-check-list-item">
                            <img src={map[4] ? checkListYes : checkListNo}
                                 alt="" className="course-publication-page-check-list-item-img"/>
                            <p className="course-publication-page-check-list-item-text">Больше 2 уроков</p>
                        </li>
                    </ul>
                </div>
                <div className="course-publication-page-buttons">
                    <NavLink to="/profile/create_course/publication/make_paid"
                        className="course-publication-page-buttons-item">Сделать платным</NavLink>
                    <button className="course-publication-page-buttons-item">Опубликовать</button>
                </div>
            </div>
        </div>

    );
};

export default CoursePublicationPage;