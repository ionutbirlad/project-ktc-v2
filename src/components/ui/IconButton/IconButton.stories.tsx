import type { Meta, StoryObj } from "@storybook/react";

import Icon from "../Icon/Icon";

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
    disabled: {
      control: "select",
      options: [false, true],
    },
  },
};

export const Primary: Story = {
  args: {
    children: <Icon name="star" size="s" />,
    variant: "primary",
  },
};

export const Neutral: Story = {
  args: {
    children: <Icon name="star" size="s" />,
    variant: "neutral",
  },
};

export const Subtle: Story = {
  args: {
    children: <Icon name="star" size="s" />,
    variant: "subtle",
  },
};

export default meta;
