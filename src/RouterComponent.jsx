import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MainComponent from './MainComponent.jsx';
import RandomGenerator from './RandomGenerator.jsx';
import { AboutComponent, EchoComponent, NotFound } from './SingleComponents.jsx';

export default class RouterComponent extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainComponent} />
          <Route exact path="/random/:type" component={RandomGenerator} />
          <Route exact path="/echo/:value" render={EchoComponent} />
          <Route exact path="/about" render={AboutComponent} />
          <Route render={NotFound} />
        </Switch>
      </Router>
    );
  }
}
