import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export const Dialog = (props) => {

    return(
        <div className={s.dialog}>
            <NavLink to={'/dialogs/'+props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

