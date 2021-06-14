import React from "react";
import { CSSTransition } from "react-transition-group";
// import { BoardCard } from "../BoardCard/BoardCard";

let sampleList = ["Portraits 1", "portraits 2", "portraits 3"];

export class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div className="logoContainer"></div>
        <div className="boardGrid"></div>
      </div>
    );
  }
}
