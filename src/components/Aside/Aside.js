import React from 'react';
import s from './Aside.module.css'

function Aside(props) {
    return (
        <aside className={s.aside}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">News</a></li>
                <li><a href="/">Portfolio</a></li>
                <li><a href="/">About</a></li>
            </ul>
        </aside>
    );
}

export default Aside;