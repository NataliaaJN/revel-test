import PropTypes from "prop-types";
import "../styles/components/ErrorMessage.scss";

const ErrorMessage = ({ error }) => {
  return (
    <div className="errorMessageContainer">
      <i className="fa-solid fa-triangle-exclamation errorMessageContainer__exclamation"></i>
      <p className="errorMessageContainer__message">
        {error}{" "}
        <i className="fa-solid fa-face-frown errorMessageContainer__message--icon"></i>
      </p>
    </div>
  );
};

export default ErrorMessage;
