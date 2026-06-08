import type { Meta, StoryObj } from "@storybook/nextjs";

import Avatar from "./Avatar";

import AvatarMock from "/public/assets/mocks/me.jpeg";

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
    src: AvatarMock,
    alt: "Avatar mock picture",
  },
};

export const Square: Story = {
  args: {
    variant: "square",
    src: AvatarMock,
    alt: "Avatar mock picture",
  },
};

export const Fallback: Story = {
  args: {
    variant: "square",
    src: undefined,
    fallback: "I",
  },
};

export default meta;
