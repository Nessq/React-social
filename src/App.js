import './App.css';
import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import AsideContainer from "./components/Aside/AsideContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {useSelector} from "react-redux";


const App = (props) => {

    const isLogin = useSelector(state => state.auth.isAuth)

    console.log(isLogin)

    return (

        <div className="app">
            <HeaderContainer/>
            <AsideContainer />
            <main>
                {!isLogin ? <Redirect to={'/login'}/> : ''}
                <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </main>
        </div>

    )
}

export default App;
