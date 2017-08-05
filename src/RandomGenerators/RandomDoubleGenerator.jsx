import React from 'react';
import ValueLabel from './ValueLabel.jsx';

export default class RandomDoubleGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.generateRandom = this.generateRandom.bind(this);
  }

  generateRandom() {
    this.setState({ number: Math.random() });
  }

  render() {
    return (
      <div style={{ padding: '0.5em' }}>
        <h1>Random double</h1>
        <p>Generates a decimal number between 0 and 1.</p>
        <ValueLabel value={this.state.number} />
        <button onClick={this.generateRandom}>Generate new value</button>
      </div>
    );
  }
}
