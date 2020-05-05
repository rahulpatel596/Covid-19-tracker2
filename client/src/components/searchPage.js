import React, { Fragment } from "react";
import Navigation from "./navigation";
// import GlobalChart from "./globalChart";

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
    this.setState({ didSearch: true });
    this.searchingObject();
  };

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  searchingObject = () => {
    fetch(`https://corona.lmao.ninja/v2/historical/${this.state.inputValue}`)
      .then(response => response.json())
      .then(json => {
        this.setState({ currentCountryData: json.timeline });
      });
  };

  componentDidMount = () => {
    // fetch("https://corona.lmao.ninja/v2/historical/all")
    //   .then(response => response.json())
    //   .then(json => this.setState({ globalHistoricalData: json }));
  };

  render() {
    // let chart;
    // if (this.state.didSearch) {
    //   chart = (
    //     <GlobalChart
    //       inputValue={this.state.inputValue}
    //       currentCountryData={this.state.currentCountryData}
    //       globalHistoricalData={this.state.globalHistoricalData}
    //     />
    //   );
    // }

    return (
      <Fragment>
        <Navigation />
        <div style={{ marginTop: "25%", marginLeft: "30%" }}>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              style={{
                height: "40px",
                width: "400px",
                marginRight: "30px",
                borderRadius: "3px",
                borderStyle: "none",
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

                backgroundColor: "#63c76a"
              }}
              type="submit"
            >
              Search
            </button>
          </form>
          {/* <div>{chart}</div> */}
        </div>
      </Fragment>
    );
  }
}

export default SearchPage;
