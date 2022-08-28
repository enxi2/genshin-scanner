import { ChangeEvent, DragEvent, useCallback } from "react";

import styles from "./Dropzone.module.scss";

interface DropzoneProps {
  filename: string | null;
  thumbnail: string | null;
  error: string | null;
  onUpload: (file: File) => void;
}

export default function Dropzone(props: DropzoneProps) {
  const { filename, thumbnail, error, onUpload } = props;

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files != null) {
        console.log(e.target.files);
        onUpload(e.target.files[0]);
      }
    },
    [onUpload]
  );

  const preventDefault = useCallback(
    (e: DragEvent<HTMLInputElement | HTMLLabelElement>) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    },
    []
  );

  const handleDrop = useCallback(
    (e: DragEvent<HTMLInputElement | HTMLLabelElement>) => {
      if (e.dataTransfer.files.length > 0) {
        onUpload(e.dataTransfer.files.item(0)!);
      }
      e.preventDefault();
      e.stopPropagation();
      return false;
    },
    [onUpload]
  );

  return (
    <div className={styles.dropzone}>
      <label
        htmlFor="file-input"
        className={styles.label}
        onDrag={preventDefault}
        onDragEnter={preventDefault}
        onDragOver={preventDefault}
        onDrop={handleDrop}
      >
        {filename != null && thumbnail != null ? (
          <div>
            {filename}
            <br />
            <img src={thumbnail} />
          </div>
        ) : (
          <div>
            Drag and drop an image or video,
            <br />
            or click here to select a file
          </div>
        )}
        {error != null ? <div className={styles.error}>{error}</div> : null}
        <input
          id="file-input"
          className={styles.input}
          type="file"
          accept="image/*,video/*"
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
