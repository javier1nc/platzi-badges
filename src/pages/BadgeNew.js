import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Javier"
                lastName="Sanchez Mehdoza"
                twitter="javier1nc"
                jobTitle="Full Stack Engineer"
                avatarUrl="https://secure.gravatar.com/avatar/ed6319f96104aae3acf3d75cbc127026?size=400"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
