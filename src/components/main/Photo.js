import PropTypes from "prop-types";
import "../../styles/components/main/Photo.scss";

const Photo = ({ eachPhoto, index }) => {
  const getIndexNumber = () => {
    const photoIndex = index + 1;
    const indexFormatted = index < 9 ? `#0${photoIndex}` : `#${photoIndex}`;

    return (
      <p className="photoElement__photoContainer--indexContainer--indexNumber">
        {indexFormatted}
      </p>
    );
  };
  return (
    <li className="photoElement">
      <div className="photoElement__photoContainer">
        <div className="photoElement__photoContainer--indexContainer">
          {getIndexNumber()}
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
  index: PropTypes.number.isRequired,
};

export default Photo;
