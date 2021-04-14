import React from 'react';
import logo from './logo.svg'

import s from './Header.module.css'

function Header(props) {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src={logo} alt="logo"/>
                <p>Company</p>
            </div>
        </header>
    );
}

export default Header;