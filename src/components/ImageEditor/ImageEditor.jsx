import React, { useState, useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import {
  BiRotateLeft,
  BiRotateRight,
  BiReset,
  BiDownload,
} from "react-icons/bi";
import styles from "./ImageEditor.module.css";
import ActionButton from "./ActionButton.jsx";
import UploadImageButton from "./UploadImageButton.jsx";
import { useEditorActions } from "./hooks/useEditorActions.js";

function ImageEditor() {
  const cropperRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(
    "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg"
  );
  const { scale, onScale, onRotate, onReset, onDownload } =
    useEditorActions(cropperRef);

  const onImageUpload = e => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();

    reader.onload = e => {
      setImageSrc(e.target.result);
      cropperRef.current.cropper.reset();
    };

    reader.readAsDataURL(file);
  };
  return (
    <div className={styles.imageEditor}>
      <div>
        <Cropper
          src={imageSrc}
          style={{ height: 400, width: "100%" }}
          initialAspectRatio={16 / 9}
          guides={false}
          ref={cropperRef}
        />
        <div className={styles.actionsBlock}>
          <ActionButton tooltip="Rotate Left" onClick={onRotate("left")}>
            <BiRotateLeft size={30} />
          </ActionButton>
          <ActionButton tooltip="Rotate Right" onClick={onRotate("right")}>
            <BiRotateRight size={30} />
          </ActionButton>

          <div className={styles.scaleFieldBlock}>
            <input
              type="range"
              min="0.2"
              max="2"
              step="0.2"
              value={scale}
              aria-label="scale"
              id="scale"
              onChange={onScale}
            />
            <label htmlFor="scale">Scale</label>
          </div>
          <ActionButton tooltip="Reset" onClick={onReset}>
            <BiReset size={30} />
          </ActionButton>
          <ActionButton tooltip="Download Image" onClick={onDownload}>
            <BiDownload size={30} />
          </ActionButton>
        </div>
        <UploadImageButton onImageUpload={onImageUpload} />
      </div>
    </div>
  );
}

export default ImageEditor;
