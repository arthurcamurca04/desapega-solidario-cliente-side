import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from './pages/login';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={LoginPage}></Route>
            </Switch>
        </BrowserRouter>
    );
}