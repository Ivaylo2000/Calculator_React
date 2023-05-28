import React from "react";
import "./CreateNumbers.css";

const CreateNumbers = (props) => {
  const addNumbers = () => {
    const numbers = [];
    for (let i = 1; i < 10; i++) {
      numbers.push(
        <button key={i} value={i} onClick={props.updateCalc}>
          {i}
        </button>
      );
    }
    return numbers;
  };

  return (
    <div className="numbers">
      {addNumbers()}
      <button value="0" onClick={props.updateCalc}>
        0
      </button>
      <button value="." onClick={props.updateCalc}>
        .
      </button>
      <button value="equal" onClick={props.updateCalc}>
        =
      </button>
    </div>
  );
};

export default CreateNumbers;
