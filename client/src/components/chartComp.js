import React from "react";
import { Line } from "react-chartjs-2";

class ChartComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDeaths: false,
      showInfected: true,
      showRecovered: false,
      data: {
        labels: [],
        datasets: [
          {
            label: "Covid-19 infected",
            borderColor: "#3e95cd",
            // fill: false,
            data: []
          }
        ]
      }
    };
  }

  componentDidMount = () => {
    this.setState({
      showInfected: true,
      data: {
        labels: Object.keys(this.props.currentCountryData.cases),
        datasets: [
          {
            label: "Covid-19 infected",

            borderColor: "#3e95cd",
            data: Object.values(this.props.currentCountryData.cases)
          }
        ]
      }
    });
  };

  HandleClick = () => {
    if (this.state.showInfected === true) {
      this.setState({
        data: {
          labels: Object.keys(this.props.currentCountryData.cases),
          datasets: [
            {
              label: "Covid-19 infected",

              borderColor: "#4545a4",
              data: Object.values(this.props.currentCountryData.cases)
            }
          ]
        }
      });
    } else if (this.state.showDeaths === true) {
      this.setState({
        data: {
          labels: Object.keys(this.props.currentCountryData.deaths),
          datasets: [
            {
              label: "Covid-19 deaths",

              borderColor: "#f00",
              data: Object.values(this.props.currentCountryData.deaths)
            }
          ]
        }
      });
    } else if (this.state.showRecovered) {
      this.setState({
        data: {
          labels: Object.keys(this.props.currentCountryData.recovered),
          datasets: [
            {
              label: "Covid-19 recovered",

              borderColor: "#0f0",
              data: Object.values(this.props.currentCountryData.recovered)
            }
          ]
        }
      });
    }
  };

  HandleInfectedClick = (event, i, d, r) => {
    event.preventDefault();
    this.setState({ showInfected: i, showDeaths: d, showRecovered: r }, () => {
      this.HandleClick();
    });
  };

  render() {
    return (
      <div
        style={{
          position: "relative",
          width: "70%",
          borderRadius: "15px",
          height: "460px",

          boxShadow: "0 2px 8px -6px black",
          marginTop: "100px",
          marginLeft: "15%"
        }}
      >
        <div class="radio-toolbar" style={{ textAlign: "center" }}>
          <input
            type="radio"
            name="button1"
            value="Infected"
            id="button1"
            onClick={event =>
              this.HandleInfectedClick(event, true, false, false)
            }
          />
          <label for="button1">Infected</label>
          <input
            type="radio"
            name="button2"
            value="Deaths"
            id="button2"
            onClick={event =>
              this.HandleInfectedClick(event, false, true, false)
            }
          />
          <label for="button2">Deaths</label>
          <input
            type="radio"
            name="button3"
            value="Recovered"
            id="button3"
            onClick={event =>
              this.HandleInfectedClick(event, false, false, true)
            }
          />
          <label for="button3">Recovered</label>
        </div>
        <div style={{ transitionTimingFunction: "ease-in-out", height: "85%" }}>
          <Line
            options={{
              maintainAspectRatio: false,
              responsive: true,
              legend: {
                display: true
              },
              scales: {
                yAxes: [
                  {
                    ticks: { beginAtZero: true },
                    gridLines: {
                      display: true
                    }
                  }
                ],
                xAxes: [
                  {
                    ticks: { beginAtZero: true },
                    gridLines: {
                      display: false
                    }
                  }
                ]
              }
            }}
            data={this.state.data}
          ></Line>
        </div>
      </div>
    );
  }
}

export default ChartComp;
