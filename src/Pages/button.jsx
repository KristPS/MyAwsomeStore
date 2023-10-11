import React from "react";
import PropTypes from "prop-types";


function Button({ onClick, content, shape, size, color, animation, token, setToken }) {
  const handleClick = () => {
    onClick(content, token, setToken, shape, size, color, animation);
    setToken("");
  };

  return (
    <div className="button">
      <button onClick={handleClick}>{content}</button>
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  shape: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  animation: PropTypes.string,
  token: PropTypes.string,
  setToken: PropTypes.func,
};

export default Button;
