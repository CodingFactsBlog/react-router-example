import React from 'react';
import PropTypes from 'prop-types';
import ValueLabel from './ValueLabel.jsx';
import { HomeLink } from './SingleComponents.jsx';

export default class RandomGenerator extends React.Component {
  constructor(props) {
    super(props);
    const randoms = {
      double: {
        MIN_VALUE: 0,
        MAX_VALUE: 1,
        get title() { return 'Random double'; },
        get text() { return `Generates a decimal number between ${this.MIN_VALUE} and ${this.MAX_VALUE}.`; },
        get value() { return (Math.random() * ((this.MAX_VALUE - this.MIN_VALUE) + this.MIN_VALUE)); },
      },
      integer: {
        MIN_VALUE: 1,
        MAX_VALUE: 1000,
        get title() { return 'Random integer'; },
        get text() { return `Generates an integer number between ${this.MIN_VALUE} and ${this.MAX_VALUE}.`; },
        get value() { return (Math.floor(Math.random() * ((this.MAX_VALUE - this.MIN_VALUE) + this.MIN_VALUE))); },
      },
      character: {
        POSSIBLE_VALUES: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        get title() { return 'Random letter'; },
        get text() { return 'Generates a letter.'; },
        get value() {
          return this.POSSIBLE_VALUES.charAt(Math.floor(Math.random() * this.POSSIBLE_VALUES.length));
        },
      },
    };
    this.random = randoms[props.match.params.type];
    this.state = {};
    this.generateRandom = this.generateRandom.bind(this);
  }

  generateRandom() {
    this.setState({ value: this.random.value });
  }

  render() {
    return (
      <div>
        <h1>{this.random.title}</h1>
        <p>{this.random.text}</p>
        <ValueLabel value={this.state.value} />
        <button onClick={this.generateRandom}>Generate new value</button>
        <HomeLink />
      </div>
    );
  }
}

RandomGenerator.defaultProps = {
  match: {},
};

RandomGenerator.propTypes = {
  match: PropTypes.any,
};
