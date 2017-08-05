import React from 'react';
import NumberLabel from './NumberLabel.jsx';

export default class RandomGenerator extends React.Component {
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
      <div style={{ border: '1px solid black', padding: '0.5em', marginBottom: '1em' }}>
        <NumberLabel number={this.state.number} />
        <button onClick={this.generateRandom}>Generate new value</button>
      </div>
    );
  }
}
