import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { History } from 'history';
import { ConnectedRouter, RouterState } from 'connected-react-router';
import Routes from './routes';

interface ApplicationState {
  router: RouterState;
}

interface MainProps {
    store: Store<ApplicationState>;
    history: History;
}

const App: React.FC<MainProps> = ({ store, history }) => {
    return (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Routes />
          </ConnectedRouter>
        </Provider>
    );
};

export default App;
