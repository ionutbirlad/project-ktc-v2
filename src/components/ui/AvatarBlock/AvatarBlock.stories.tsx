import type { Meta, StoryObj } from "@storybook/nextjs";

import Avatar from "../Avatar/Avatar";
import AvatarBlock from "./AvatarBlock";

import AvatarMock from "/public/assets/mocks/me.jpeg";

type AvatarBlockMeta = Meta<typeof AvatarBlock>;
type Story = StoryObj<typeof AvatarBlock>;

function renderAvatar() {
  return <Avatar src={AvatarMock} size="large" alt="Avatar mock picture" />;
}

const meta: AvatarBlockMeta = {
  title: "UI/AvatarBlock",
  component: AvatarBlock,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
  },
};

export const Default: Story = {
  args: {
    title: "Title",
    description: "Description",
  },
  render: (args) => <AvatarBlock {...args}>{renderAvatar()}</AvatarBlock>,
};

export const LongText: Story = {
  args: {
    title: "Very long avatar block title that should truncate",
    description: "Very long description that should also truncate correctly",
  },
  render: (args) => <AvatarBlock {...args}>{renderAvatar()}</AvatarBlock>,
};

export default meta;
