
function Footer() {
    return (
        <div className="footer-container">
            <h2 className="contact-head">Контакты : </h2>
            <div className="contact-block">
                <p>+7 (962) 621-16-78</p>
                <p className="contact-text">Контактный центр</p>
            </div>
            <div className="contact-block">
                <p>+7 (987) 339-36-19</p>
                <p className="contact-text">Отдел заботы о пользователях</p>
            </div>
            <p className="contact-block">levUp@gmail.com</p>
            <p className="text-for-offers-and-questions">Есть вопрос или предложение? Напишите  <a href="https://vk.com/id358041525" className="owner-vk">Ивану Бойко</a>
                — ответственному за качество курсов</p>
        </div>
    );
}

export default Footer;