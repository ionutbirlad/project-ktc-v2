import type { Meta, StoryObj } from "@storybook/react";
import type { IconButtonSize, IconButtonVariant } from "./IconButton";

import Icon from "../Icon/Icon";

import IconButton from "./IconButton";

type IconButtonMeta = Meta<typeof IconButton>;
type Story = StoryObj<typeof IconButton>;

const sizes: IconButtonSize[] = ["medium", "small"];
const variants: IconButtonVariant[] = ["primary", "neutral", "subtle"];

const playgroundStyle = {
  display: "grid",
  gap: "var(--gap-l)",
  width: "min(100%, 520px)",
} as const;

const sizeGroupStyle = {
  display: "grid",
  gridTemplateColumns: "88px minmax(0, 1fr)",
  alignItems: "center",
  gap: "var(--gap-l)",
} as const;

const variantGridStyle = {
  display: "grid",
  gap: "var(--gap-m)",
} as const;

const variantRowStyle = {
  display: "grid",
  gridTemplateColumns: "96px minmax(0, 1fr)",
  alignItems: "center",
  gap: "var(--gap-m)",
} as const;

const buttonRowStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(64px, 1fr))",
  alignItems: "center",
  justifyItems: "center",
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
  padding: "var(--padding-m)",
  border: "2px dashed var(--color-border-base-tertiary)",
  borderRadius: "var(--radius-m)",
} as const;

const columnLabelsStyle = {
  display: "grid",
  gridTemplateColumns: "96px minmax(0, 1fr)",
  gap: "var(--gap-m)",
} as const;

const columnLabelsInnerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(64px, 1fr))",
  justifyItems: "center",
  gap: "var(--gap-m)",
} as const;

function renderIconButton(size: IconButtonSize, variant: IconButtonVariant, disabled = false) {
  return (
    <IconButton
      aria-label={`${variant} ${size} icon button`}
      disabled={disabled}
      size={size}
      variant={variant}
    >
      <Icon name="star" size="s" />
    </IconButton>
  );
}

const meta: IconButtonMeta = {
  title: "UI/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "neutral", "subtle"],
    },
    size: {
      control: "select",
      options: ["medium", "small"],
    },
    disabled: {
      control: "select",
      options: [false, true],
    },
  },
};

export const Primary: Story = {
  args: {
    children: <Icon name="star" size="s" />,
    variant: "primary",
  },
};

export const Neutral: Story = {
  args: {
    children: <Icon name="star" size="s" />,
    variant: "neutral",
  },
};

export const Subtle: Story = {
  args: {
    children: <Icon name="star" size="s" />,
    variant: "subtle",
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
      <div style={frameStyle}>
        <div style={variantGridStyle}>
          {sizes.map((size) => (
            <div key={size} style={sizeGroupStyle}>
              <span style={labelStyle}>{size}</span>

              <div style={variantGridStyle}>
                {variants.map((variant) => (
                  <div key={`${size}-${variant}`} style={variantRowStyle}>
                    <span style={labelStyle}>{variant}</span>

                    <div style={buttonRowStyle}>
                      {renderIconButton(size, variant)}
                      {renderIconButton(size, variant)}
                      {renderIconButton(size, variant, true)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={columnLabelsStyle}>
        <span />
        <div style={columnLabelsInnerStyle}>
          <span style={labelStyle}>Default</span>
          <span style={labelStyle}>Hover</span>
          <span style={labelStyle}>Disabled</span>
        </div>
      </div>
    </div>
  ),
};

export default meta;
