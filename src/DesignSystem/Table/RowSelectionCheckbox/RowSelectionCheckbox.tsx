import { Checkbox, CheckboxProps, InputSize, Tooltip } from "@design-system";

export type RowSelectionCheckboxProps = CheckboxProps & {
  disabledSelectionContent?: string;
};
export const RowSelectionCheckbox: React.FC<
  RowSelectionCheckboxProps
> = props => {
  const { disabledSelectionContent, ...restOfCheckboxProps } = props;

  const renderCheckbox = () => {
    return <Checkbox inputSize={InputSize.Medium} {...restOfCheckboxProps} />;
  };

  if (!restOfCheckboxProps.disabled) {
    return renderCheckbox();
  }

  return (
    <Tooltip content={disabledSelectionContent}>{renderCheckbox()}</Tooltip>
  );
};
