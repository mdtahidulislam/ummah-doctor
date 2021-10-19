import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import Services from '../Services/Services';
import Notfound from '../Notfound/Notfound';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import AuthProvider from '../../Context/AuthProvider';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const Header = () => {
    return (
        <div className="header-area">
            <AuthProvider>
                <Router>
                    <Menu></Menu>
                    <Switch>
                        <Route exact path='/'>
                            <Home></Home>
                        </Route>
                        <Route exact path='/home'>
                            <Home></Home>
                        </Route>
                        <Route exact path='/services'>
                            <Services></Services>
                        </Route>
                        <PrivateRoute path='/services/:id'>
                            <ServiceDetail></ServiceDetail>
                        </PrivateRoute>
                        <Route path='/register'>
                            <Register></Register>
                        </Route>
                        <Route path='/login'>
                            <Login></Login>
                        </Route>
                        <Route path='*'>
                            <Notfound></Notfound>
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
};

export default Header;