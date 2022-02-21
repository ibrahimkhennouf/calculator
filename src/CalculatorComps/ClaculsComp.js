export let ClaculsComp = (props) => {
  let { val, exp, setExp } = props;

  return (
    <div>
      <button
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
