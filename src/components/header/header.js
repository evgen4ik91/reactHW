import React from 'react';
import { Link } from 'react-router-dom';
import './header.sass';

const Header = (props) => (
    <header className="header">
        <div className="container">
            <div className="header__top">
                <Link to="/" className="header__title"><span>NETFLIX</span>roulette</Link>
            </div>
            {props.children}
        </div>
    </header>
)

export default Header