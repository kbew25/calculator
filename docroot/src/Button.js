const isOperator = (val) => {
  return !isNaN(val) || val === "." || val === "=";
};

const Button = (props) => {
  const { number } = props;

  return (
    <div className={`button ${
        isOperator(props.children) ? null : "operator"
      }`}
      onClick={() => props.handleClick(props.number)}
    >
      {props.children}
    </div>
  );
};

export default Button;
