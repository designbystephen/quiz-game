import React from "react";
import { SubmitHandler, SubmitErrorHandler, useForm } from "react-hook-form";
import Form from "../Form";

export type GameInput = {
  name: string;
  description: string;
  questions: {
    question: string;
    answers: {
      answer: string;
      isCorrect?: boolean;
    }[];
  }[];
};

function GameForm() {
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<GameInput>();

  const handleSubmit: SubmitHandler<GameInput> = (data) => console.log(data);

  const handleError: SubmitErrorHandler<GameInput> = (data) =>
    console.error(data);

  return (
    <form onSubmit={onSubmit(handleSubmit, handleError)}>
      <div className="space-y-6">
        <Form.FormEntry name="name" label="Name">
          <Form.TextInput
            id="name"
            placeholder="Enter game name"
            {...register("name")}
          />
        </Form.FormEntry>
        <Form.FormEntry name="description" label="Description">
          <Form.TextArea
            id="name"
            placeholder="Enter game description"
            {...register("description")}
          />
        </Form.FormEntry>

        <header className="text-lg">Questions</header>
        {/* TODO: iterate over all questions, max 4 answers */}
        <div className="space-y-6">
          <Form.FormEntry label="Question 1" name="question1">
            <Form.TextArea
              id="question1"
              name="question1"
              placeholder="Enter question"
            />
          </Form.FormEntry>
          <Form.FormEntry label="Answer 1" name="answer1">
            <Form.TextInput
              id="answer1"
              name="answer1"
              placeholder="Enter answer"
            />
          </Form.FormEntry>
          <Form.FormEntry label="Answer 2" name="answer2">
            <Form.TextInput
              id="answer2"
              name="answer2"
              placeholder="Enter answer"
            />
          </Form.FormEntry>
          <Form.FormEntry label="Answer 3" name="answer3">
            <Form.TextInput
              id="answer3"
              name="answer3"
              placeholder="Enter answer"
            />
          </Form.FormEntry>
          <Form.FormEntry label="Answer 4" name="answer4">
            <Form.TextInput
              id="answer4"
              name="answer4"
              placeholder="Enter answer"
            />
          </Form.FormEntry>

          <Form.FormButton type="submit">
            Create Game
          </Form.FormButton>
        </div>
      </div>
    </form>
  );
}

export default GameForm;
