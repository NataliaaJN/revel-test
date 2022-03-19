import PropTypes from "prop-types";
import Loader from "../loader/Loader";
import PhotosList from "./PhotosList";

const Main = ({ isLoading, photos }) => {
  return (
    <main className="main">
      <Loader isLoading={isLoading} />
      <PhotosList photos={photos} />
    </main>
  );
};

Main.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  photos: PropTypes.array.isRequired,
};

export default Main;
