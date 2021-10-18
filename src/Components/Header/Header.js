import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from '../Menu/Menu';

const Header = () => {
    return (
        <div className="header">
            <Router>
                <Menu></Menu>
                <Switch>
                    <Route>

                    </Route>
                </Switch>
            </Router>

        </div>
    );
};

export default Header;