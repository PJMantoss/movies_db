import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieHome from './movieComponents/MovieHome';
import SearchResult from './searchComponents/SearchResult';
import MovieInfo from './movieComponents/MovieInfo';

const Home = props => (
    <Switch>
        <Route exact path="/" component={MovieHome}/>
        <Route path="/movies/:id" component={SearchResult}/>
        <Route path="/movieinfo/:id" component={MovieInfo}/>
    </Switch>
);

export default Home;