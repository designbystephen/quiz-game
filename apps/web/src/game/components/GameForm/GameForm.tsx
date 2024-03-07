import React from 'react';
import { TextInput, Label, Textarea } from 'flowbite-react';
import { SubmitHandler, SubmitErrorHandler, useForm } from 'react-hook-form';

type GameInput = {
  name: string;
  description: string;
  questions: {
    question: string;
    answers: {
      answer: string;
      isCorrect?: boolean;
    }[]
  }[];
}

function GameForm() {

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<GameInput>();

  const handleSubmit: SubmitHandler<GameInput> = (data) => console.log(data);

  const handleError: SubmitErrorHandler<GameInput> = (data) => console.error(data);

  return (
    <form onSubmit={onSubmit(handleSubmit, handleError)}>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" value="Name" />
          <TextInput id="name" placeholder="Enter game name" {...register('name')} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description" value="Description" />
          <Textarea id="description" placeholder="Enter game description" {...register('description')} />
        </div>

        <header className="text-lg">Questions</header>
        {/* TODO: iterate over all questions, max 4 answers */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="question1" value="Question 1" />
            <Textarea id="question1" name="question1" placeholder="Enter question" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="answer1" value="Answer 1" />
            <TextInput id="answer1" name="answer1" placeholder="Enter answer" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="answer2" value="Answer 2" />
            <TextInput id="answer2" name="answer2" placeholder="Enter answer" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="answer3" value="Answer 3" />
            <TextInput id="answer3" name="answer3" placeholder="Enter answer" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="answer4" value="Answer 4" />
            <TextInput id="answer4" name="answer4" placeholder="Enter answer" />
          </div>
        </div>
      </div>
    </form>
  )
}

export default GameForm;
