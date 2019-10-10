import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieHome from './movieComponents/MovieHome';
import SearchResult from './searchComponents/SearchResult';

const Home = props => (
    <Switch>
        <Route exact path="/" component={MovieHome}/>
        <Route path="/movies/:id" component={SearchResult}/>
    </Switch>
);

export default Home;