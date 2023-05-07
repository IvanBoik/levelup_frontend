import React from 'react';
import PersonalAreaHeader from "./PersonalAreaHeader";
import defAva from "../images/default-avatar.png";
import star from "../images/star.svg";

const balance = 3.021;
const name = "Иван";
const surname = "Бойко";
const avatar = defAva;
const phone = "+7 (962) 621-16-78";
const email = "boiko12332@gmail.com";

const PersonalAreaPage = () => {
    const [passwordState, setPasswordState] = React.useState(
        <div className="personal-area-page-password-block">
            <h2 className="personal-area-page-change-password-head">Смена пароля</h2>
            <p className="personal-area-page-your-password-string">Ваш пароль:</p>
            <div className="personal-area-page-hidden-password">
                <img src={star} alt="" className="personal-area-page-password-star"/>
                <img src={star} alt="" className="personal-area-page-password-star"/>
                <img src={star} alt="" className="personal-area-page-password-star"/>
                <img src={star} alt="" className="personal-area-page-password-star"/>
                <img src={star} alt="" className="personal-area-page-password-star"/>
                <img src={star} alt="" className="personal-area-page-password-star"/>
                <img src={star} alt="" className="personal-area-page-password-star"/>
                <img src={star} alt="" className="personal-area-page-password-star"/>
            </div>
            <button className="personal-area-page-change-password"
                    onClick={() => setPasswordState(changePasswordBlock)}>Изменить</button>
        </div>
    );

    const changePasswordBlock = (
        <div className="personal-area-page-password-block">
            <h2 className="personal-area-page-change-password-head">Смена пароля</h2>
            <input type="text" className="personal-area-page-password-input"
            placeholder="введите старый пароль"/>
            <input type="text" className="personal-area-page-password-input"
            placeholder="введите новый пароль"/>
            <button className="personal-area-page-change-password"
            onClick={() => setPasswordState(
                <div className="personal-area-page-password-block">
                <h2 className="personal-area-page-change-password-head">Смена пароля</h2>
                <p className="personal-area-page-your-password-string">Ваш пароль:</p>
                <div className="personal-area-page-hidden-password">
                    <img src={star} alt="" className="personal-area-page-password-star"/>
                    <img src={star} alt="" className="personal-area-page-password-star"/>
                    <img src={star} alt="" className="personal-area-page-password-star"/>
                    <img src={star} alt="" className="personal-area-page-password-star"/>
                    <img src={star} alt="" className="personal-area-page-password-star"/>
                    <img src={star} alt="" className="personal-area-page-password-star"/>
                    <img src={star} alt="" className="personal-area-page-password-star"/>
                    <img src={star} alt="" className="personal-area-page-password-star"/>
                </div>
                <button className="personal-area-page-change-password" onClick={() => setPasswordState(changePasswordBlock)}>Изменить</button>
            </div>
            )}>Сохранить</button>
        </div>
    );

    const [userDataState, setUserDataState] = React.useState(
        <div className="personal-area-page-bottom-block">
            <div className="personal-area-page-user-data">
                <p className="personal-area-page-name">{name}</p>
                <p className="personal-area-page-surname">{surname}</p>
                <img src={avatar} alt="" className="personal-area-page-avatar"/>
            </div>
            <div className="personal-area-page-personal-data">
                <h3 className="personal-area-page-personal-data-head">Личные данные</h3>
                <p className="personal-area-page-phone">{phone}</p>
                <p className="personal-area-page-email">{email}</p>
                <button className="personal-area-page-change-data"
                onClick={() => setUserDataState(changeUserDataBlock)}>Изменить</button>
            </div>
        </div>
    );

    const changeUserDataBlock = (
        <div className="personal-area-page-bottom-block">
            <div className="personal-area-page-user-data">
                <input type="text" className="personal-area-page-user-data-input"
                placeholder="введите имя"/>
                <input type="text" className="personal-area-page-user-data-input"
                placeholder="введите фамилию"/>
                <label htmlFor="avatar-input" className="personal-area-page-avatar-input-label">
                    <img src={avatar} alt="" className="personal-area-page-avatar"/>
                </label>
                <input type="file" className="personal-area-page-avatar-input" id="avatar-input"
                       accept="image/png, image/jpeg"/>
            </div>
            <div className="personal-area-page-personal-data">
                <h3 className="personal-area-page-personal-data-head">Личные данные</h3>
                <input type="text" className="personal-area-page-user-data-input" id="id-user-phone-input"
                       placeholder="введите телефон"/>
                <input type="text" className="personal-area-page-user-data-input"
                       placeholder="введите e-mail"/>
                <button className="personal-area-page-change-data"
                        onClick={() => setUserDataState(
                            <div className="personal-area-page-bottom-block">
                                <div className="personal-area-page-user-data">
                                    <p className="personal-area-page-name">{name}</p>
                                    <p className="personal-area-page-surname">{surname}</p>
                                    <img src={avatar} alt="" className="personal-area-page-avatar"/>
                                </div>
                                <div className="personal-area-page-personal-data">
                                    <h3 className="personal-area-page-personal-data-head">Личные данные</h3>
                                    <p className="personal-area-page-phone">{phone}</p>
                                    <p className="personal-area-page-email">{email}</p>
                                    <button className="personal-area-page-change-data"
                                            onClick={() => setUserDataState(changeUserDataBlock)}>Изменить</button>
                                </div>
                            </div>
                        )}>Изменить</button>
            </div>
        </div>
    );

    return (
        <div className="personal-area-page">
            <PersonalAreaHeader/>
            <div className="personal-area-page-right-container">
                <div className="personal-area-page-upper-block">
                    <div className="personal-area-page-balance-block">
                        <h2 className="personal-area-page-balance-head">Баланс</h2>
                        <p className="personal-area-page-balance">{balance} ₽</p>
                        <button className="personal-area-page-details">Подробности</button>
                    </div>
                    {passwordState}
                </div>
                {userDataState}
            </div>
        </div>
    );
};

export default PersonalAreaPage;