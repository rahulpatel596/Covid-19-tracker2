import React from "react";
import "./dataTable.css";

class MapBoxComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortDirection: false
    };
  }

  render() {
    return (
      <div>
        <table>
          <thead id="mainTableHead">
            <tr>
              <th>Country</th>
              <th>cases</th>
              <th>deaths</th>
              <th>cases today</th>
              <th>deaths today</th>
              <th>Cases per one million</th>
              <th>Total tests conducted</th>
            </tr>
          </thead>
          <tbody id="mainTableBody">
            {this.props.incomingCovidData.map(eachValue => (
              <tr>
                <td>{eachValue.country}</td>
                <td>{eachValue.cases}</td>
                <td>{eachValue.deaths}</td>
                <td>{eachValue.todayCases}</td>
                <td>{eachValue.todayDeaths}</td>
                <td>{eachValue.casesPerOneMillion}</td>
                <td>{eachValue.tests}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MapBoxComponent;
