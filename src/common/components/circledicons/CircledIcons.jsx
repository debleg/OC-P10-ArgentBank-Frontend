import "./circledicons.css"

const CircledIcons = ({src, alt}) => {
  return (
    <img
      src={src}
      alt={alt}
      className="circled-icon"
    />
  );
};

export default CircledIcons;
