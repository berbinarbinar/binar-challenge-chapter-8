import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../../style/homepage.css';


function Homepage() {
  return (
  <div class='background'>
    <div className="d-grid gap-2">
      <Link to="/signup">
        <Button variant="primary" size="lg">
          Sign-Up
        </Button>
      </Link>
      <Link to="/edit">
        <Button variant="success" size="lg">
          Edit Player
        </Button>
      </Link>
      <Link to="/search">
        <Button variant="secondary" size="lg">
          Search
        </Button>
      </Link>
    </div>
  </div>
  );
}

export default Homepage;
