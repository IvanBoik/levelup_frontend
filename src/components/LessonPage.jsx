import HeaderForCourseAndLesson from "./HeaderForCourseAndLesson";
import v from "../videos/video1.mp4";

const LessonPage = () => {
    const title = "Урок 1. Введение";
    const introduction = "Вы узнаете, что такое горшечные растения и как их выбирать для частных и общественных интерьеров.";
    const video = v;
    const content = "Наверняка, многие из вас задавались вопросом как подобрать комнатные растения и для чего они нам нужны.\n" +
        "\n" +
        "В данном уроке мы разберем следующие темы:\n" +
        "виды комнатных растений\n" +
        "для чего нужны комнатные растения\n" +
        "комнатные растения в интерьере";
    let homeWork = "Определите вид ваших комнатных растений.\n" +
        "Расставьте ваши растения в соответствии с интерьером квартиры";

    return (
        <div className="lesson-page">
            <HeaderForCourseAndLesson lessons={[1,2,3]} isStudent={true}/>
            <div className="lesson-page-body">
                <div className="lesson-page-video-and-title-container">
                    <h2 className="lesson-page-title">
                        {title}
                    </h2>
                    <p className="lesson-page-introduction">
                        {introduction}
                    </p>
                    <video src={video} className="lesson-page-video" controls/>
                </div>
                <div className="lesson-page-content-container">
                    <h3 className="lesson-page-content-word">Содержание</h3>
                    <p className="lesson-page-text-content">
                        {content}
                    </p>
                </div>
                {homeWork !== undefined &&
                <div className="lesson-page-home-work-container">
                    <h3 className="lesson-page-home-work-title">Домашнее задание</h3>
                    <p className="lesson-page-text-home-work">
                        {homeWork}
                    </p>
                </div>}
                <div className="lesson-page-buttons-container">
                    <button className="lesson-page-button">
                        Назад
                    </button>
                    <button className="lesson-page-button">
                        Дальше
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LessonPage;