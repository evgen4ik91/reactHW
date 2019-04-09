import React from 'react';
import "./styles/styles.sass";
import CONST from './constants';
import { ErrorBoundary } from './components/error-boundary/error-boundary'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { SearchPanel } from './components/search-panel/search-panel'
import MoviesList from './components/movies-list/movies-list'
import InfoText from './components/info-text/info-text'
import Sorting from './components/sorting/sorting'

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
                <MoviesList>
                    <InfoText text={CONST.moviesList.length} searchByGenre={false}/>
                    <Sorting/>
                </MoviesList>
                <Footer/>
            </ErrorBoundary>
        );
    }
};