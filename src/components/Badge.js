import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://secure.gravatar.com/avatar/ed6319f96104aae3acf3d75cbc127026?size=400"
            alt="Avatar"
          />
          <h1>
            Javier <br /> Sanchez
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Full Stack Engineer</h3>
          <div>@javier1nc</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
