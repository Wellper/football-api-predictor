import React from "react";
import { Link } from "react-router-dom";

const Team = ({ team, venue }) => {
  const { country, founded, id, logo, name } = team;
  return (
    <article className="team">
      <div className="img-container">
        <img src={logo} alt={name} />
      </div>
      <div className="team-footer">
        <h3>{name}</h3>
        <h4>{founded}</h4>
        <Link to={`/team/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
};

export default Team;
