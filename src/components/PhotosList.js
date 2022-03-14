import PropTypes from "prop-types";
import Photo from "./Photo";
import "../styles/components/PhotosList.scss";

const PhotosList = ({ photos }) => {
  const listElements = photos.map((eachPhoto, index) => (
    <li className="photoElement" alt="display-photo">
    <div className="photoElement__photoContainer">
      <div className="photoElement__photoContainer--indexContainer">
      </div>
      <img
        className="photoElement__photoContainer--photo"
        src={eachPhoto.photo}
        alt={eachPhoto}
      />
    </div>
  </li>
    // <Photo  />
  ));
  return (
    <section className="photosSection">
      <ul className="photosSection__photosListContainer">
        {listElements}
      </ul>
    </section>
  );
};

PhotosList.propTypes ={
  photos: PropTypes.array.isRequired,
}

export default PhotosList;