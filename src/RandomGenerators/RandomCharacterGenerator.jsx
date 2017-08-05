import React from 'react';
import ValueLabel from './ValueLabel.jsx';

export default class RandomCharacterGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.POSSIBLE_VALUES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    this.state = {};
    this.generateRandom = this.generateRandom.bind(this);
  }

  generateRandom() {
    this.setState({ character: this.POSSIBLE_VALUES.charAt(Math.floor(Math.random() * this.POSSIBLE_VALUES.length)) });
  }

  render() {
    return (
      <div style={{ padding: '0.5em' }}>
        <h1>Random letter</h1>
        <p>Generates a letter.</p>
        <ValueLabel value={this.state.character} />
        <button onClick={this.generateRandom}>Generate new value</button>
      </div>
    );
  }
}
