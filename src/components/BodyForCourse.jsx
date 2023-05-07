import CourseFirstBlock from "./CourseFirstBlock";
import courseMainImg from "../images/course-main-img.png";
import CourseSecondBlock from "./CourseSecondBlock";
import CourseThirdBlock from "./CourseThirdBlock";
import CourseFourthBlock from "./CourseFourthBlock";
import futureWorkImg from "../images/im1.png";

const videos = [
    {duration: 3600},
    {duration: 3600},
    {duration: 3600},
    {duration: 3600},
    {duration: 3600},
    {duration: 3600},
    {duration: 3600}
];

const BodyForCourse = (props) => {
    return (
        <div className="body-for-course" style={props.isStudent ? {height: "2850px"} : {}}>
            <CourseFirstBlock isStudent={props.isStudent} topic="Садоводство" difficulty="Начальный" price={0} title="Горшечные растения"
            author="lilPlant" likes={130} img={courseMainImg}/>
            <CourseSecondBlock isStudent={props.isStudent} videos={videos} hasHomeWork={true} completed={20}/>
            <CourseThirdBlock description="На курсе вы познакомитесь с популярными видами горшечных растений, научитесь ухаживать за ними и защищать их от болезней. Сможете украсить свой дом или дополнить цветами интерьер заказчика."
            promises="За 7 дней мини-курса вы научитесь:
разбираться в горшечных растениях
грамотно покупать растения
ухаживать за растениями
размножать растения
оформлять помещения с помощью растений"/>
            <CourseFourthBlock text="Выращивайте здоровые растения - и превратите любое помещение в цветущий сад!"
            images={[futureWorkImg, futureWorkImg, futureWorkImg, futureWorkImg]}/>
            {!props.isStudent && <button className="body-for-course-button">Записаться на курс</button>}
        </div>
    );
};

export default BodyForCourse;