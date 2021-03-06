import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MapBoxComponent from "./components/mapBoxComponent";

import "./app.css";
import DataTable from "./components/dataTable";
import Navigation from "./components/navigation";
import Cards from "./components/cards";
import SearchPage from "./components/searchPage";
import GlobalChart from "./components/globalChart";
import About from "./components/about";

import DoctorSVG from "./images/Untitled.svg";
import ThreeLineSVG from "./images/Untitledlines.svg";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      incomingCovidData: [],
      totalCurrentCases: {},
      globalHistoricalData: [],
      loaded: false
    };
  }

  gettingData = () => {
    fetch("https://corona.lmao.ninja/v3/countries")
      .then(response => response.json())
      .then(json => this.setState({ incomingCovidData: json }));

    fetch("https://corona.lmao.ninja/v3/all")
      .then(response => response.json())
      .then(json => this.setState({ totalCurrentCases: json }));
    fetch("https://corona.lmao.ninja/v3/historical/all")
      .then(response => response.json())
      .then(json =>
        this.setState({ globalHistoricalData: json, loaded: true })
      );
  };

  componentDidMount() {
    fetch("https://corona.lmao.ninja/v3/countries")
      .then(response => response.json())
      .then(json => this.setState({ incomingCovidData: json }));

    fetch("https://corona.lmao.ninja/v3/all")
      .then(response => response.json())
      .then(json => this.setState({ totalCurrentCases: json }));
    fetch("https://corona.lmao.ninja/v3/historical/all")
      .then(response => response.json())
      .then(json =>
        this.setState({ globalHistoricalData: json, loaded: true })
      );
  }

  render() {
    let chart;
    if (this.state.loaded === true) {
      chart = (
        <GlobalChart globalHistoricalData={this.state.globalHistoricalData} />
      );
    }

    return (
      <Router>
        <Route path="/searchCountry" exact component={SearchPage} />
        <Route path="/about" exact component={About} />

        <Route
          path="/"
          exact
          render={() => (
            <div className="App">
              <header>
                <Navigation />
              </header>

              <main>
                <section>
                  <div style={{ position: "relative" }}>
                    <div>
                      <img
                        id="doctorImage"
                        src={DoctorSVG}
                        style={{
                          width: "600px",
                          height: "600px",
                          left: "47%",
                          marginTop: "7%",
                          position: "relative"
                        }}
                      ></img>
                      <div id="cardsID">
                        <Cards
                          totalCurrentCases={this.state.totalCurrentCases}
                        />
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <br></br>
                  <div>
                    <img
                      style={{
                        width: "50%",
                        height: "50%",
                        left: "24%",
                        position: "relative"
                      }}
                      src={ThreeLineSVG}
                    ></img>
                  </div>
                  <div id="chartID">{chart}</div>

                  <div id="mapboxID" style={{ marginTop: "10%" }}>
                    <MapBoxComponent
                      incomingCovidData={this.state.incomingCovidData}
                    />
                  </div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>

                  <div id="dataTableID">
                    <DataTable
                      incomingCovidData={this.state.incomingCovidData}
                    />
                  </div>

                  <a href="#doctorImage" id="topButtonContainer">
                    <img src="https://img.icons8.com/nolan/64/up-squared--v1.png"></img>
                  </a>
                </section>
              </main>
            </div>
          )}
        />
      </Router>
    );
  }
}

export default App;
