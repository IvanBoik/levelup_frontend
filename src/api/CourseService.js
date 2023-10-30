import axios from "axios";
import * as all from "./index";

export default class CourseService {

    static async getCourseDraft(authorID) {
        const course = await axios.get(`http://localhost:8081/api/courses/course_draft/${authorID}`);
        return course.data;
    }

    static async getCoursePicture(courseID) {
        const res = await axios.get(`http://localhost:8081/api/courses/picture/${courseID}`, {
            responseType: "blob"
        });
        return res.data;
    }

    static async getLessonsDraft(courseID) {
        const lessons = await axios.get(`http://localhost:8081/api/courses/lessons_draft/${courseID}`);
        return lessons.data;
    }

    static async saveCourseDraft(course, picture) {
        const data = new FormData();
        data.append("course", new Blob([JSON.stringify(course)], {
            type: "application/json"
        }));
        data.append("picture", picture);
        await axios.post("http://localhost:8081/api/courses/course_draft_with_picture", data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }});
    }

    static async saveLessonDraft(lesson, file) {
        const data = new FormData();
        data.append("lesson", lesson);
        data.append("file", file);
        await axios.post("http://localhost:8081/api/courses/lesson_draft", data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }});
    }
}