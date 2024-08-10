import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input, InputSize, InputColorType } from "./Input";

const meta = {
  title: "DesignSystem/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
    disabled: false,
    value: "test",
    inputSize: InputSize.Medium,
  },
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
    disabled: {
      control: "boolean",
    },
    value: {
      control: "text",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    colorType: InputColorType.Primary,
    label: "Label",
  },
};
