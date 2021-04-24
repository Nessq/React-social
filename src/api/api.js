import axios from "axios";
import {API_KEY, API_URL_BASE} from "../constans/API";

const socialNetwork = axios.create({
    withCredentials: true,
    baseURL: API_URL_BASE,
    headers : {
        "API-KEY" : API_KEY,
    }
})


export class API{

    static getUsers = (currentPage, pageSize) => socialNetwork.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data);

    static setFollowed = userId => socialNetwork.post(`follow/${userId}`).then(res => res.data);

    static deleteFollowed = userId => socialNetwork.delete(`follow/${userId}`).then(res => res.data);

    static getAuthMe = () => socialNetwork.get('auth/me',).then(res => res.data);

    static getProfile = (userId) => socialNetwork.get(`profile/${userId}`).then(res => res.data);

    static getProfileStatus = (userId) => socialNetwork.get(`profile/status/${userId}`).then(res => res.data);

    static setProfileStatus = (textStatus) => socialNetwork.put(`profile/status/`, {status : textStatus}).then(res => res.data);

    static login = (email, password, rememberMe = false) => socialNetwork.post(`auth/login/`, {email, password, rememberMe})

    static logout = () => socialNetwork.delete(`auth/login/`)

}