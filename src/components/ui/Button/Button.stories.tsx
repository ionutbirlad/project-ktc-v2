import { Meta, StoryObj } from "@storybook/react";
import type { ButtonProps, ButtonSize } from "./Button.types";

import Button from "./Button";

type ButtonMeta = Meta<typeof Button>;
type Story = StoryObj<typeof Button>;
type ButtonVariant = NonNullable<ButtonProps["variant"]>;

const defaultVariants: ButtonVariant[] = ["primary", "neutral", "subtle"];
const dangerVariants: Exclude<ButtonVariant, "neutral">[] = ["primary", "subtle"];
const sizes: ButtonSize[] = ["medium", "small"];

const playgroundStyle = {
  display: "grid",
  gap: "var(--gap-m)",
  width: "min(100%, 560px)",
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
  gridTemplateColumns: "repeat(3, minmax(80px, 1fr))",
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
  gridTemplateColumns: "repeat(3, minmax(80px, 1fr))",
  justifyItems: "center",
  gap: "var(--gap-m)",
} as const;

const stateButtonStyle = {
  maxWidth: "100%",
} as const;

const dangerRowStyle = {
  display: "grid",
  gridTemplateColumns: "96px minmax(0, 1fr)",
  alignItems: "center",
  gap: "var(--gap-m)",
} as const;

function renderDefaultButton(size: ButtonSize, variant: ButtonVariant, disabled = false) {
  return (
    <Button disabled={disabled} size={size} style={stateButtonStyle} variant={variant}>
      {variant}
    </Button>
  );
}

function renderDangerButton(
  size: ButtonSize,
  variant: Exclude<ButtonVariant, "neutral">,
  disabled = false
) {
  return (
    <Button
      disabled={disabled}
      intent="danger"
      size={size}
      style={stateButtonStyle}
      variant={variant}
    >
      {variant}
    </Button>
  );
}

const meta: ButtonMeta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    intent: {
      control: "select",
      options: ["default", "danger"],
    },
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

export const normal: Story = {
  args: {
    children: "Button",
    intent: "default",
    variant: "primary",
  },
};

export const danger: Story = {
  args: {
    children: "Button",
    intent: "danger",
    variant: "primary",
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
                {defaultVariants.map((variant) => (
                  <div key={`${size}-default-${variant}`} style={variantRowStyle}>
                    <span style={labelStyle}>{variant}</span>

                    <div style={buttonRowStyle}>
                      {renderDefaultButton(size, variant)}
                      {renderDefaultButton(size, variant)}
                      {renderDefaultButton(size, variant, true)}
                    </div>
                  </div>
                ))}

                <div style={dangerRowStyle}>
                  <span style={labelStyle}>danger</span>

                  <div style={variantGridStyle}>
                    {dangerVariants.map((variant) => (
                      <div key={`${size}-danger-${variant}`} style={buttonRowStyle}>
                        {renderDangerButton(size, variant)}
                        {renderDangerButton(size, variant)}
                        {renderDangerButton(size, variant, true)}
                      </div>
                    ))}
                  </div>
                </div>
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
