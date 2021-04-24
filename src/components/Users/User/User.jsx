import React from 'react';
import s from "../Users.module.css";
import userPhoto from "../../../assets/img/userPhoto.png"
import {NavLink} from "react-router-dom";
import Loader from "../../common/Loader/Loader";

export const User = props => {


    return (
        <div className={s.user}>
            <div className={s.userIcon}>
                <NavLink to={`/profile/${props.id}`}><img src={props.avatar || userPhoto} alt=""/></NavLink>
            </div>
            <div className={s.userName}>
                <p>{props.name}</p>
                <p>{props.status}</p>
            </div>
            <div className={s.userCountry}>{props.location?.country}, {props.location?.city}</div>
            <div className={s.userFollow}>
                {props.isFollowing.some(id => id===props.id) && <Loader/>}
                <button disabled={props.isFollowing.some(id => id===props.id)} onClick={()=>props.onFollowed(props.id, props.followed)}>{props.followed ? 'Отписаться' : 'Подписаться'}</button>
            </div>
        </div>
    );
};

