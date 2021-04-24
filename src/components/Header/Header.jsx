import React from 'react';
import logo from './logo.svg'

import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logoutThunk} from "../../redux/reducer/auth.reducer";

function Header(props) {

    const dispatch = useDispatch()

    const handleLogout = () =>{
        dispatch(logoutThunk())
    }

    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src={logo} alt="logo"/>
                <p>Company</p>
            </div>

            <div className={s.loginBlock}>

                {
                    props.isAuth
                        ? <div><span>{props.login}</span> | <span onClick={handleLogout} style={{cursor: "pointer"}}>Exit</span></div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    );
}

export default Header;