import {API} from "../../api/api";

const FOLLOWED = 'FOLLOWED'
const SET_USERS = 'SET_USERS'
const CURRENT_PAGE = 'CURRENT_PAGE'
const TOTAL_USER_COUNT = 'TOTAL_USER_COUNT'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING'

const initialState = {
    isFollowing : [],
    isFetching : false,
    currentPage: 1,
    pageSize: 10,
    totalUserCount: 0,
    users: []
}

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOWED:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: !user.followed} : user)
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users,

            }
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.count
            }
        case TOTAL_USER_COUNT:
            return {
                ...state,
                totalUserCount: action.count
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING:
            return {
                ...state,
                isFollowing: action.isFollowing ? [...state.isFollowing, action.userId] : state.isFollowing.filter(userId => userId !== action.userId)
            }
        default:
            return state
    }


}

export const setFollowed = (userId) => ({type: FOLLOWED, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (count) => ({type: CURRENT_PAGE, count})
export const setUsersCount = (count) => ({type: TOTAL_USER_COUNT, count})
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})
export const toggleFollowing = (isFollowing, userId) => ({type: TOGGLE_FOLLOWING, isFollowing, userId})


export const getUsers = (currentPage, pageSize) => (dispatch) =>{
    dispatch(toggleFetching(true))
    API.getUsers(currentPage, pageSize)
        .then((data) => {
            dispatch(setCurrentPage(currentPage))
            dispatch(setUsersCount(data.totalCount))
            dispatch(setUsers(data.items))
            dispatch(toggleFetching(false))
        })
}

export const followed = (userId, isFollowed) => (dispatch) => {
    dispatch(toggleFollowing(true, userId))
    if (!isFollowed) {
        API.setFollowed(userId).then((data) => {
            !data.resultCode && dispatch(setFollowed(userId))
            dispatch(toggleFollowing(false, userId))
        })
    }

    else if (isFollowed) {
        API.deleteFollowed(userId).then((data) => {
            !data.resultCode && dispatch(setFollowed(userId))
            dispatch(toggleFollowing(false, userId))

        })
    }
}