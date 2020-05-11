import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="navContainer">
        <nav>
          <ul className="nav-ul">
            <li className="nav-link">
              <Link to="/" exact>
                Covid-19 tracker
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-link">
              <Link to="/searchCountry" exact>
                {" "}
                <div
                  style={{
                    borderRadius: "15px",
                    border: "1px solid black",
                    width: "90%",

                    textAlign: " center"
                  }}
                >
                  Search for country
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
