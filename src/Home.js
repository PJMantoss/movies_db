import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from './searchComponents/Search';
import SearchResult from './searchComponents/SearchResult';

const Home = props => (
    <Switch>
        <Route exact path="/" component={Search}/>
        <Route path="/movies/:id" component={SearchResult}/>
    </Switch>
)

export default Home;