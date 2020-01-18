import React from "react";

export class Counter extends React.Component {
  state = {
    score: 30
  }

  constructor() {
    super();
    this.handleScore = this.handleScore.bind(this);
  }

  handleScore(delta) {
    console.log('handleScore', this);
    // this.state.score += 1;

    // this.setState({score: this.state.score + 1});
    this.setState(prevState => {
      return {score: prevState.score + delta}
    })
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-anction decrement" onClick={()=>this.handleScore(-1)}>-</button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-anction increment" onClick={()=>this.handleScore(1)}>+</button>
      </div>
    );
  }
}
