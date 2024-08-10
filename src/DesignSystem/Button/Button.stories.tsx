import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button, ButtonSize, ButtonColorType } from "./Button";

const meta = {
  title: "DesignSystem/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn(), disabled: false },
  argTypes: {
    colorType: {
      control: "select",
      options: [ButtonColorType.Primary, ButtonColorType.Secondary],
    },
    size: {
      control: "select",
      options: [ButtonSize.Small, ButtonSize.Medium, ButtonSize.Large],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    colorType: ButtonColorType.Primary,
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    colorType: ButtonColorType.Secondary,
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: ButtonSize.Large,
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: ButtonSize.Small,
    children: "Button",
  },
};

export const Disabled: Story = {
  args: {
    size: ButtonSize.Large,
    children: "Disabled",
    disabled: true,
  },
};
