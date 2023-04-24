
function PopularArticle(props) {
    return (
        <div className="popular-article-item">
            <h3 className="popular-article-title">{props.title}</h3>
            <div className="popular-course-content">
                <img src={props.img} className="popular-article-img"/>
                <div className="popular-article-text-block">
                    <p className="popular-article-descr">{props.descr}</p>
                    <p className="popular-article-author">Автор: {props.author}</p>
                    <button className="go-to-article">Читать статью</button>
                </div>
            </div>
        </div>
    );
}

export default PopularArticle;