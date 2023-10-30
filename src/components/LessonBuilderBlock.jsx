import React from 'react';
import testIMG from "../images/hw-test-button.svg";
import freeAnswerIMG from "../images/hw-free-answer-button.svg";
import HomeWorkQuestion from "./HomeWorkQuestion";
import {CourseContext} from "../context";


const LessonBuilderBlock = () => {

    const {ctxCourse,
        setCtxCourse,
        ctxLesson,
        setCtxLesson} = React.useContext(CourseContext);

    const [title, setTitle] = React.useState();
    const [introduction, setIntroduction] = React.useState();
    const [description, setDescription] = React.useState();
    const [homeworkType, setHomeworkType] = React.useState();
    const [freeAnswerQuestion, setFreeAnswerQuestion] = React.useState();
    const [questions, setQuestions] = React.useState([{
        questionType: "radio",
        text: "",
        answers: [{
            text: "",
            isRight: true
        }]
    }]);

    const startValue = Number(localStorage.getItem("lessonsCount"));

    return (
        <div>
            <div className="add-new-lesson-page-data-block">
                <p className="add-new-lesson-page-lesson-number">{startValue + 1}</p>
                <div className="add-new-lesson-page-data">
                    <div className="add-new-lesson-page-first-line">
                        <input type="text" className="add-new-lesson-page-title-input"
                               placeholder="Название урока *"
                               value={ctxLesson.title} onChange={e => {
                                   setTitle(e.target.value);
                                   ctxLesson.title = e.target.value;
                        }}/>
                    </div>

                    <input type="text" className="add-new-lesson-page-little-description"
                           placeholder="Краткое описание *"
                           value={ctxLesson.introduction} onChange={e => {
                               setIntroduction(e.target.value);
                               ctxLesson.introduction = e.target.value;
                    }}/>
                    <label htmlFor="add-new-lesson-page-video-input" className="add-new-lesson-page-video-label">
                        + Добавить файл
                    </label>
                    <input id="add-new-lesson-page-video-input" type="file" accept="video/*"
                           className="add-new-lesson-page-video-input"
                            onChange={(e) => {
                                ctxLesson.file = e.target.files[0];
                            }}/>
                </div>
            </div>
            <div className="add-new-lesson-page-data-second-block">
                <textarea name="content" cols="30" rows="10"
                          className="add-new-lesson-page-content"
                          placeholder="Введите содержание урока *"
                          value={ctxLesson.description} onChange={(e) => {
                              setDescription(e.target.value);
                              ctxLesson.description = e.target.value;
                }}/>
                {ctxLesson.homework.homeworkType === "test"
                    ? <div>
                        <div className="home-work-head">Домашнее задание:&nbsp;
                            <p className="home-work-strong-head" onClick={() => {
                                setHomeworkType(null);
                                ctxLesson.homework.homeworkType = null;
                            }}>Тест</p></div>
                        {
                            ctxLesson.homework.questions.map((x, index) =>
                                <HomeWorkQuestion item={x} qIndex={index} setQuestions={setQuestions} questions={questions} setHWType={setHomeworkType}/>)
                        }
                        <button className="home-work-test-add-question"
                                onClick={() => {
                                    setQuestions([...questions, {
                                        questionType: "radio",
                                        text: "",
                                        answers: [{
                                            text: "",
                                            isRight: true
                                        }]
                                    }]);
                                    ctxLesson.homework.questions.push({
                                        type: "radio",
                                        text: "",
                                        answers: [{
                                            text: "",
                                            isRight: true
                                        }]
                                    })
                                }}>+ Добавить вопрос</button>
                    </div>
                    : (ctxLesson.homework.homeworkType === "freeAnswer"
                    ? <div>
                            <p className="home-work-head">Домашнее задание:&nbsp;
                                <p className="home-work-strong-head" onClick={() => {
                                    setHomeworkType(null);
                                    ctxLesson.homework.homeworkType = "";
                                }}>Свободный ответ</p></p>
                            <div className="home-work-free-answer-block">
                                 <textarea name="content" cols="30" rows="10"
                                    className="add-new-lesson-page-content"
                                    placeholder="Введите задание"
                                    value={ctxLesson.homework.freeAnswer}
                                    onChange={(e) => {
                                        setFreeAnswerQuestion(e.target.value);
                                        ctxLesson.homework.freeAnswer = e.target.value;
                                    }}
                                    style={{
                                        marginTop: "8px",
                                        marginLeft: "0"
                                    }}/>
                                <p className="home-work-free-answer-file-formats">В качестве ответа пользователи отправляют файл(ы). Принимаются файлы любого формата</p>
                            </div>
                        </div>
                    : <div className="add-new-lesson-page-home-work-block">
                            <h2 className="add-new-lesson-page-home-work-head">Добавьте домашнее задание</h2>
                            <button className="add-new-lesson-page-home-work-type"
                                    onClick={() => {
                                        setHomeworkType("test");
                                        ctxLesson.homework.homeworkType = "test";
                                    }}>
                                <img src={testIMG} alt="" className="add-new-lesson-page-home-work-type-img"/>
                            </button>
                            <button className="add-new-lesson-page-home-work-type"
                                    onClick={() => {
                                        setHomeworkType("freeAnswer");
                                        ctxLesson.homework.homeworkType = "freeAnswer";
                                    }}>
                                <img src={freeAnswerIMG} alt="" className="add-new-lesson-page-home-work-type-img"/>
                            </button>
                        </div>)}
            </div>
        </div>
    );
};

export default LessonBuilderBlock;