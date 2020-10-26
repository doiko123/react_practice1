import React from "react";
import { render } from "react-dom";

import "./App.css";

class H20 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: 15 };
  }

  H20State(temp) {
    if (temp <= 0) {
      return "ice";
    }
    if (temp >= 100) {
      return "steam";
    }
    return "water";
  }

  render() {
    const { temp } = this.state;
    //this.state.tempからtempを取り出し～this.stateをその中に入れる事で
    // 省略した書き方ができる

    return (
      <div className={this.H20State(temp)}>
        <h2>
          phase: {this.H20State(temp)},{temp}度
        </h2>
        <button onClick={this.onPlusClick}>+</button>
        <button onClick={this.onPlus10Click}>+10</button>
        <button onClick={this.onMinusClick}>-</button>
        <button onClick={this.onMinus10Click}>-10</button>
      </div>
    );
  }

  onPlusClick = () => {
    const { temp } = this.state;
    this.setState({ temp: temp + 1 });
  };

  onPlus10Click = () => {
    const { temp } = this.state;
    this.setState({ temp: temp + 10 });
  };

  onMinusClick = () => {
    const { temp } = this.state;
    this.setState({ temp: temp - 1 });
  };

  onMinus10Click = () => {
    const { temp } = this.state;
    this.setState({ temp: temp - 10 });
  };
}

render(<H20 />, document.getElementById("root"));
