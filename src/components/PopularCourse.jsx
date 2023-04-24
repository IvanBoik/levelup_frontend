import React from "react";

const PopularCourse = (props) => {
    return (
        <div className="popular-course-item" style={{ backgroundImage: `url(${props.img})` }}>
            <h3 className="popular-course-title">{props.title}</h3>
            <p className="popular-course-author">{props.author}</p>
        </div>
    );
};

export default PopularCourse;