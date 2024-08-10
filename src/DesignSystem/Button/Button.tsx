import { ButtonHTMLAttributes } from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";

export enum ButtonSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
  type?: ButtonType;
};

export const Button: React.FC<ButtonProps> = props => {
  const { size = ButtonSize.Medium, type = ButtonType.Primary } = props;

  const btnClassName = classNames(
    styles.button,
    [styles[size]],
    [styles[type]]
  );

  return (
    <button className={btnClassName} {...props}>
      {props.children}
    </button>
  );
};
