import PropTypes from "prop-types";
//import s from "../ImageGalleryItem/ImageGalleryItem.module.css";

export const ImageGalleryItem = () => {
  return (
    <li class="gallery-item">
      <img src="" alt="" />
      <p>omg</p>
    </li>
  );
};

ImageGalleryItem.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
