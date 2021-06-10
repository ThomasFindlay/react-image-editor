import { useState } from "react";

export const useEditorActions = cropperRef => {
  const [scale, setScale] = useState(1);
  const onRotate = direction => () => {
    let angle = 0;
    let angleConfig = {
      left: -30,
      right: 30,
    };
    angle = angleConfig[direction] ?? 0;
    cropperRef.current.cropper.rotate(angle);
  };

  const onScale = e => {
    const scaleValue = parseFloat(e.target.value);
    setScale(scaleValue);
    cropperRef.current.cropper.scale(scaleValue);
  };

  const onReset = () => {
    const cropper = cropperRef.current.cropper;
    cropper.reset();
    setScale(1);
  };

  const onDownload = () => {
    const data = cropperRef.current.cropper.getCroppedCanvas();
    data.toBlob(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "React Image Editor.jpg";
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  return {
    scale,
    onRotate,
    onScale,
    onReset,
    onDownload,
  };
};
