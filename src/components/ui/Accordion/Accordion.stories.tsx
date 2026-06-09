import type { Meta, StoryObj } from "@storybook/nextjs";

import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";

type AccordionMeta = Meta<typeof Accordion>;
type Story = StoryObj<typeof Accordion>;

function renderItems() {
  return (
    <>
      <AccordionItem title="Title" description="Description" />
      <AccordionItem title="Title" description="Description" />
      <AccordionItem title="Title" description="Description" />
    </>
  );
}

const meta: AccordionMeta = {
  title: "UI/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};

export const Default: Story = {
  render: () => <Accordion>{renderItems()}</Accordion>,
};

export default meta;
