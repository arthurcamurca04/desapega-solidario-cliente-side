import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import SignUpPage from './pages/signUpPage'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/login" component={LoginPage}></Route>
                <Route path="/signup" component={SignUpPage}></Route>
            </Switch>
        </BrowserRouter>
    );
}