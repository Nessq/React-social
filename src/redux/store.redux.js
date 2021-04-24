import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./reducer/profile.reducer";
import {sidebarReducer} from "./reducer/sidebar.reducer";
import {dialogsReducer} from "./reducer/dialogs.reducer";
import {usersReducer} from "./reducer/users.reducer";
import {authReducer} from "./reducer/auth.reducer";
import thunk from "redux-thunk";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth : authReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))



export default store