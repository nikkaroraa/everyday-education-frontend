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
import AddLearning from './components/AddLearning';
import GetLearnings from './components/GetLearnings';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={routes.Home} component={Home} />
          <Route exact path={routes.Status} component={Status} />
          <Route exact path={routes.AddLearning} component={AddLearning} />
          <Route exact path={routes.GetLearnings} component={GetLearnings} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
