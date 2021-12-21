import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";
//import s from "../ImageGallery/ImageGallery.module.css";

export const ImageGallery = () => {
  return (
    <ul class="gallery">
      <ImageGalleryItem />
    </ul>
  );
};

ImageGallery.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
