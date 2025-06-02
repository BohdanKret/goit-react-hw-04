import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images }) {
  return (
    <section className={css.imageGallery}>
      <div className={css.container}>
        <ul>
          {images.map((image) => {
            return (
              <li key={image.id}>
                <ImageCard alt={image.alt_description} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
