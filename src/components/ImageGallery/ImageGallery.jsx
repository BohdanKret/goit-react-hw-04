import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images }) {
  return (
    <section className={css.imageGallery}>
      <div className={css.container}>
        <ul className={css.imageGalleryList}>
          {images.map((image) => {
            return (
              <li className={css.imageGalleryItem} key={image.id}>
                <ImageCard likes={image.likes} src={image.urls} alt={image.alt_description} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
