import React from "react";
import PropTypes from "prop-types";
const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! you guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats"></div>;
  }
};
Congrats.propTypes = {
  success: PropTypes.bool,
};

export default Congrats;
