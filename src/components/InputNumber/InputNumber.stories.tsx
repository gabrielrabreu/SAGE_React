import { Meta, StoryObj } from "@storybook/react";

import InputNumber from "./InputNumber";

const meta: Meta<typeof InputNumber> = {
  title: "Sage/InputNumber",
  component: InputNumber,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { control: "number" },
    placeholder: { control: "string" },
    min: { control: "number" },
    max: { control: "number" },
    onChange: { action: "onChange" },
  },
};

export default meta;

type Story = StoryObj<typeof InputNumber>;

export const Default: Story = {};

export const Value: Story = {
  args: {
    value: 35,
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: "A placeholder",
  },
};

export const MinAndMax: Story = {
  args: {
    min: 1,
    max: 10,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};