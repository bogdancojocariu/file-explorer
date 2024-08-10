import { ButtonHTMLAttributes } from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";

export enum ButtonSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

export enum ButtonColorType {
  Primary = "primary",
  Secondary = "secondary",
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
  colorType?: ButtonColorType;
};

export const Button: React.FC<ButtonProps> = props => {
  const {
    size = ButtonSize.Medium,
    colorType = ButtonColorType.Primary,
    ...restOfProps
  } = props;

  const btnClassName = classNames(
    styles.button,
    [styles[size]],
    [styles[colorType]]
  );

  return (
    <button className={btnClassName} {...restOfProps}>
      {props.children}
    </button>
  );
};
