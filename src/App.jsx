import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import MainComponent from './MainComponent.jsx';
import RandomDoubleGenerator from './RandomGenerators/RandomDoubleGenerator.jsx';
import RandomIntegerGenerator from './RandomGenerators/RandomIntegerGenerator.jsx';
import RandomCharacterGenerator from './RandomGenerators/RandomCharacterGenerator.jsx';
import { AboutComponent, EchoComponent } from './SingleComponents.jsx';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={MainComponent} />
      <Route exact path="/random/double" component={RandomDoubleGenerator} />
      <Route exact path="/random/integer" component={RandomIntegerGenerator} />
      <Route exact path="/random/character" component={RandomCharacterGenerator} />
      <Route exact path="/echo/:value" render={EchoComponent} />
      <Route exact path="/about" render={AboutComponent} />
    </div>
  </Router>,
  document.getElementById('app'),
);
