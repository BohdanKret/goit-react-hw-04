import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(46, 47, 66, 0.40)",
    opacity: 1,
    visibility: "visible",
    pointerEvents: "auto",
    transition: [
      "opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)",
      "visibility 250ms cubic-bezier(0.4, 0, 0.2, 1)",
    ],
    zIndex: 3,
  },
  content: {
    position: "absolute",
    width: 883,
    minWidth: 800,
    minHeight: 756,
    zIndex: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(1)",
    border: 0,
    borderRadius: 8,
    background: "#FCFCFC",
    boxShadow: [
      "0px 1px 1px 0px rgba(0, 0, 0, 0.14)",
      "0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
      "0px 2px 1px 0px rgba(0, 0, 0, 0.20)",
    ],
    padding: "0 0 10px",
    // overflow: "hidden",
    transition: "transform 250ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

export default function ImageModal({ isOpen, onClose, imgUrl }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={true}
    >
      <img src={imgUrl} alt="Large image" className={css.image} />
      {/* <div className={css.modalWrapper}>
        <div className={css.imageWrapper}>
        </div>
        <div className={css.authorContainer}>
          <div className={css.authorImageWrapper}>
            <img className={css.authorImage} />
          </div>
          <div className={css.authorInfo}>
            <p>{}</p>
            <a href={eroor}>{}</a>
          </div>
        </div>
        <div className={css.likesWrapper}>
          <p>Likes</p>
          <p>{}</p>
        </div>
      </div> */}
    </Modal>
  );
}
