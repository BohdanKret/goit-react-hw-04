import css from "./ImageCard.module.css";

export default function ImageCard({ likes, src, alt, onClick }) {
  return (
    <div className={css.imageWrapper} onClick={onClick}>
      <img className={css.image} src={src.small} alt={alt} />
    </div>
  );
}
