import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button, ButtonSize, ButtonType } from "./Button";

const meta = {
  title: "DesignSystem/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: { onClick: fn() },
  argTypes: {
    type: {
      control: "select",
      options: [ButtonType.Primary, ButtonType.Secondary],
    },
    size: {
      control: "select",
      options: [ButtonSize.Small, ButtonSize.Medium, ButtonSize.Large],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: ButtonType.Primary,
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    type: ButtonType.Secondary,
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
