import React from 'react';
import PersonalAreaHeader from "./PersonalAreaHeader";
import DropDownMenu from "./DropDownMenu";
import arrow from "../images/dropdown-arrow.svg";
import CourseService from "../api/CourseService";


const CreateCoursePage = () => {
    const draft = CourseService.getCourseDraft(JSON.parse(localStorage.getItem("user")).id);

    const [imageUrl, setImageUrl] = React.useState(null);
    const topicList = ["IT", "Дизайн", "Здоровье и спорт", "Иностранные языки", "Кулинария", "Психология", "Кино и музыка", "Садоводство", "Животные", "Другое"];
    const difficultyList = ["Начальный", "Простой", "Средний", "Продвинутый", "Высокий"];
    const [topic, setTopic] = React.useState(null);
    const [difficulty, setDifficulty] = React.useState(null);
    const [topicIsOpen, setTopicIsOpen] = React.useState(false);
    const [difficultyIsOpen, setDifficultyIsOpen] = React.useState(false);
    const [picture, setPicture] = React.useState(null);
    const [title, setTitle] = React.useState(null);
    const [description, setDescription] = React.useState(null);
    let [id, setId] = React.useState(0);
    let [pictureID, setPictureID] = React.useState(0);

    React.useEffect(() => {
        draft.then(x => {
            let binaryString = window.atob(x.picture);
            let bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            let url = URL.createObjectURL(new Blob([bytes.buffer]));
            console.log(x)
            setImageUrl(url);
            setDescription(x ? x.description ? x.description : "" : "");
            setTitle(x ? x.title ? x.title : "" : "");
            setPicture(x ? (x.picture ? new Blob([x.picture]) : null) : null);
            setDifficulty(x ? x.difficulty ? x.difficulty : "Сложность" : "Сложность");
            setTopic(x ? x.topic ? x.topic : "Категории" : "Категории");
            setId(x.id);
            setPictureID(x.pictureID);
        });
    }, []);


    return (
        <div>
            <PersonalAreaHeader/>
            <div className="create-course-page-container">
                <h2 className="create-course-page-head">Создание нового курса</h2>
                <div className="create-course-page-drop-down-container">
                    <div className="create-course-page-drop-down-block">
                        <button className="create-course-page-drop-down-button"
                                onClick={() => setTopicIsOpen(true)}>
                            {topic} <img src={arrow} alt=""/>
                        </button>
                        {topicIsOpen &&
                            <DropDownMenu list={topicList} setIsOpen={setTopicIsOpen} setName={setTopic}/>}
                    </div>
                    <div className="create-course-page-drop-down-block">
                        <button className="create-course-page-drop-down-button"
                                onClick={() => setDifficultyIsOpen(true)}>
                            {difficulty} <img src={arrow} alt=""/>
                        </button>
                        {difficultyIsOpen && <DropDownMenu list={difficultyList} setIsOpen={setDifficultyIsOpen}
                                                           setName={setDifficulty}/>}
                    </div>
                </div>
                <p className="create-course-page-course-name-string">Название курса *</p>
                <input type="text" className="create-course-page-course-name-input" value={title}
                       onChange={e => setTitle(e.target.value)}/>
                <p className="create-course-page-course-name-characters-maximum">Максимум 64 символа</p>
                <label htmlFor="avatar-input-for-create-course-page" className="create-course-page-avatar-input-label">
                    + Файл обложки
                </label>
                <input type="file" id="avatar-input-for-create-course-page" className="create-course-page-avatar-input"
                       accept="image/png, image/jpeg" onChange={(e) => {
                    const file = e.target.files[0];
                    console.log(file);
                    if (file) {
                        setPicture(file);
                        setImageUrl(URL.createObjectURL(file));
                    }
                }}/>
                {imageUrl && <img src={imageUrl} alt="" className="create-course-page-avatar-preview" style={{marginTop: 8}}
                      onClick={() => setPicture(null)}/>}
                <textarea name="description" cols="30" rows="10" className="create-course-page-description-input"
                          placeholder="Добавьте описание курса" value={description}
                          onChange={e => setDescription(e.target.value)}/>
                <button className="create-course-page-nav-link"
                        onClick={async () => {
                            const course = {
                                id: id,
                                title: title,
                                description: description,
                                topic: topic,
                                difficulty: difficulty,
                                authorID: JSON.parse(localStorage.getItem("user")).id,
                                price: 0,
                                pictureID: pictureID //draft ? draft.pictureID ? draft.pictureID : 0 : 0
                            };
                            console.log(course)
                            await CourseService.saveCourseDraft(course, picture);
                        }}>Сохранить
                </button>
            </div>
        </div>
    );
};

export default CreateCoursePage;