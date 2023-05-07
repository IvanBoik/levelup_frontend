import './styles/App.css';
import Body from "./components/Body";
import {Route, Routes} from "react-router-dom";
import NotFound from "./components/NotFound";
import CoursePage from "./components/CoursePage";
import AllCoursesPage from "./components/AllCoursesPage";
import AllArticlesPage from "./components/AllArticlesPage";
import LessonPage from "./components/LessonPage";
import PersonalAreaPage from "./components/PersonalAreaPage";
import CreateCoursePage from "./components/CreateCoursePage";
import CourseProgramPage from "./components/CourseProgramPage";
import AddNewLessonPage from "./components/AddNewLessonPage";
import AuthorisationPage from "./components/AuthorisationPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Body/>}/>
            <Route path="/courses" element={<AllCoursesPage/>}/>
            <Route path="/articles" element={<AllArticlesPage/>}/>
            <Route path="/login" element={<AuthorisationPage/>}/>
            <Route path="/profile" element={<PersonalAreaPage/>}/>
            <Route path="/courses/1" element={<CoursePage/>}/>
            <Route path="/courses/1/lessons" element={<LessonPage/>}/>
            <Route path="profile/create_course" element={<CreateCoursePage/>}/>
            <Route path="/profile/course_program" element={<CourseProgramPage/>}/>
            <Route path="/profile/course_program/add_lesson" element={<AddNewLessonPage/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;
