import React from 'react';
import ValueLabel from './ValueLabel.jsx';

export default class RandomIntegerGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.MIN_VALUE = 1;
    this.MAX_VALUE = 1000;
    this.state = {};
    this.generateRandom = this.generateRandom.bind(this);
  }

  generateRandom() {
    this.setState({ number: (Math.floor(Math.random() * ((this.MAX_VALUE - this.MIN_VALUE) + this.MIN_VALUE))) });
  }

  render() {
    return (
      <div style={{ padding: '0.5em' }}>
        <h1>Random integer</h1>
        <p>{`Generates an integer number between ${this.MIN_VALUE} and ${this.MAX_VALUE}.`}</p>
        <ValueLabel value={this.state.number} />
        <button onClick={this.generateRandom}>Generate new value</button>
      </div>
    );
  }
}
