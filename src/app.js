import React from 'react';
import { Switch, Route } from 'react-router-dom';
import "./styles/styles.sass";
import { ErrorBoundary } from './components/error-boundary/error-boundary';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import SearchPanel from './components/search-panel/search-panel';
import MoviesList from './components/movies-list/movies-list';
import MovieDetails from './components/movie-details/movie-details';
import InfoText from './components/info-text/info-text';
import Sorting from './components/sorting/sorting';
import Page404 from './components/page404/page404';

const searchRoutes = ['/', '/search/:req?'];

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ErrorBoundary>
                <Header>
                    <Switch>
                        <Route exact path={searchRoutes} component={SearchPanel}/>
                        <Route path='/movies/:id' component={MovieDetails}/>
                        <Route exact path='*' component={Page404}/>
                    </Switch>
                </Header>
                <MoviesList>
                    <InfoText/>
                    <Route exact path={searchRoutes} component={Sorting}/>
                </MoviesList>
                <Footer/>
            </ErrorBoundary>
        );
    }
};