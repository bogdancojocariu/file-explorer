import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Checkbox } from "./Checkbox";
import { InputColorType, InputSize } from "../Input/Input";

const meta = {
  title: "DesignSystem/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onChange: fn(), reverse: true, indeterminate: false },
  argTypes: {
    colorType: {
      control: "select",
      options: [InputColorType.Primary, InputColorType.Secondary],
    },
    inputSize: {
      control: "select",
      options: [InputSize.Small, InputSize.Medium, InputSize.Large],
    },
    label: {
      control: "text",
    },
    reverse: {
      control: "boolean",
    },
    indeterminate: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    colorType: InputColorType.Primary,
    label: "Test",
  },
};
export const Indeterminate: Story = {
  args: {
    colorType: InputColorType.Primary,
    label: "Test",
    indeterminate: true,
  },
};
