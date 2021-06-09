import React from "react";
import styles from "./ImageEditor.module.css";
function ActionButton(props) {
  const { children, tooltip = "", ...buttonProps } = props;
  return (
    // <Tooltip
    //   placement="bottom"
    //   overlay={<span>Tooltip</span>}
    //   {...tooltipProps}
    // >
    <button
      data-tip={tooltip}
      data-effect="solid"
      data-place="bottom"
      data-background-color="#6d28d9"
      className={styles.actionButton}
      {...buttonProps}
    >
      {children}
    </button>
    // </Tooltip>
  );
}

export default ActionButton;
