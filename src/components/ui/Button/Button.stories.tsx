import { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

type ButtonMeta = Meta<typeof Button>;
type Story = StoryObj<typeof Button>;
type ButtonSize = "medium" | "small";
type ButtonVariant = "primary" | "neutral" | "subtle";

const defaultVariants: ButtonVariant[] = ["primary", "neutral", "subtle"];
const dangerVariants: Exclude<ButtonVariant, "neutral">[] = ["primary", "subtle"];
const sizes: ButtonSize[] = ["medium", "small"];

const storySectionStyle = {
  display: "grid",
  gap: "var(--gap-xl)",
} as const;

const storyGroupStyle = {
  display: "grid",
  gap: "var(--gap-m)",
} as const;

const storyTitleStyle = {
  margin: 0,
  fontFamily: "var(--p-family-sans)",
  fontSize: "var(--font-size-body-md)",
  fontWeight: "var(--font-weight-body-strong)",
  color: "var(--color-text-base)",
} as const;

const storyRowStyle = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "var(--gap-s)",
} as const;

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
  render: () => (
    <div style={storySectionStyle}>
      {sizes.map((size) => (
        <div key={size} style={storyGroupStyle}>
          <h3 style={storyTitleStyle}>{size}</h3>

          <div style={storyGroupStyle}>
            <div style={storyRowStyle}>
              {defaultVariants.map((variant) => (
                <Button key={`${size}-default-${variant}`} size={size} variant={variant}>
                  {variant}
                </Button>
              ))}
              {defaultVariants.map((variant) => (
                <Button
                  key={`${size}-default-${variant}-disabled`}
                  size={size}
                  variant={variant}
                  disabled
                >
                  {variant}
                </Button>
              ))}
            </div>

            <div style={storyRowStyle}>
              {dangerVariants.map((variant) => (
                <Button
                  key={`${size}-danger-${variant}`}
                  intent="danger"
                  size={size}
                  variant={variant}
                >
                  {variant}
                </Button>
              ))}
              {dangerVariants.map((variant) => (
                <Button
                  key={`${size}-danger-${variant}-disabled`}
                  intent="danger"
                  size={size}
                  variant={variant}
                  disabled
                >
                  {variant}
                </Button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
};

export default meta;
