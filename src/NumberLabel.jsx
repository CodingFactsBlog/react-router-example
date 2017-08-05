import React from 'react';
import PropTypes from 'prop-types';

export default class NumberLabel extends React.Component {
  render() {
    return (
      <p>{`Obtained value: ${this.props.number}`}</p>
    );
  }
}

NumberLabel.defaultProps = {
  number: 0,
};

NumberLabel.propTypes = {
  number: PropTypes.number,
};
