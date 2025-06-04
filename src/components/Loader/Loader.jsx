import { MoonLoader } from "react-spinners";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div>
      <p>lol</p>
      {/* <MoonLoader
        cssOverride={css.loader}
        size={150}
        color={"#123abc"}
        loading={this.state.loading}
        speedMultiplier={1.5}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}
    </div>
  );
}
