import React, { Component } from "react";

import auto_links from "./img/auto_links.png";
import auto_rechts from "./img/auto_rechts.png";
import Box1 from "./img/Box1.png";
import Box2 from "./img/Box2.png";
import Auswahl from "./img/Auswahl.png";

class ShowCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auto: auto_links,
      box1: Auswahl,
      box2: Auswahl,
    };
  }
  changeText(event) {
    this.setState({
      name: event.target.value,
    });
  }
  changeCar(event) {
    this.setState({
      auto: auto_rechts,
    });
  }
  changeCar2(event) {
    this.setState({
      auto: auto_links,
    });
  }
  changeBox1(event) {
    this.setState({
      box1: Box1,
    });
  }
  changeBox2(event) {
    this.setState({
      box2: Box2,
    });
  }
  render() {
    return (
      <div>
        <h3>Feuerwehrauto</h3>
        <div>
          <img
            src={this.state.auto}
            alt="auto"
            style={{ position: "absolute", top: "50px", left: "50px" }}
          />
          <img
            src={this.state.box1}
            alt="auto2"
            onClick={this.changeBox1.bind(this)}
            style={{ position: "absolute", top: "280px", left: "600px" }}
          />
          <img
            src={this.state.box2}
            alt="auto2"
            onClick={this.changeBox2.bind(this)}
            style={{ position: "absolute", top: "250px", left: "200px" }}
          />
          <button onClick={this.changeCar2.bind(this)}>geh nach links</button>
          <button onClick={this.changeCar.bind(this)}>
            geh nach rechts {this.state.zahl}
          </button>
        </div>
      </div>
    );
  }
}

export default ShowCar;
