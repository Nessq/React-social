import React from 'react';
import s from './Aside.module.css'
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";


function Aside(props) {
    return (
        <aside className={s.aside}>
            <ul>
                <li><NavLink to="/profile" activeClassName={s.active}>Профиль</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={s.active}>Сообщения</NavLink></li>
                <li><NavLink to="/news" activeClassName={s.active}>Новости</NavLink></li>
                <li><NavLink to="/music" activeClassName={s.active}>Музика</NavLink></li>
                <br/>
                <li><NavLink to="/users" activeClassName={s.active}>Пользователи</NavLink></li>
                <br/>
                <li><NavLink to="/settings" activeClassName={s.active}>Настройки</NavLink></li>
            </ul>

            <div className={s.friendList}>
                {
                    props.friendList
                        .map(friend =>
                            <Friend
                                key={friend.id}
                                id={friend.id}
                                name={friend.name}
                                avatar={friend.avatar}
                            />
                        )
                }
            </div>
        </aside>
    );
}

export default Aside;