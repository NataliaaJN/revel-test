import PropTypes from "prop-types";
import ErrorMessage from "../handleErrors/ErrorMessage";
import Loader from "../loader/Loader";
import PhotosList from "./PhotosList";

const Main = ({ errorMessage, isLoading, photos }) => {
  return (
    <main className="main">
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
      <Loader isLoading={isLoading} />
      <PhotosList photos={photos} />
    </main>
  );
};

Main.propTypes = {
    errorMessage: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    photos: PropTypes.array.isRequired,
};

export default Main;
