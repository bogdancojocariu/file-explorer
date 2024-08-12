import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

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
    className,
    ...restOfProps
  } = props;

  const btnClassName = classNames(
    styles.button,
    [styles[size]],
    [styles[colorType]],
    className
  );

  return (
    <button className={btnClassName} {...restOfProps}>
      {props.children}
    </button>
  );
};
