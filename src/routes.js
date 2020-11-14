import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import SignUpPage from './pages/signUpPage'
import PasswordResetPage from './pages/passwordResetPage'
import CodeRecoverPage from './pages/codeRecoverPage'
import SearchPage from './pages/searchPage';
import CreateProductPage from './pages/createProductPage';
import ProductDetailsPage from './pages/productDetailsPage';
import AnnouncementsPage from './pages/announcementsPage';
import ProfilePage from './pages/ProfilePage';
import SecurityPage from './pages/Security&PrivacyPage';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/login" component={LoginPage}></Route>
                <Route path="/signup" component={SignUpPage}></Route>
                <Route path="/password/forgot" component={PasswordResetPage}></Route>
                <Route path="/password/code/insert" component={CodeRecoverPage}></Route>
                <Route path="/search" component={SearchPage}></Route>
                <Route path="/product/add" component={CreateProductPage}></Route>
                <Route path="/product/details" component={ProductDetailsPage}></Route>
                <Route path="/announcements" component={AnnouncementsPage}></Route>
                <Route path="/users/profile" component={ProfilePage}></Route>
                <Route path="/users/security" component={SecurityPage}></Route>
            </Switch>
        </BrowserRouter>
    );
}