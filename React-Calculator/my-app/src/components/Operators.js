import React from "react";
import "./Operators.css";

const Operators = (props) => {
  return (
    <div className="operators">
      {props.operators.map((btn, index) => {
        if (index === props.operators.length - 1) {
          return null;
        }

        return (
          <button key={index} value={btn} onClick={props.updateCalc}>
            {btn}
          </button>
        );
      })}

      <button value="del" onClick={props.updateCalc}>
        DEL
      </button>
    </div>
  );
};
export default Operators;
