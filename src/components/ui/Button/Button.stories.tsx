import { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

type ButtonMeta = Meta<typeof Button>;
type Story = StoryObj<typeof Button>;

const meta: ButtonMeta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    intent: {
      control: "select",
      options: ["default", "danger"],
    },
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

export const normal: Story = {
  args: {
    children: "TEXT",
    intent: "default",
    variant: "primary",
  },
};

export const danger: Story = {
  args: {
    children: "TEXT",
    intent: "danger",
    variant: "primary",
  },
};

export default meta;
