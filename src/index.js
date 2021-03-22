import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(
  <Badge
    firstName="Javier"
    lastName="Sanchez"
    avatarUrl="https://secure.gravatar.com/avatar/ed6319f96104aae3acf3d75cbc127026?size=400"
    jobTitle="Full Stack Engineer"
    twitter="javier1nc"
  />,
  container
);
