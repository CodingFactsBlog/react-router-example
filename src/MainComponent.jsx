import React from 'react';
import RandomDoubleGenerator from './RandomGenerators/RandomDoubleGenerator.jsx';
import RandomIntegerGenerator from './RandomGenerators/RandomIntegerGenerator.jsx';
import RandomCharacterGenerator from './RandomGenerators/RandomCharacterGenerator.jsx';

export default class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Random Generator</h1>
        <RandomDoubleGenerator />
        <RandomIntegerGenerator />
        <RandomCharacterGenerator />
      </div>
    );
  }
}
