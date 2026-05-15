import type { Meta, StoryObj } from "@storybook/react";

import IconButton from "./IconButton";

type IconButtonMeta = Meta<typeof IconButton>;
type Story = StoryObj<typeof IconButton>;

const meta: IconButtonMeta = {
  title: "UI/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "neutral", "subtle"],
    },
    size: {
      control: "select",
      options: ["medium", "small"],
    },
  },
};

export const Primary: Story = {
  args: {
    children: "Icon",
    variant: "primary",
  },
};

export const Neutral: Story = {
  args: {
    children: "Icon",
    variant: "neutral",
  },
};

export const Subtle: Story = {
  args: {
    children: "Icon",
    variant: "subtle",
  },
};

export default meta;
