import PropTypes from "prop-types";
import "../styles/components/Photo.scss";

const Photo = ({ eachPhoto, index }) => {
  return (
    <li className="photoElement" alt="display-photo">
      <div className="photoElement__photoContainer">
        <div className="photoElement__photoContainer--indexContainer">
          <p className="photoElement__photoContainer--indexContainer--indexNumber">
            #0{index + 1}
          </p>
        </div>
        <img
          className="photoElement__photoContainer--photo"
          src={eachPhoto.photo}
          alt={eachPhoto}
        />
      </div>
    </li>
  );
};

Photo.propTypes = {
  eachPhoto: PropTypes.object.isRequired,
};

export default Photo;
