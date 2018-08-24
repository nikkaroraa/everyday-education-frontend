import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import routes from './config/routes';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Status from './components/Status';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={routes.Home} component={Home} />
          <Route exact path={routes.Status} component={Status} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
