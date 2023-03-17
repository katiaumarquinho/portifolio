import { useCallback, useState, useEffect } from "react";

const useModal = () => {
  const [open, setOpen] = useState(false);

  const getStyle = useCallback(() => {
    return {
      display: open ? "flex" : "none",
      width: "100%",
      height: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 4,
      backgroundColor: "rgb(6,0,26,0.8)",
      alignItems: "center",
      justifyContent: "center",
    };
  }, [open]);

  useEffect(() => {
    const zoomInAnimation = `@keyframes zoomIn {
      from { transform: scale(0.1); }
      to { transform: scale(1); }
    }`;
    const zoomOutAnimation = `@keyframes zoomOut {
      from { transform: scale(1); }
      to { transform: scale(0.1); }
    }`;

    const styles = document.createElement("style");
    styles.appendChild(
      document.createTextNode(zoomInAnimation + zoomOutAnimation)
    );
    document.head.appendChild(styles);

    return () => {
      document.head.removeChild(styles);
    };
  }, []);

  const biggerPhotoStyle = {
    height: "auto",
    width: "50vw",
    maxWidth: "50%",
    animation: open ? "zoomIn 0.5s forwards" : "zoomOut 0.5s forwards",
  };

  return { biggerPhotoStyle, getStyle, setOpen };
};

export default useModal;
