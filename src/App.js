import "./App.css";
import { ClaculsComp } from "./CalculatorComps/ClaculsComp";
import { useState } from "react";
import { Result } from "./CalculatorComps/Result";
function App() {
  let numsAndOprs = [
    "7",
    "8",
    "9",
    "",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "*",
  ];
  let [exp, setExp] = useState("");
  return (
    <div className="App">
      <div className="center">
        <div className="flx">
          <h1>calc</h1>
          <input
            type="text"
            value={exp}
            onChange={(e) => {
              setExp(e.target.value);
            }}
          />
          <div className="container">
            {numsAndOprs.map((nao) => {
              return (
                <ClaculsComp val={nao} exp={exp} setExp={setExp}></ClaculsComp>
              );
            })}
            <Result exp={exp} setExp={setExp}></Result>
            <button
              className="resAnDel"
              onClick={() => {
                setExp("");
              }}
            >
              Reset
            </button>
            <button
              className="resAnDel"
              onClick={() => {
                setExp(exp.slice(0, -1));
              }}
            >
              DEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
