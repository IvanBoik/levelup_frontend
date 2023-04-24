import React from "react";
import PopularArticle from "./PopularArticle";
import logo from "../images/article1logo.png";
import defaultLogo from "../images/default-article.png";

function PopularArticles() {
    return (
        <div className="popular-articles-container">
            <h2 className="popular-articles-head">Популярные статьи</h2>
            <div className="popular-articles-list">
                <PopularArticle title="“Горшечные растения”" author="lilPlant" img={logo}
                                descr="Научим вас разбираться в  растениях и украшать ими помещения."/>
                <PopularArticle title="“Как стать автором за 5 секунд”" author="Автор Авторович" img={defaultLogo}
                                descr="Я стал автором за 5 лет, а вас научу за 5 секунд."/>
                <PopularArticle title="“Как стать автором за 5 секунд”" author="Автор Авторович" img={defaultLogo}
                                descr="Я стал автором за 5 лет, а вас научу за 5 секунд."/>
                <PopularArticle title="“Как стать автором за 5 секунд”" author="Автор Авторович" img={defaultLogo}
                                descr="Я стал автором за 5 лет, а вас научу за 5 секунд."/>
            </div>
        </div>
    );
}

export default PopularArticles;