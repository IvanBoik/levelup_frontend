import axios from "axios";

export default class UserService{
    static save(user){
        axios.post("http://localhost:8080/api/users/", user)
            .then(u => console.log(u));
    }
}