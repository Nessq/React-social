import React from 'react';
import s from './Login.module.css'
import {NavLink, Redirect} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../../redux/reducer/auth.reducer";



const Login = (props) => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm();


    const onSubmit = ({login, password, rememberMe}) =>{
        dispatch(loginThunk(login,password, rememberMe))
    }


    if(isAuth) return <Redirect to={'/profile'}/>
    return (
        <div className={s.login}>
            <h1>Авторизация</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div><input placeholder={'Login'} type={'text'} {...register('login', {required : true})}/></div>
                <div><input placeholder={'password'} type={'password'} {...register('password', {required: true})}/></div>
                <div> <input type={'checkbox'} {...register('rememberMe')} /> remember me</div>
                <div><NavLink to={'/login'}>Забыли пароль?</NavLink></div>
                <div><button>войти</button></div>
            </form>
        </div>
    );
};

export default Login;