import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { useEffect } from "react";

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
    overflow: "hidden",
  },
  content: {
    position: "absolute",
    width: "100%",
    maxWidth: 800,
    minHeight: 756,
    zIndex: 4,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(1)",
    border: 0,
    borderRadius: 10,
    background: "#FCFCFC",
    boxShadow: [
      "0px 1px 1px 0px rgba(0, 0, 0, 0.14)",
      "0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
      "0px 2px 1px 0px rgba(0, 0, 0, 0.20)",
    ],
    padding: "10px",
    overflow: "auto",
    transition: "transform 250ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

export default function ImageModal({ isOpen, onClose, imgUrl }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={true}
    >
      <div className={css.modalWrapper}>
        <div className={css.imageWrapper}>
          <img
            src={imgUrl.urls?.full}
            alt="Large image"
            className={css.image}
          />
        </div>
        <div className={css.authorContainer}>
          <div className={css.authorData}>
            <div className={css.authorImageWrapper}>
              <img
                src={imgUrl.user?.profile_image?.medium}
                alt="author photo"
                className={css.authorImage}
              />
            </div>
            <div className={css.authorInfo}>
              <p>{imgUrl.user?.name}</p>
              <a
                href={`https://unsplash.com/@${imgUrl.user?.username}`}
                target="_blank"
              >
                Unsplash profile: @{imgUrl.user?.username}
              </a>
            </div>
          </div>
          <div className={css.authorData}>
            {imgUrl.user?.portfolio_url !== null && (
              <a
                href={imgUrl.user?.portfolio_url}
                className={css.authorSiteButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Author site
              </a>
            )}
            <div className={css.likesWrapper}>
              <p className={css.likes}>Likes</p>
              <p>{imgUrl.likes}</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
