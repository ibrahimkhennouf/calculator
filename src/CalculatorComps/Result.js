export let Result = (props) => {
  let { exp, setExp } = props;
  let CalcRes = () => {
    return setExp(Function("return " + exp)());
  };
  return (
    <div>
      <button value="=" onClick={CalcRes}>
        =
      </button>
    </div>
  );
};
