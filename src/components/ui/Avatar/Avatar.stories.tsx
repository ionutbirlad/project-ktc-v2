import type { Meta, StoryObj } from "@storybook/nextjs";

import Avatar from "./Avatar";

type AvatarMeta = Meta<typeof Avatar>;
type Story = StoryObj<typeof Avatar>;

const meta: AvatarMeta = {
  title: "UI/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
    },
    alt: {
      control: "text",
    },
    fallback: {
      control: "text",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    variant: {
      control: "select",
      options: ["circle", "square"],
    },
  },
};

export const Circle: Story = {
  args: {
    variant: "circle",
  },
};

export const Square: Story = {
  args: {
    variant: "square",
  },
};

export default meta;
