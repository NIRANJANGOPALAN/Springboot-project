import axios from 'axios'

const URL = 'http://localhost:8080/api/users';
 class UserService{
     getUsers(){
        return axios.get(URL)
     }
 }
 export default new UserService();