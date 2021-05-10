import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section>
      <div className="error-container">
        <h2>error page</h2>
        <Link to="/">back home</Link>
      </div>
    </section>
  );
};

export default Error;
