import React from 'react';
import { Link } from 'gatsby';

const AboutPage = () => (
  <>
    <h1>About</h1>
    <ul>
      <li>
        <Link to="/" activeStyle={{color: 'red'}}>Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </>
)

export default AboutPage;