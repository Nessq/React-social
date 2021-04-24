// noinspection JSUnresolvedVariable

import {API} from "../../api/api";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_TEXT_POST = 'UPDATE_NEW_TEXT_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const RESET_PROFILE = 'RESET_PROFILE'
const GET_PROFILE_STATUS = 'GET_PROFILE_STATUS'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'


const initialState = {
    newTextPost: '',
    posts: [
        {
            id: 1,
            text: `I'm Fuuny sanday today, add my posts WOW!!!`,
            img: `https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg`,
            date: `14.04.2021, 17:03:48`,
            likeCount: `20`,
        },
        {
            id: 2,
            text: `I'm Fuuny sanday today, add my posts WOW!!!`,
            img: `https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png`,
            date: `11.05.2022, 11:03:48`,
            likeCount: `10`,
        },

    ],
    profile: null,
    status: '',
}

export const profileReducer = (state = initialState, action) =>{

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                text: action.payload,
                img: `https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg`,
                date: new Date().toLocaleString(),
                likeCount: 0
            }
            return {...state, posts: [...state.posts, newPost]}

        case UPDATE_NEW_TEXT_POST:
            return {...state, newTextPost: action.newTextPost}

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case RESET_PROFILE:
            return {...state, profile: null}

        case GET_PROFILE_STATUS:
            return {...state, status: action.status}
        case SET_PROFILE_STATUS:
            return {...state, status: action.status}
        default:
            return state
        }



}

export const addPostActionCreate = (textPost) => ({type: ADD_POST, payload : textPost})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const resetProfile = () => ({type: RESET_PROFILE})
export const getProfileStatusAction = (status) => ({type: GET_PROFILE_STATUS, status})
export const setProfileStatusAction = (status) => ({type: SET_PROFILE_STATUS, status})

export const getProfile = (userId) => (dispatch) =>{
    dispatch(resetProfile())
    dispatch(getProfileStatus(userId))
    API.getProfile(userId).then(data =>{
        dispatch(setUserProfile(data))
    })
}


export const getProfileStatus = (userId) => (dispatch) =>{
    API.getProfileStatus(userId).then(data => dispatch(getProfileStatusAction(data)))
}

export const setProfileStatus = (textStatus) => (dispatch) =>{
    API.setProfileStatus(textStatus).then(data =>{
        dispatch(setProfileStatusAction(textStatus))
    })
}