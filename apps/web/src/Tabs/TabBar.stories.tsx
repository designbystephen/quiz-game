import type { Meta, StoryObj } from "@storybook/react";
import Tabs from ".";

import TabBar from "./TabBar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/TabBar",
  component: TabBar,
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
} satisfies Meta<typeof TabBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: [
      <Tabs.TabLinkItem key="1" href="#">
        Part 1
      </Tabs.TabLinkItem>,
      <Tabs.TabButtonItem key="2" active>
        Part 2
      </Tabs.TabButtonItem>,
      <Tabs.TabLinkItem key="3" disabled>
        Part 3
      </Tabs.TabLinkItem>,
    ],
  },
};
