import React from 'react';
import s from './Main.module.css';

function Main(props) {
    return (
        <main className={s.main}>
            <div className={s.banner}>
                <img src="https://saskatoonfood.ca/images/headers/1000x200-StoonDusk.jpg" alt=""/>
            </div>
            <div className={s.content}>
                <p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quisquam, illo nam mollitia consequuntur obcaecati! Odit a, quaerat, itaque voluptates quae architecto error veniam suscipit vitae, non eligendi? Natus, odio dolor vitae deserunt iste consequuntur? Possimus iste dignissimos sequi vel quisquam nihil quidem distinctio nisi eaque qui, in impedit similique!</p>
                <div className={s.date}>10.02.2020</div>
                <div className={s.author}>Max</div>
            </div>
        </main>
    );
}

export default Main;