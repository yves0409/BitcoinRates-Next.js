import React from "react";

class Prices extends React.Component {
  state = {
    currency: "EUR",
  };
  render() {
    let list = "";

    if (this.state.currency === "USD") {
      list = (
        <li className="group-item">
          Bitcoin rate for {this.props.bpi.bpi.USD.description} :{" "}
          <span className="badge badge-primary">
            {this.props.bpi.bpi.USD.code}
          </span>{" "}
          <strong>{this.props.bpi.bpi.USD.rate}</strong>
        </li>
      );
    } else if (this.state.currency === "GBP") {
      list = (
        <li className="group-item">
          Bitcoin rate for {this.props.bpi.bpi.GBP.description} :{" "}
          <span className="badge badge-primary">
            {this.props.bpi.bpi.GBP.code}
          </span>{" "}
          <strong>{this.props.bpi.bpi.GBP.rate}</strong>
        </li>
      );
    } else if (this.state.currency === "EUR") {
      list = (
        <li className="group-item">
          Bitcoin rate for {this.props.bpi.bpi.EUR.description} :{" "}
          <span className="badge badge-primary">
            {this.props.bpi.bpi.EUR.code}
          </span>{" "}
          <strong>{this.props.bpi.bpi.EUR.rate}</strong>
        </li>
      );
    }
    return (
      <div>
        <ul className="list-group">{list}</ul>
        <select
          className="form-control"
          onChange={(e) => this.setState({ currency: e.target.value })}
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );
  }
}

export default Prices;
