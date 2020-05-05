import React, { Fragment } from "react";
import style from "./cards.css";

class Cards extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Fragment>
        <div
          className="ind-card"
          style={{
            width: "250px",
            height: "120px",

            textAlign: "center",
            borderRadius: "15px",
            backgroundColor: this.props.background,
            borderBottom: this.props.border
          }}
        >
          <p className="card-title">{this.props.cardTitle}</p>
          <br></br>
          <p style={{ color: this.props.borderColor }} className="card-content">
            {this.props.cardContent}
          </p>
        </div>
      </Fragment>
    );
  }
}

export default Cards;
