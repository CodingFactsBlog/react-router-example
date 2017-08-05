import React from 'react';
import RandomGenerator from './RandomGenerator.jsx';

export default class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Random Generator</h1>
        <RandomGenerator />
        <RandomGenerator />
        <RandomGenerator />
      </div>
    );
  }
}
