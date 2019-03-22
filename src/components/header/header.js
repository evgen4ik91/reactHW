import React from 'react';
import './header.sass';

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return  (<header className="header">
                    <div className="container">
                        <h1 className="header__title"><span>NETFLIX</span>roulette</h1>
                        {this.props.children}
                    </div>
              </header>)
    }
}