import './styles/App.css';
import Body from "./components/Body";
import {Route, Routes} from "react-router-dom";
import NotFound from "./components/NotFound";
import CoursePage from "./components/CoursePage";
import AllCoursesPage from "./components/AllCoursesPage";
import AllArticlesPage from "./components/AllArticlesPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Body/>}/>
            <Route path="/courses" element={<AllCoursesPage/>}/>
            <Route path="/articles" element={<AllArticlesPage/>}/>
            <Route path="/profile" element={<NotFound/>}/>
            <Route path="/courses/1" element={<CoursePage/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;
