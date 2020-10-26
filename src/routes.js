import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './pages/homePage';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
            </Switch>
        </BrowserRouter>
    );
}