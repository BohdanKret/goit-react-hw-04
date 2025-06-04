import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.buttomWrapper}>
      <button className={css.buttonLoadMore} onClick={onClick}>Load more</button>
    </div>
  );
}
