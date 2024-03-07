import type { Meta, StoryObj } from "@storybook/react";

import Question from "./Question";
import Answer from "../Answer";
import Timer from "../Timer";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Question",
  component: Question,
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
} satisfies Meta<typeof Question>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    id: "1",
    text: "Question 1",
    answers: (
      <>
        <Answer id="1" data="yes" className="w-1/3 flex-grow">
          yes
        </Answer>
        <Answer id="2" data="no" className="w-1/3 flex-grow">
          no
        </Answer>
        <Answer id="3" data="maybe" className=" w-1/3 flex-grow">
          maybe
        </Answer>
        <Answer id="4" data="pass" className=" w-1/3 flex-grow">
          pass
        </Answer>
        <Answer id="5" data="shrug" className=" w-1/3 flex-grow">
          shrug
        </Answer>
      </>
    ),
  },
};

export const WithTimer: Story = {
  args: {
    id: "1",
    text: "Question 1",
    timer: <Timer timeRemainingInSeconds={30} maxTimeInSeconds={30} />,
    answers: (
      <>
        <Answer id="1" data="yes" className="w-1/3 flex-grow">
          yes
        </Answer>
        <Answer id="2" data="no" className="w-1/3 flex-grow">
          no
        </Answer>
        <Answer id="3" data="maybe" className=" w-1/3 flex-grow">
          maybe
        </Answer>
        <Answer id="4" data="pass" className=" w-1/3 flex-grow">
          pass
        </Answer>
        <Answer id="5" data="shrug" className=" w-1/3 flex-grow">
          shrug
        </Answer>
      </>
    ),
  },
};

export const WithActiveTimer: Story = {
  args: {
    id: "1",
    text: "Question 1",
    timer: <Timer timeRemainingInSeconds={7} maxTimeInSeconds={30} active />,
    answers: (
      <>
        <Answer id="1" data="yes" className="w-1/3 flex-grow">
          yes
        </Answer>
        <Answer id="2" data="no" className="w-1/3 flex-grow">
          no
        </Answer>
        <Answer id="3" data="maybe" className=" w-1/3 flex-grow">
          maybe
        </Answer>
        <Answer id="4" data="pass" className=" w-1/3 flex-grow">
          pass
        </Answer>
        <Answer id="5" data="shrug" className=" w-1/3 flex-grow">
          shrug
        </Answer>
      </>
    ),
  },
};

export const WithAnswerAndNoChoices: Story = {
  args: {
    id: "1",
    text: "Question 1",
    answers: (
      <>
        <Answer id="1" data="yes" className="w-1/3 flex-grow" disabled>
          yes
        </Answer>
        <Answer
          id="2"
          data="no"
          className="w-1/3 flex-grow"
          correct={false}
          disabled
        >
          no
        </Answer>
        <Answer id="3" data="maybe" className=" w-1/3 flex-grow" disabled>
          maybe
        </Answer>
        <Answer id="4" data="pass" className=" w-1/3 flex-grow" disabled>
          pass
        </Answer>
        <Answer id="5" data="shrug" className=" w-1/3 flex-grow" disabled>
          shrug
        </Answer>
      </>
    ),
  },
};

export const WithAnChosenAnswerButNoResults: Story = {
  args: {
    id: "1",
    text: "Question 1",
    answers: (
      <>
        <Answer id="1" data="yes" className="w-1/3 flex-grow" disabled>
          yes
        </Answer>
        <Answer id="2" data="no" className="w-1/3 flex-grow" chosen disabled>
          no
        </Answer>
        <Answer id="3" data="maybe" className=" w-1/3 flex-grow" disabled>
          maybe
        </Answer>
        <Answer id="4" data="pass" className=" w-1/3 flex-grow" disabled>
          pass
        </Answer>
        <Answer id="5" data="shrug" className=" w-1/3 flex-grow" disabled>
          shrug
        </Answer>
      </>
    ),
  },
};

export const WithAnChosenAnswerAndPositiveResults: Story = {
  args: {
    id: "1",
    text: "Question 1",
    answers: (
      <>
        <Answer id="1" data="yes" className="w-1/3 flex-grow" disabled>
          yes
        </Answer>
        <Answer
          id="2"
          data="no"
          className="w-1/3 flex-grow"
          chosen
          correct
          disabled
        >
          no
        </Answer>
        <Answer id="3" data="maybe" className=" w-1/3 flex-grow" disabled>
          maybe
        </Answer>
        <Answer id="4" data="pass" className=" w-1/3 flex-grow" disabled>
          pass
        </Answer>
        <Answer id="5" data="shrug" className=" w-1/3 flex-grow" disabled>
          shrug
        </Answer>
      </>
    ),
  },
};

export const WithAnChosenAnswerAndNegativeResults: Story = {
  args: {
    id: "1",
    text: "Question 1",
    answers: (
      <>
        <Answer id="1" data="yes" className="w-1/3 flex-grow" disabled>
          yes
        </Answer>
        <Answer
          id="2"
          data="no"
          className="w-1/3 flex-grow"
          chosen
          correct={false}
          disabled
        >
          no
        </Answer>
        <Answer id="3" data="maybe" className=" w-1/3 flex-grow" disabled>
          maybe
        </Answer>
        <Answer id="4" data="pass" className=" w-1/3 flex-grow" disabled>
          pass
        </Answer>
        <Answer id="5" data="shrug" className=" w-1/3 flex-grow" disabled>
          shrug
        </Answer>
      </>
    ),
  },
};
