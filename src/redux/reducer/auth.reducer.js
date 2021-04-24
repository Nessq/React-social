import {API} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA'


const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}


export const authReducer = (state = initialState,action) =>{
    switch (action.type){

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}


export const setUserData = (id, login, email, isAuth) => ({type : SET_USER_DATA, payload : {id, login, email, isAuth} })

export const getAuthMe = () => (dispatch) => API.getAuthMe().then(data=>data.resultCode || dispatch(setUserData(data.data.id, data.data.login, data.data.email, true)))

export const loginThunk = (email, password, rememberMe) => (dispatch) =>{
    API.login(email, password, rememberMe).then(data => {
        if(data.resultCode) return
        dispatch(getAuthMe())
    })
}

export const logoutThunk = () => (dispatch) =>{
    API.logout().then(data => {
        if(data.resultCode) return
        dispatch(setUserData(null, null, null, false))
    })
}