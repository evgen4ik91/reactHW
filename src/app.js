import React from 'react';
import { Comp } from './components/component/component';
import { Pure } from './components/pure/pure';
import Func from './components/functional/functional';

import "./styles/styles.sass";

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="container fluid">
          <div className="row">
            <div className="col">
                <Comp/>
            </div>
            <div className="col">
                <Pure/>
            </div>
            <div className="col">
                {React.createElement('h4', null, 'Hello, Create El')}
            </div>
            <div className="col">
                <Func/>
            </div>
          </div>
        </div>
        );
    }
};