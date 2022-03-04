import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home">
      <h1>
        Welcome Please Enter you Unique ID to View your Consultation Details
      </h1>
      <form>
        <input className="search" type="text" placeholder="Eg. 0000" />
        <button>Search</button>
      </form>
    </div>
  );
}

export default HomePage;
