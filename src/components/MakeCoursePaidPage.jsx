import React from 'react';
import PersonalAreaHeader from "./PersonalAreaHeader";
import {NavLink} from "react-router-dom";

const MakeCoursePaidPage = () => {


    return (
        <div>
            <PersonalAreaHeader/>
            <div className="make-course-paid-page-container">
                <h2 className="make-course-paid-page-head">Сделать курс платным</h2>
                <p className="make-course-paid-page-subhead">Подключить оплату</p>
                <div className="make-course-paid-page-form-line">
                    <p className="make-course-paid-page-form-line-text">Стоимость в рублях</p>
                    <input type="number" className="make-course-paid-page-form-line-input"/>
                </div>
                <div className="make-course-paid-page-form-line">
                    <p className="make-course-paid-page-form-line-text">Заполнил&nbsp;
                        <NavLink className="make-course-paid-page-link">
                            реквизиты для подключения оплаты</NavLink></p>
                    <input type="checkbox" className="make-course-paid-page-form-line-input-check"/>
                </div>
                <div className="make-course-paid-page-form-line">
                    <p className="make-course-paid-page-form-line-text">Согласен с&nbsp;
                        <NavLink to="/profile/create_course/publication/make_paid/conditions"
                        className="make-course-paid-page-link">
                            условиями размещения платных курсов</NavLink></p>
                    <input type="checkbox" className="make-course-paid-page-form-line-input-check"/>
                </div>
                <button className="make-course-paid-page-button"
                        onClick={() => console.log("ok")}>Опубликовать</button>
            </div>
        </div>
    );
};

export default MakeCoursePaidPage;