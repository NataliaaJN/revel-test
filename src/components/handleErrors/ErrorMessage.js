import PropTypes from "prop-types";
import "../../styles/components/handleErrors/ErrorMessage.scss";

const ErrorMessage = ({ errorMessage }) => {
  return (
    <>
      <h2 className="errorTitle">Something went wrong, we couldn't load the pictures</h2>
      <div className="errorMessageContainer">
        <i className="fa-solid fa-triangle-exclamation errorMessageContainer__exclamation"></i>
        <p className="errorMessageContainer__message">
          {errorMessage}
          <i className="fa-solid fa-face-frown errorMessageContainer__message--icon"></i>
        </p>
      </div>
    </>
  );
};

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string,
};

export default ErrorMessage;
