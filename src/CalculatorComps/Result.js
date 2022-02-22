export let Result = (props) => {
  const nerdamer = require("nerdamer/all.min");

  let { exp, setExp } = props;
  let CalcRes = () => {
    var e = nerdamer(exp);
    return setExp(e.evaluate().text());
  };

  return (
    <div>
      <button
        value="="
        onClick={CalcRes}
        style={{ padding: " 0.5rem 1rem", backgroundColor: "red" }}
      >
        =
      </button>
    </div>
  );
};
