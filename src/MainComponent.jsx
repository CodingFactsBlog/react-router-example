import React from 'react';
import { Link } from 'react-router-dom';

export default class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Random Generator</h1>
        <ul>
          <li>
            <Link to="/random/double">Random decimal</Link>
          </li>
          <li>
            <Link to="/random/integer">Random integer</Link>
          </li>
          <li>
            <Link to="/random/character">Random letter</Link>
          </li>
        </ul>
      </div>
    );
  }
}
