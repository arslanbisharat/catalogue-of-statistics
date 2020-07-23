import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="App">
    <div id="init">
      <h1 className="app-title">Welcome to the world of Comics</h1>
      <Link to="/heroesList">
        <button
          type="submit"
          className="app-button"
        >
          Click Here
        </button>
      </Link>
    </div>
  </div>
);

export default Home;
