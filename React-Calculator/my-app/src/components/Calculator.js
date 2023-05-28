import React, { useState } from "react";
import "./Calculator.css";
import CreateNumbers from "./CreateNumbers";
import Operators from "./Operators";

const Calculator = () => {
  const [calc, setCalc] = useState("0");
  const operators = ["/", "*", "+", "-", "."];

  const updateCalc = (event) => {
    const value = event.target.value;

    if (value === "del") {
      setCalc("0");
    } else if (value === "equal") {
      try {
        const result = eval(calc.replace(/[^-()\d/*+.]/g, ""));
        setCalc(result.toString());
      } catch (error) {
        setCalc("Error");
      }
    } else if (value === "." && calc === "0") {
      setCalc("0.");
    } else {
      setCalc(calc === "0" || calc === "Error" ? value : calc + value);
    }

    if (operators.includes(calc.slice(-1)) && operators.includes(value)) {
      setCalc(calc.slice(0, -1) + value);
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>{calc}</span>
        </div>

        <Operators operators={operators} updateCalc={updateCalc} />

        <CreateNumbers updateCalc={updateCalc} />
      </div>
    </div>
  );
};

export default Calculator;
