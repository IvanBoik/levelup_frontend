import ProgressBar from "react-bootstrap/ProgressBar";

const CourseSecondBlock = (props) => {
    if (!props.isStudent) {
        return (
            <div className="course-second-block-container-for-lists">
                <div className="course-second-block-lists">
                    <ul className="course-second-block-list">
                        <li className="course-second-block-item">Формат<br/>видеоурок</li>
                        <li className="course-second-block-item">Количество уроков<br/>
                            {props.videos.length} уроков</li>
                    </ul>
                    <ul className="course-second-block-list">
                        <li className="course-second-block-item">Общая длительность<br/>
                            {Math.round(props.videos.reduce((res, x) => res + x.duration, 0) / 3600)} часов</li>
                        <li className="course-second-block-item">Домашняя работа<br/>
                            {props.hasHomeWork ? "есть" : "нет"}</li>
                    </ul>
                </div>
            </div>
        );
    }
    else {
    const containerStyles = {
        height: 30,
        width: 1200,
        backgroundColor: "#FFFFFF9C",
        borderRadius: 50,
        marginLeft: 12,
        marginTop: 24
    }

    const fillerStyles = {
        height: '100%',
        width: `${props.completed}%`,
        backgroundColor: "#E6E18F",
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    return (
            <div className="course-second-block-container-for-progressbar">
                <h2 className="course-progressbar-text">Ваш прогресс</h2>
                <div style={containerStyles}>
                    <div style={fillerStyles}>
                    </div>
                </div>
            </div>
        );
    }
};

export default CourseSecondBlock;