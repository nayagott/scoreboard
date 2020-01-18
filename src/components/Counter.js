import React from "react";

export class Counter extends React.Component {
  render() {
    return (
      <div className="counter">
        <button className="counter-anction decrement" onClick={()=> this.props.chagneScore(this.props.id, -1)}>-</button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-anction increment" onClick={()=> this.props.chagneScore(this.props.id, 1)}>+</button>
      </div>
    );
  }
}
