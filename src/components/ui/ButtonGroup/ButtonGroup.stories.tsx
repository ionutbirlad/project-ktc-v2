import { Meta, StoryObj } from "@storybook/nextjs";

import ButtonGroup from "./ButtonGroup";

type ButtonGroupMeta = Meta<typeof ButtonGroup>;
type Story = StoryObj<typeof ButtonGroup>;

const meta: ButtonGroupMeta = {
  title: "UI/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  argTypes: {
    alignment: {
      control: "select",
      options: ["justify", "start", "end", "center", "stack"],
    },
  },
};

export const AllVariants: Story = {
  args: {
    alignment: "justify",
  },
};

export default meta;
