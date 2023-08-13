// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './layout';
import AboutPage from './AboutPage';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={AboutPage} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
