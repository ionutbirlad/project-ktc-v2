import type { Meta, StoryObj } from "@storybook/nextjs";

import AvatarGroup from "./AvatarGroup";

type AvatarGroupMeta = Meta<typeof AvatarGroup>;
type Story = StoryObj<typeof AvatarGroup>;

const meta: AvatarGroupMeta = {
  title: "UI/AvatarGroup",
  component: AvatarGroup,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["spaced", "overlap"],
    },
    overflowCount: {
      control: "text",
    },
  },
};

export const Spaced: Story = {
  args: {
    variant: "spaced",
    overflowCount: 3,
  },
};

export const overlapped: Story = {
  args: {
    variant: "overlap",
    overflowCount: 3,
  },
};

export default meta;
