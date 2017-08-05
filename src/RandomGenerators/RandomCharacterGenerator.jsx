import React from 'react';
import { Link } from 'react-router-dom';
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
      <div>
        <h1>Random letter</h1>
        <p>Generates a letter.</p>
        <ValueLabel value={this.state.character} />
        <button onClick={this.generateRandom}>Generate new value</button>
        <p>
          <Link to="/">Back</Link>
        </p>
      </div>
    );
  }
}
