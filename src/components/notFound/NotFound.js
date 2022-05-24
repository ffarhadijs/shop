import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="text">
        <h1>ERROR 404!</h1>
        <p>PAGE NOT FOUND</p>
        <div>

        <Link to="/">
          <Button variant="outline-light">
            home page
          </Button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
