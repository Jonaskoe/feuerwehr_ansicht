import React from "react";

import auto_links from "./img/auto_links.png";
import auto_rechts from "./img/auto_rechts.png";
import Box1 from "./img/Box1.png";

const ShowCar = () => {
  var auto = auto_links;
  var zahl = 3;

  function onclick_box1() {
    auto = auto_rechts;
    zahl = 2;
  }

  return (
    <div className="Background">
      <img src={auto} alt="auto" />
      <button onClick={onclick_box1}>click {zahl}</button>
    </div>
  );
};

export default ShowCar;
