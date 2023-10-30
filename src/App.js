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
import {CourseContext} from "./context";
import React from "react";
import CoursePublicationPage from "./components/CoursePublicationPage";
import MakeCoursePaidPage from "./components/MakeCoursePaidPage";
import FinConditionsPage from "./components/FinConditionsPage";

function App() {
    const [ctxCourse, setCtxCourse] = React.useState({
        author: "",
        avatar: "",
        title: "",
        description: "",
        price: "",
        dateOfCreate: "",
        difficulty: "",
        topic: ""
    });
    const [ctxLesson, setCtxLesson] = React.useState({
        title: "",
        file: "",
        duration: "",
        introduction: "",
        description: "",
        homework: {
            homeworkType: "",
            freeAnswer: "",
            questions: [{
                text: "",
                type: "radio",
                answers: [{
                    text: "",
                    isRight: true
                }]
            }]
        }
    });

  return (
      <CourseContext.Provider value={{
          ctxCourse,
          setCtxCourse,
          ctxLesson,
          setCtxLesson
      }}>
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
                  <Route path="/profile/create_course/content" element={<CourseProgramPage/>}/>
                  <Route path="/profile/create_course/content/create_lesson" element={<AddNewLessonPage/>}/>
                  <Route path="/profile/create_course/publication" element={<CoursePublicationPage/>}/>
                  <Route path="/profile/create_course/publication/make_paid" element={<MakeCoursePaidPage/>}/>
                  <Route path="/profile/create_course/publication/make_paid/conditions" element={<FinConditionsPage/>}/>
                  <Route path="*" element={<NotFound/>}/>
              </Routes>
          </div>
      </CourseContext.Provider>
  );
}

export default App;
