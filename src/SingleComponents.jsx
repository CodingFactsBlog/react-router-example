import React from 'react';
import { Link } from 'react-router-dom';

export const HomeLink = () => <p><Link to="/">Back</Link></p>;

export const AboutComponent = () => (
  <div>
    <h1>
      About
    </h1>
    <p>This is the about page we rendered directly from a function.</p>
    <HomeLink />
  </div>
);

export const EchoComponent = matcher => (
  <div>
    <h1>Echo</h1>
    <p>This page just echoes the value it receives in the URL. Change the value and submit the page to see the change.</p>
    <pre style={{ border: '1px solid black', padding: '0.1em' }}>{matcher.match.params.value}</pre>
    <HomeLink />
  </div>
);
