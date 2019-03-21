import React from 'react';
import { ErrorBoundary } from './components/error-boundary/error-boundary'
import { Header } from './components/header/header'
import { Footer } from './components/footer/footer'
import { SearchPanel } from './components/search-panel/search-panel'

import "./styles/styles.sass";

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ErrorBoundary>
                <Header>
                    <SearchPanel/>
                </Header>
                <Footer/>
            </ErrorBoundary>
        );
    }
};