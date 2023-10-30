import React from 'react';
import PersonalAreaHeader from "./PersonalAreaHeader";
import {NavLink} from "react-router-dom";

const FinConditionsPage = () => {
    return (
        <div>
            <PersonalAreaHeader/>
            <div className="fin-conditions-page-container">
                <h2 className="fin-conditions-page-head">Финансовые условия</h2>
                <p className="fin-conditions-page-text">
                    Особенность платных курсов в том, что вы размещаете курсы без оплаты тарифа или подписки, а Level Up получает комиссию только с совершенных платежей.
                </p>
                <h3 className="fin-conditions-page-subhead">
                    Комиссия Level Up
                </h3>
                <p className="fin-conditions-page-text">
                    При размещении курса на площадке Level Up (размещение курса в каталоге, топе, в поисковой выдаче), Level Up берет базовую комиссию 20% от продаж, 80% перечисляет автору.
                </p>
                <h3 className="fin-conditions-page-subhead">
                    Отчеты по продажам и выплаты
                </h3>
                <p className="fin-conditions-page-text">
                    Level Up будет перечислять вашу часть с продаж и высылать вам отчеты о покупках в течение 10 (десяти) рабочих дней с даты окончания отчетного периода. Отчетный период составляет 1 месяц, что означает, к примеру, что вы получите отчет по продажам и платеж за март в начале апреля.
                </p>
                <h3 className="fin-conditions-page-subhead">
                    Налоги
                </h3>
                <p className="fin-conditions-page-text">
                    Level Up не берёт на себя налоговые обязательства по платным курсам. После того как вы получили от нас отчет по платежам, сумму продаж, вам нужно самостоятельно оплатить налоги, исходя из вашего налогового статуса и законодательства страны, чьим резидентом вы являетесь.
                </p>
                <NavLink to="/profile/create_course/publication/make_paid" className="fin-conditions-page-button">Назад</NavLink>
            </div>
        </div>
    );
};

export default FinConditionsPage;