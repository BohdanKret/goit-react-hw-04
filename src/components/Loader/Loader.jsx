import { GridLoader } from "react-spinners";
import css from "./Loader.module.css";

export default function Loader( {loading}) {
  return (
    <div className={css.loaderWrapper}>
      <GridLoader
        size={60}
        color={"#808080"}
        loading={loading}
        speedMultiplier={1.5}
        aria-label="Loading Spinner"
        data-testid="loader"
        cssOverride={{
          display: "block",
          margin: "0 auto",
          borderColor: "red",
        }}
      />
    </div>
  );
}
