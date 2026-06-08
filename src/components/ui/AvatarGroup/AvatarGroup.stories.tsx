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
  },
};

export const Spaced: Story = {
  args: {
    variant: "spaced",
  },
};

export const overlapped: Story = {
  args: {
    variant: "overlap",
  },
};

export default meta;
