import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import Services from '../Services/Services';
import Notfound from '../Notfound/Notfound';

const Header = () => {
    return (
        <div className="header">
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
                    <Route path='*'>
                        <Notfound></Notfound>
                    </Route>
                </Switch>
            </Router>

        </div>
    );
};

export default Header;