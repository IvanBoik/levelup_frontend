import CourseFirstBlock from "./CourseFirstBlock";
import courseMainImg from "../images/course-main-img.png";

const BodyForCourse = () => {
    return (
        <div className="body-for-course">
            <CourseFirstBlock topic="Садоводство" difficulty="Начальный" price={0} title="Горшечные растения"
            author="lilPlant" likes={130} img={courseMainImg}/>
        </div>
    );
};

export default BodyForCourse;