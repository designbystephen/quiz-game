import type { Meta, StoryObj } from "@storybook/react";

import Answer from "./Answer";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Answer",
  component: Answer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Answer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    id: "1",
    children: "yes",
  },
};

export const WithCorrect: Story = {
  args: {
    id: "1",
    children: "yes",
    correct: true,
  },
};

export const WithNotCorrect: Story = {
  args: {
    id: "1",
    children: "yes",
    correct: false,
  },
};

export const WithDisabled: Story = {
  args: {
    id: "1",
    children: "yes",
    disabled: true,
  },
};

export const WithChosen: Story = {
  args: {
    id: "1",
    children: "yes",
    chosen: true,
  },
};

export const WithChosenCorrect: Story = {
  args: {
    id: "1",
    children: "yes",
    chosen: true,
    correct: true,
  },
};

export const WithChosenNotCorrect: Story = {
  args: {
    id: "1",
    children: "yes",
    chosen: true,
    correct: false,
  },
};
