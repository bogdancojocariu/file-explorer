import classNames from "classnames";
import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

export enum InputSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

export enum InputColorType {
  Primary = "primary",
  Secondary = "secondary",
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  inputSize?: InputSize;
  colorType?: InputColorType;
  label?: string;
  reverse?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, inputRef) => {
    const {
      inputSize = InputSize.Medium,
      colorType = InputColorType.Primary,
      label = "",
      className,
      reverse,
      ...restOfProps
    } = props;

    const wrapperClassName = classNames(
      styles.wrapper,
      [styles[colorType]],
      [styles[inputSize]],
      className,
      {
        [styles.reverse]: !!reverse,
      }
    );

    return (
      <div className={wrapperClassName}>
        {label && <label htmlFor={restOfProps.name}>{label}</label>}
        <input ref={inputRef} {...restOfProps} />
      </div>
    );
  }
);
