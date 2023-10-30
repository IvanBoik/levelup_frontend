import React from 'react';
import radio from "../images/question-radio-type.svg";
import radioActive from "../images/question-radio-type-active.svg";
import checkbox from "../images/question-checkbox-type.svg";
import checkboxActive from "../images/question-checkbox-type-active.svg";
import radioIsRight from "../images/radioIsRight.svg";
import radioNotIsRight from "../images/radioNotIsRight.svg";
import checkboxIsRight from "../images/checkboxIsRight.svg";
import checkboxNotIsRight from "../images/checkboxNotIsRight.svg";
import removeAnswer from "../images/removeAnswer.svg";
import {CourseContext} from "../context";

const HomeWorkQuestion = (props) => {

    const {ctxCourse,
        setCtxCourse,
        ctxLesson,
        setCtxLesson} = React.useContext(CourseContext);

    const [questionType, setQuestionType] = React.useState(props.item.questionType);
    const [questionText, setQuestionText] = React.useState(props.item.text);
    const [answers, setAnswers] = React.useState(props.item.answers);

    return (
        <div className="home-work-test-question-block">
            <input type="text" className="home-work-test-question-input" placeholder="Введите вопрос"
            value={ctxLesson.homework.questions[props.qIndex].text} onChange={e => {
                setQuestionText(e.target.value);
                ctxLesson.homework.questions[props.qIndex].text = e.target.value;
            }}/>
            <p className="home-work-test-question-text">Количество вариантов ответа:</p>
            <div className="home-work-test-question-answer-type-block">
                <button className="home-work-test-question-answer-type" onClick={() => {
                    setQuestionType("radio");
                    ctxLesson.homework.questions[props.qIndex].type = "radio";
                    ctxLesson.homework.questions[props.qIndex].answers.map(a => a.isRight = false);
                    ctxLesson.homework.questions[props.qIndex].answers[0].isRight = true;
                    answers.map(a => a.isRight = false);
                    answers[0].isRight = true;
                    setAnswers([...answers]);
                }}>
                    <img src={ctxLesson.homework.questions[props.qIndex].type === "radio" ? radioActive : radio} alt=""
                         className="home-work-test-question-answer-type-img"/>
                </button>
                <button className="home-work-test-question-answer-type" onClick={() => {
                    setQuestionType("checkbox");
                    ctxLesson.homework.questions[props.qIndex].type = "checkbox";
                    ctxLesson.homework.questions[props.qIndex].answers.map(a => a.isRight = false);
                    ctxLesson.homework.questions[props.qIndex].answers[0].isRight = true;
                    answers.map(a => a.isRight = false);
                    answers[0].isRight = true;
                    setAnswers([...answers]);
                }}>
                    <img src={ctxLesson.homework.questions[props.qIndex].type === "checkbox" ? checkboxActive : checkbox} alt=""
                         className="home-work-test-question-answer-type-img"/>
                </button>
            </div>
            {
                ctxLesson.homework.questions[props.qIndex].answers.map((x) => (
                    <div className="home-work-answer-option-block">
                        <img src={ctxLesson.homework.questions[props.qIndex].type === "radio"
                            ? (x.isRight ? radioIsRight : radioNotIsRight)
                            : (x.isRight ? checkboxIsRight : checkboxNotIsRight)}
                             onClick={() => {
                                 if (ctxLesson.homework.questions[props.qIndex].type === "checkbox") {
                                     if (ctxLesson.homework.questions[props.qIndex].answers
                                         .filter(a => a.isRight).length === 1) {
                                         x.isRight = true;
                                     }
                                     else {
                                         x.isRight = !x.isRight;
                                     }
                                 }
                                 else {
                                     ctxLesson.homework.questions[props.qIndex].answers.map(a => a.isRight = false);
                                     x.isRight = true;

                                 }
                                 setAnswers([...answers]);
                             }}
                             alt="" className="home-work-answer-option-is-right"/>
                        <input type="text" className="home-work-answer-option-input" placeholder="Введите ответ"
                                value={x.text} onChange={e => {
                                    setAnswers([...answers]);
                                    x.text = e.target.value
                        }}/>
                        <button className="home-work-remove-answer-option"
                                onClick={() => {
                                    if (!x.isRight) {
                                        x.text = "";
                                        setAnswers(answers.filter(a => a !== x));
                                        ctxLesson.homework.questions[props.qIndex].answers =
                                            ctxLesson.homework.questions[props.qIndex].answers
                                                .filter(a => a !== x);
                                    }
                                }}>
                            <img src={removeAnswer} alt="" className="home-work-remove-answer-option-img"/>
                        </button>
                    </div>
                ))
            }
            <button className="home-work-add-answer-option"
            onClick={() => {
                setAnswers([...answers, {text: "", isRight: false}]);
                ctxLesson.homework.questions[props.qIndex].answers.push({
                    text: "",
                    isRight: false
                });
            }}>+ Добавить вариант ответа</button>
            <button className="home-work-test-remove-question"
            onClick={() => {
                if (ctxLesson.homework.questions.length !== 1) {
                    const newL = ctxLesson;
                    newL.homework.questions = ctxLesson.homework.questions.filter((x, index) => index !== props.qIndex);
                    setCtxLesson(newL);
                    props.setQuestions(props.questions.filter((x) => x !== props.item));
                }
                else {
                    ctxLesson.homework.homeworkType = "";
                    props.setHWType("");
                }
            }}>Удалить вопрос</button>
        </div>
    );
};

export default HomeWorkQuestion;