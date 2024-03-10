import React from "react";
import Button from "../Button/button";
import "./Counter.css";

const Counter = (props) => {
  return (
    <div>
      <div className="buttons">
        <Button onClick={props.handleMinus} text="-" color="rgb(4, 205, 4)" />
        <p>{props.count}</p>
        <Button onClick={props.handlePlus} text="+" color="rgb(4, 205, 4)"/>
      </div>

      <Button onClick={props.handleReset} text="Reset" color="orange"/>
    </div>
  );
};

export default Counter;
