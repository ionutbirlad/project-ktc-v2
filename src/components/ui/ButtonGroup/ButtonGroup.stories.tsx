import { Meta, StoryObj } from "@storybook/nextjs";
import { type ButtonGroupAlignment } from "./ButtonGroup";

import Button from "../Button/Button";
import ButtonGroup from "./ButtonGroup";

type ButtonGroupMeta = Meta<typeof ButtonGroup>;
type Story = StoryObj<typeof ButtonGroup>;

const alignments: ButtonGroupAlignment[] = ["justify", "start", "end", "center", "stack"];

const playgroundStyle = {
  display: "grid",
  gap: "var(--gap-m)",
  width: "min(100%, 420px)",
} as const;

const rowStyle = {
  display: "grid",
  gridTemplateColumns: "80px minmax(0, 1fr)",
  alignItems: "center",
  gap: "var(--gap-m)",
} as const;

const labelStyle = {
  justifySelf: "end",
  padding: "var(--padding-xs) var(--padding-s)",
  borderRadius: "var(--radius-m)",
  backgroundColor: "var(--color-background-neutral-tertiary)",
  border: "1px solid var(--color-border-neutral-tertiary)",
  color: "var(--color-text-base)",
  fontFamily: "var(--p-family-mono)",
  fontSize: "var(--font-size-body-sm)",
} as const;

const frameStyle = {
  minHeight: "72px",
  display: "flex",
  alignItems: "center",
  padding: "var(--padding-m)",
  border: "2px dashed var(--color-border-base-tertiary)",
  borderRadius: "var(--radius-m)",
} as const;

const stackButtonStyle = {
  width: "100%",
} as const;

function renderButtons(alignment: ButtonGroupAlignment) {
  if (alignment === "stack") {
    return (
      <>
        <Button variant="subtle">Button</Button>
        <Button style={stackButtonStyle}>Button</Button>
      </>
    );
  }

  return (
    <>
      <Button variant="subtle">Button</Button>
      <Button>Button</Button>
    </>
  );
}

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
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <div style={playgroundStyle}>
      {alignments.map((alignment) => (
        <div key={alignment} style={rowStyle}>
          <span style={labelStyle}>{alignment}</span>

          <div style={frameStyle}>
            <ButtonGroup alignment={alignment}>{renderButtons(alignment)}</ButtonGroup>
          </div>
        </div>
      ))}
    </div>
  ),
};

export default meta;
