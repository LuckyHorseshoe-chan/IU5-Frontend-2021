import React from 'react';
import { Route, Switch } from 'react-router-dom';

import  Search  from './components/Search'
import  Home  from './components/Home';


const Routes: React.FC = () => (
    <div>
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
                render={() => (
                    <Search />
                )}
            />
        </Switch>
    </div>
);

export default Routes;