import React, { Component } from "react";
import './Imagen.css';

import imagen from "../../assets/pendulum-1934311_640.jpg";

export default class Imagen extends Component {
  render() {
    return(

      <div className="imagen">
        <img src={imagen} alt="Péndulo" />
      </div>
    ) 
  }
}
