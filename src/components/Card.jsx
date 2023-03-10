import useModal from "../useModal";
import styles from "./Grid.module.css";

export const Card = ({ src, style }) => {
  const { setOpen, biggerPhotoStyle, getStyle } = useModal();

  return (
    <figure className={styles[style]}>
      <div
        style={getStyle()}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <div className={styles.containerBiggerPhoto}>
          <img src={src} style={{ ...biggerPhotoStyle }} />
        </div>
      </div>
      <img
        src={src}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      />
    </figure>
  );
};
