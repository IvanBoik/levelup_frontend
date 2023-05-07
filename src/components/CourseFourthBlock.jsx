import React from "react";

let isDragging = false;
const CourseFourthBlock = (props) => {

    React.useEffect(() => {
        const scroll = document.querySelector(".course-fourth-block-scroll");

        const dragging = (e) => {
            if(!isDragging) return;
            scroll.classList.add("course-fourth-block-dragging");
            scroll.scrollLeft -= e.movementX;
        };
        const dragStop = () => {
            isDragging = false;
            scroll.classList.remove("course-fourth-block-dragging");
        }
        scroll.addEventListener("mousedown", () => isDragging = true);
        scroll.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);
    });

    return (
        <div className="course-fourth-block">
            <h2 className="course-fourth-block-title">Ваши будущие работы</h2>
            <p className="course-fourth-block-text">{props.text}</p>
            <div className="course-fourth-block-scroll">
                {props.images.map(el => <div className="course-fourth-block-img" style={{backgroundImage: `url(${el})`}}>
                    <p className="stupid-text"> </p>
                </div>)}
            </div>
        </div>
    );
};

export default CourseFourthBlock;