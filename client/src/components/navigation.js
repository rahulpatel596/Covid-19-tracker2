import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="navContainer">
        <nav>
          <ul className="nav-ul">
            <li className="nav-link">
              <p>Covid-19 tracker</p>
            </li>
            <li className="nav-link">
              <a href="#mapboxID">Map</a>
            </li>
            <li className="nav-link">
              <a href="#">Graphs</a>
            </li>
            <li className="nav-link">
              <a href="http://localhost:3000/#dataTableID">Country data</a>
            </li>
            <li className="nav-link">
              <div
                style={{
                  borderRadius: "15px",
                  width: "90%",
                  border: "1px solid white",
                  textAlign: " center"
                }}
              >
                <Link to="/searchCountry"> Search for country</Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
