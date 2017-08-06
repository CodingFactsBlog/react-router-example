import React from 'react';
import PropTypes from 'prop-types';

export default class ValueLabel extends React.Component {
  render() {
    return (
      <p>{`Obtained value: ${this.props.value}`}</p>
    );
  }
}

ValueLabel.defaultProps = {
  value: '#',
};

ValueLabel.propTypes = {
  value: PropTypes.any,
};
