import React, { Fragment } from "react";
import Navigation from "./navigation";
import ChartComp from "./chartComp";
import "../app.css";

class SearchPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      inputValue: "",
      didSearch: false,
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
      chart = (
        <div
          style={{
            height: "460px",
            marginTop: "2%"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "75%",
              marginLeft: "12%",
              justifyContent: "space-around"
            }}
          >
            <div
              style={{
                borderBottom: "2px solid blue",
                width: "200px",
                borderRadius: "11px",
                textAlign: "center",
                boxShadow: "0 2px 8px -6px black"
              }}
            >
              <p>10,0334</p>
              <p>Infected</p>
            </div>
            <div
              style={{
                borderBottom: "2px solid red",
                width: "200px",
                borderRadius: "11px",
                textAlign: "center",
                boxShadow: "0 2px 8px -6px black"
              }}
            >
              <p>10,0334</p>
              <p>Deaths</p>
            </div>
            <div
              style={{
                borderBottom: "2px solid green",
                width: "200px",
                borderRadius: "11px",
                textAlign: "center",
                boxShadow: "0 2px 8px -6px black"
              }}
            >
              <p>10,0334</p>
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
                backgroundColor: "#4545a4"
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
