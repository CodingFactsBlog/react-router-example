import React from 'react';
import { Link } from 'react-router-dom';
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
      <div>
        <h1>Random double</h1>
        <p>Generates a decimal number between 0 and 1.</p>
        <ValueLabel value={this.state.number} />
        <button onClick={this.generateRandom}>Generate new value</button>
        <p>
          <Link to="/">Back</Link>
        </p>
      </div>
    );
  }
}
