import type { Meta, StoryObj } from "@storybook/nextjs";

import Avatar from "../Avatar/Avatar";
import AvatarGroup from "./AvatarGroup";

import AvatarMock from "/public/assets/mocks/me.jpeg";

type AvatarGroupMeta = Meta<typeof AvatarGroup>;
type Story = StoryObj<typeof AvatarGroup>;

function renderAvatars() {
  return (
    <>
      <Avatar src={AvatarMock} size="large" alt="Avatar mock picture" />
      <Avatar src={AvatarMock} size="large" alt="Avatar mock picture" />
      <Avatar src={AvatarMock} size="large" alt="Avatar mock picture" />
    </>
  );
}

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
      control: "number",
    },
  },
};

export const Spaced: Story = {
  args: {
    variant: "spaced",
    overflowCount: 3,
    "aria-label": "Avatar group example",
  },
  render: (args) => <AvatarGroup {...args}>{renderAvatars()}</AvatarGroup>,
};

export const Overlapped: Story = {
  args: {
    variant: "overlap",
    overflowCount: 3,
    "aria-label": "Avatar group example",
  },
  render: (args) => <AvatarGroup {...args}>{renderAvatars()}</AvatarGroup>,
};

export default meta;
