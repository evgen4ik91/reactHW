import React from 'react';
import './header.sass';

const Header = (props) => (
    <header className="header">
        <div className="container">
            <h1 className="header__title"><span>NETFLIX</span>roulette</h1>
            {props.children}
        </div>
    </header>
)

export default Header