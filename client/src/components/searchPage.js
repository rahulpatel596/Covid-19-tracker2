import React, { Fragment } from "react";
import Navigation from "./navigation";
import ChartComp from "./chartComp";
import "../app.css";
import "./searchPage.css";

class SearchPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      inputValue: "",
      didSearch: false,
      countryStats: [],
      countrySpecificData: [],
      currentCountryData: []
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ didSearch: false });
    this.searchingCountry();
  };

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  searchingCountry = () => {
    let searchCon = document.getElementById("searchContainer");
    searchCon.style.marginTop = "10%";
    fetch(`https://corona.lmao.ninja/v2/historical/${this.state.inputValue}`)
      .then(response => response.json())
      .then(json => {
        this.setState({ currentCountryData: json.timeline, didSearch: true });
      })
      .catch(() => {
        console.log(
          "error while fetching country data for" + this.state.inputValue
        );
        console.error();
      });

    fetch(`https://corona.lmao.ninja/v2/countries/${this.state.inputValue}`)
      .then(response => response.json())
      .then(json => {
        this.setState({ countryStats: json });
      });
  };

  render() {
    let chart;
    if (
      this.state.didSearch === true &&
      this.state.currentCountryData !== null &&
      this.state.currentCountryData !== undefined
    ) {
      chart = (
        <div id="mainContainer">
          <div className="searchPageCardContainer">
            <div className="searchPageCards">
              <p>{this.state.countryStats.cases}</p>
              <p>Infected</p>
            </div>
            <div className="searchPageCards">
              <p>{this.state.countryStats.deaths}</p>
              <p>Deaths</p>
            </div>
            <div className="searchPageCards">
              <p>{this.state.countryStats.recovered}</p>
              <p>Recovered</p>
            </div>
          </div>

          <ChartComp currentCountryData={this.state.currentCountryData} />
        </div>
      );
    }

    return (
      <Fragment>
        <Navigation />
        <div id="searchContainer">
          <form onSubmit={this.handleSubmit}>
            <input
              id="searchBar"
              type="text"
              onChange={this.handleChange}
              placeholder="Search for country"
            />
            <button id="searchButton" type="submit">
              Search
            </button>
          </form>
        </div>

        <div>
          <div>{chart}</div>
        </div>
      </Fragment>
    );
  }
}

export default SearchPage;
