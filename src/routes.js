import React, { useContext }from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
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
import ChangePasswordPage from './pages/ChangePasswordPage';
import StoreContext from './Store/Context';
import NotFound from './pages/NotFound';

const PrivateRoute = ({ component: Component, ...rest}) => {
    const {token} = useContext(StoreContext);

    return (

        <Route {...rest} render={(props)=> 
            token ? 
            <Component {...props}/> 
            : <Redirect to={{ pathname:"/login", state: { from: props.location } }}/>
        }>
        </Route>
    );
}

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/login" component={LoginPage}></Route>
                <Route path="/signup" component={SignUpPage}></Route>
                <Route path="/password/forgot" component={PasswordResetPage}></Route>
                <Route path="/password/update" component={ChangePasswordPage}></Route>
                <Route path="/password/code/insert" component={CodeRecoverPage}></Route>
                <Route path="/search" component={SearchPage}></Route>
                <Route path="/product/details" component={ProductDetailsPage}></Route>
                <Route path="/announcements" component={AnnouncementsPage}></Route>
                <PrivateRoute path="/product/add" component={CreateProductPage}></PrivateRoute>
                <PrivateRoute path="/users/profile" component={ProfilePage}></PrivateRoute>
                <PrivateRoute path="/users/security" component={SecurityPage}></PrivateRoute>

                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}