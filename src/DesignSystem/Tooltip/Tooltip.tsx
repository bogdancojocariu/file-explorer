import React, { PropsWithChildren, useState } from "react";

import classNames from "classnames";

import styles from "./styles.module.scss";

type TooltipProps = {
  content?: React.ReactNode;
};

export const Tooltip: React.FC<PropsWithChildren<TooltipProps>> = props => {
  const { content, children } = props;

  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div
      className={styles.tooltipContainer}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && content && (
        <div className={classNames(styles.tooltip)}>{content}</div>
      )}
    </div>
  );
};
