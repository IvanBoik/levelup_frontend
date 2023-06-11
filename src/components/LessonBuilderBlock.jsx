import React from 'react';
import testIMG from "../images/hw-test-button.svg";
import freeAnswerIMG from "../images/hw-free-answer-button.svg";

const LessonBuilderBlock = (props) => {

    const [homeWork, setHomeWork] = React.useState(null);

    const test = (
        <div>
            <p className="home-work-head">Домашнее задание:&nbsp;
                <p className="home-work-strong-head" onClick={() => setHomeWork(null)}>Свободный ответ</p></p>
            <div className="home-work-free-answer-block">
                <textarea name="content" cols="30" rows="10"
                          className="add-new-lesson-page-content"
                          placeholder="Введите задание"
                          style={{
                              marginTop: "8px",
                              marginLeft: "0"
                          }}/>
                <p className="home-work-free-answer-file-formats">В качестве ответа пользователи отправляют файл(ы). Принимаются файлы любого формата</p>
            </div>

        </div>
    );

    const freeAnswer = (
        <div>

        </div>
    );

    return (
        <div>
            <div className="add-new-lesson-page-data-block">
                <p className="add-new-lesson-page-lesson-number">{props.index}</p>
                <div className="add-new-lesson-page-data">
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

            </div>
            <div className="add-new-lesson-page-data-second-block">
                <textarea name="content" cols="30" rows="10"
                          className="add-new-lesson-page-content"
                          placeholder="Введите содержание урока *"/>
                {homeWork !== null ? homeWork : <div className="add-new-lesson-page-home-work-block">
                    <h2 className="add-new-lesson-page-home-work-head">Добавьте домашнее задание</h2>
                    <button className="add-new-lesson-page-home-work-type">
                        <img src={testIMG} alt="" className="add-new-lesson-page-home-work-type-img"/>
                    </button>
                    <button className="add-new-lesson-page-home-work-type"
                            onClick={() => setHomeWork(test)}>
                        <img src={freeAnswerIMG} alt="" className="add-new-lesson-page-home-work-type-img"/>
                    </button>
                </div>}
            </div>
        </div>
    );
};

export default LessonBuilderBlock;