import { useEffect, useRef } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

import { Input, InputColorType, InputProps, InputSize } from "../Input/Input";

export type CheckboxProps = InputProps & {
  indeterminate?: boolean;
};

export const Checkbox: React.FC<CheckboxProps> = props => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type: _type,
    reverse = false,
    inputSize = InputSize.Medium,
    colorType = InputColorType.Primary,
    checked,
    indeterminate,
    ...restOfProps
  } = props;

  const wrapperClassName = classNames(
    styles.wrapper,
    [styles[colorType]],
    [styles[inputSize]]
  );

  const inputRef = useRef<HTMLInputElement>(null);

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
  // This is set using the HTMLInputElement object's indeterminate property via JavaScript
  // (it cannot be set using an HTML attribute):
  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.indeterminate = !!indeterminate;
    }
  }, [indeterminate]);

  return (
    <div className={wrapperClassName}>
      <Input
        ref={inputRef}
        {...restOfProps}
        type="checkbox"
        reverse={reverse}
        colorType={colorType}
        inputSize={inputSize}
        checked={checked && !indeterminate}
      />
    </div>
  );
};
