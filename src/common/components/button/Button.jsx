import "./button.css";

const Button = ({ className, type, text, ...props }) => {
  return (
    <button className={className} type={type} {...props}>
      {text}
    </button>
  );
};

export default Button;
