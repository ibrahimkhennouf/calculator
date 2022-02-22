import "./stl.css";

export let ClaculsComp = (props) => {
  let { val, exp, setExp } = props;

  return (
    <div>
      <button
        className="btn"
        value={val}
        onClick={(e) => {
          setExp(exp + e.target.value);
        }}
      >
        {val}
      </button>
    </div>
  );
};
