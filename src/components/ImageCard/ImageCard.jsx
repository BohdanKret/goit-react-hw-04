import css from "./ImageCard.module.css";

export default function ImageCard({ likes, src, alt }) {
  return (
    <div className={css.imageWrapper}>
      <img className={css.image} src={src.small} alt={alt} />
    </div>
  );
}
