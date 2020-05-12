import React from "react";
import { Line } from "react-chartjs-2";

class GlobalChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDeaths: false,
      showInfected: true,
      showRecovered: false,
      globalHistoricalData: [],
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
        labels: Object.keys(this.props.globalHistoricalData.cases),
        datasets: [
          {
            label: "Covid-19 infected",

            borderColor: "#3e95cd",
            data: Object.values(this.props.globalHistoricalData.cases)
          }
        ]
      }
    });
  };

  HandleClick = () => {
    if (this.state.showInfected === true) {
      this.setState({
        data: {
          labels: Object.keys(this.props.globalHistoricalData.cases),
          datasets: [
            {
              label: "Covid-19 infected",

              borderColor: "#4545a4",
              data: Object.values(this.props.globalHistoricalData.cases)
            }
          ]
        }
      });
    } else if (this.state.showDeaths === true) {
      this.setState({
        data: {
          labels: Object.keys(this.props.globalHistoricalData.deaths),
          datasets: [
            {
              label: "Covid-19 deaths",

              borderColor: "#f00",
              data: Object.values(this.props.globalHistoricalData.deaths)
            }
          ]
        }
      });
    } else if (this.state.showRecovered) {
      this.setState({
        data: {
          labels: Object.keys(this.props.globalHistoricalData.recovered),
          datasets: [
            {
              label: "Covid-19 recovered",

              borderColor: "#0f0",
              data: Object.values(this.props.globalHistoricalData.recovered)
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
          height: "560px",

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
          <label htmlFor="button1">Infected</label>
          <input
            type="radio"
            name="button2"
            value="Deaths"
            id="button2"
            onClick={event =>
              this.HandleInfectedClick(event, false, true, false)
            }
          />
          <label htmlFor="button2">Deaths</label>
          <input
            type="radio"
            name="button3"
            value="Recovered"
            id="button3"
            onClick={event =>
              this.HandleInfectedClick(event, false, false, true)
            }
          />
          <label htmlFfor="button3">Recovered</label>
        </div>
        <div>
          <Line
            options={{
              maintainAspectRatio: true,
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

export default GlobalChart;
