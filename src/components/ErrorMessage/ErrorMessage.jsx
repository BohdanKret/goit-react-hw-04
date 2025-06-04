import css from "./ErrorMessage.module.css";
import { MdErrorOutline } from "react-icons/md";

export default function ErrorMessage() {
  return (
    <div className={css.errorContainer}>
      <strong className={css.errorMessage}>
        <MdErrorOutline className={css.icon} />
        Oops, something went wrong!
        <br />
        Please, reload this page.
      </strong>
    </div>
  );
}
