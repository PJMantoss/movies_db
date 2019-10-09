import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = props => (
    <Switch>
        <Route exact path="/" component={Search}/>
        <Route path="/movies/:id" component={SearchResult}/>
    </Switch>
)