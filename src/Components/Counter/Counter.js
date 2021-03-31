import React from "react";
import { connect } from "react-redux";
import { increment } from './../../Redux/Counter/counterAction';
import { decrement } from './../../Redux/Counter/counterAction';

var Counter = (props) => {

  return (
    <div>
      <h2>{props.counter}</h2>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  );
};
var mapState = (state) => {
  return {
    counter: state.counter,
  };
};

var action = {
    increment,
    decrement,
}

export default connect(mapState, action)(Counter);
