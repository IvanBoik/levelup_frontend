import like from "../images/like.svg";
import likeAfterClick from "../images/like-after-click.svg";

const CourseFirstBlock = (props) => {
    if (props.isStudent) {
        return (
            <div className="course-first-block" style={{height: "910px", marginTop:"110px"}}>
                <div className="course-first-block-parameters">
                    <p className="course-first-block-param">{props.topic}</p>
                    <p className="course-first-block-param">{props.difficulty}</p>
                    <div className="course-first-block-likes">
                        <img src={like} alt="" className="course-first-block-like-icon"/>
                        <p className="course-first-block-like-count">{props.likes}</p>
                    </div>
                </div>
                <h2 className="course-first-block-title">{props.title}</h2>
                <p className="course-first-block-author">от {props.author}</p>
                <img src={props.img} alt="" className="course-first-block-img"/>
            </div>
        );
    }
    else {
        return (
            <div className="course-first-block">
                <div className="course-first-block-parameters">
                    <p className="course-first-block-param">{props.topic}</p>
                    <p className="course-first-block-param">{props.difficulty}</p>
                </div>
                <h2 className="course-first-block-title">{props.title}</h2>
                <p className="course-first-block-author">от {props.author}</p>
                <img src={props.img} alt="" className="course-first-block-img"/>
                <div className="course-first-block-parameters under">
                    <p className="course-first-block-param">
                        {props.price===0 ? "Бесплатно" : props.price + "₽"}
                    </p>
                    <div className="course-first-block-likes">
                        <img src={like} alt="" className="course-first-block-like-icon"/>
                        <p className="course-first-block-like-count">{props.likes}</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default CourseFirstBlock;