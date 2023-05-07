
const CourseThirdBlock = (props) => {
    let promises = props.promises.split("\n");
    let firstString = promises[0];
    promises.splice(0,1);
    return (
        <div className="course-third-block">
            <h2 className="course-third-block-title">Описание</h2>
            <p className="course-third-block-description">{props.description}</p>
            <div className="course-third-block-promises">
                <p className="course-third-block-description">{firstString}</p>
                <ul className="course-third-block-promises-list">
                    {promises.map(el => <li className="course-third-block-description course-third-block-promises-item">{el}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default CourseThirdBlock;