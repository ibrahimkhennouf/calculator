export let Result = (props) => {
  const nerdamer = require("nerdamer/all.min");

  let { exp, setExp } = props;
  let CalcRes = () => {
    var e = nerdamer(exp);
    return setExp(e.toString());
  };

  return (
    <div>
      <button value="=" onClick={CalcRes}>
        =
      </button>
    </div>
  );
};
