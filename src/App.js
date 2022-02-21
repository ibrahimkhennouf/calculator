import "./App.css";
import { ClaculsComp } from "./CalculatorComps/ClaculsComp";
import { useState } from "react";
import { Result } from "./CalculatorComps/Result";
function App() {
  let numsAndOprs = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "/",
    "*",
    ".",
  ];
  let [exp, setExp] = useState("");
  return (
    <div className="App">
      <h1>{exp}</h1>
      <div className="container">
        {numsAndOprs.map((nao) => {
          return (
            <ClaculsComp val={nao} exp={exp} setExp={setExp}></ClaculsComp>
          );
        })}
        <Result exp={exp} setExp={setExp}></Result>
        <button
          onClick={() => {
            setExp("");
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            setExp(exp.slice(0, -1));
          }}
        >
          DEL
        </button>
      </div>
    </div>
  );
}

export default App;
