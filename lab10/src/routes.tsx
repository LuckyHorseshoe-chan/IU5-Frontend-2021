import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';

import  Search  from './components/Search'
import  Home  from './components/Home';


const Routes: React.FC = () => (
    <div>
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <Home />
                    )}
                />
                <Route
                    path="/search"
                    component={Search}
                />
            </Switch>
        </Router>
    </div>
);

export default Routes;