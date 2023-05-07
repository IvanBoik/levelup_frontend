import HeaderForCourseAndLesson from "./HeaderForCourseAndLesson";
import BodyForCourse from "./BodyForCourse";

const CoursePage = () => {
    return (
        <div className="course-page">
            <HeaderForCourseAndLesson isStudent={true}/>
            <BodyForCourse isStudent={true}/>
        </div>
    );
};

export default CoursePage;