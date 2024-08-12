import { Meta } from "@storybook/react";
import { FileStatusEnum } from "../types";
import { FileStatusCell } from "./FileStatusCell";
import { StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Files/FileStatus",
  component: FileStatusCell,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    value: FileStatusEnum.Available,
  },
  argTypes: {
    value: {
      control: "select",
      options: [FileStatusEnum.Available, FileStatusEnum.Scheduled],
    },
  },
} satisfies Meta<typeof FileStatusCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Avaialble: Story = {
  args: {
    value: FileStatusEnum.Available,
  },
};
export const Scheduled: Story = {
  args: {
    value: FileStatusEnum.Scheduled,
  },
};
