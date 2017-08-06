import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import MainComponent from './MainComponent.jsx';
import RandomGenerator from './RandomGenerator.jsx';
import { AboutComponent, EchoComponent } from './SingleComponents.jsx';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={MainComponent} />
      <Route exact path="/random/:type" component={RandomGenerator} />
      <Route exact path="/echo/:value" render={EchoComponent} />
      <Route exact path="/about" render={AboutComponent} />
    </div>
  </Router>,
  document.getElementById('app'),
);
