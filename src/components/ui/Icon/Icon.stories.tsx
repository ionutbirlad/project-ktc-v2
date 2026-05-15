import type { Meta, StoryObj } from "@storybook/react";

import Icon, { icons, type IconNames } from "./Icon";

type IconMeta = Meta<typeof Icon>;
type Story = StoryObj<typeof Icon>;

const iconNames = Object.keys(icons) as IconNames[];

const meta: IconMeta = {
  title: "UI/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
      options: iconNames,
    },
    size: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", "xxl"],
    },
  },
};

export const BaseIcon: Story = {
  args: {
    name: "star",
    size: "m",
  },
};

export default meta;
