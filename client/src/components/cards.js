import React, { Fragment } from "react";
import Card from "./card";

class Cards extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="mainCardContainer">
          <div className="cardContainer">
            <Card
              background="#fff"
              border="3px solid green"
              cardTitle="Recovered"
              borderColor="green"
              cardContent={this.props.totalCurrentCases.recovered}
            />
            <Card
              background="#fFF"
              border="3px solid blue"
              cardTitle="Infected"
              borderColor="blue"
              cardContent={this.props.totalCurrentCases.cases}
            />
            <Card
              background="#fff"
              border="3px solid red"
              borderColor="red"
              cardTitle="Deaths"
              cardContent={this.props.totalCurrentCases.deaths}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Cards;
