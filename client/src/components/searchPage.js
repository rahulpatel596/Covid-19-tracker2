import React, { Fragment } from "react";
import Navigation from "./navigation";
import ChartComp from "./chartComp";
// import GlobalChart from "./globalChart";
import "../app.css";

class SearchPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      inputValue: "",
      didSearch: false,
      countrySpecificData: [],
      currentCountryData: []
      // globalHistoricalData: []
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
    searchCon.style.marginTop = "5%";
    fetch(`https://corona.lmao.ninja/v2/historical/${this.state.inputValue}`)
      .then(response => response.json())
      .then(json => {
        this.setState({ currentCountryData: json.timeline, didSearch: true });
      });
  };

  render() {
    let chart;
    if (
      this.state.didSearch === true &&
      this.state.currentCountryData !== null &&
      this.state.currentCountryData !== undefined
    ) {
      console.log(this.state.currentCountryData.cases);
      chart = (
        <div
          style={{
            height: "460px",
            marginTop: "10%"
          }}
        >
          <ChartComp
            // incomingLabel="infected Cases"
            currentCountryData={this.state.currentCountryData}
          />
        </div>
      );
    }

    return (
      <Fragment>
        <Navigation />
        <div
          id="searchContainer"
          style={{
            marginTop: "25%",
            marginLeft: "30%",
            transition: "all 0.8s ease"
          }}
        >
          <form onSubmit={this.handleSubmit}>
            <input
              id="searchBar"
              type="text"
              style={{
                height: "40px",
                width: "400px",
                marginRight: "30px",
                borderRadius: "3px",
                border: "1px solid black",
                textAlign: "center"
              }}
              onChange={this.handleChange}
              placeholder="Search for country"
            />
            <button
              style={{
                height: "40px",
                fontWeight: "bold",
                width: "150px",
                borderRadius: "30px",
                borderStyle: "none",
                color: "white",

                backgroundColor: "green"
              }}
              type="submit"
            >
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
