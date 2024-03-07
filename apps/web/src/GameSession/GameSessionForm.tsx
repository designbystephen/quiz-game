import React from "react";
import { SubmitHandler, SubmitErrorHandler, useForm, FieldErrors } from "react-hook-form";
import Form from "../Form";
import Game from '../Game';

export type GameSessionInput = {
  name: string;
  game: string;
};

export type GameSessionFormProps = React.HTMLAttributes<HTMLFormElement> & {
  onSubmit?: SubmitHandler<GameSessionInput>;
  onError?: SubmitErrorHandler<GameSessionInput>;
}

function GameSessionForm({ onSubmit, onError, ...rest }: GameSessionFormProps) {
  const {
    register,
    handleSubmit: onFormSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<GameSessionInput>();

  const game = watch('game');

  const choices = [{ id: '1', label: 'Game 1' }, {id: '2', label: 'Game 2'}]

  const selectedGame = choices.find((choice) => game && choice.id === `${game}`);

  const handleSubmit: SubmitHandler<GameSessionInput> = (data, event) => {
    console.log(data);
    onSubmit?.(data, event);
  };

  const handleError: SubmitErrorHandler<GameSessionInput> = (error, event) => {
    console.error(error);
    onError?.(error, event);
  };

  return (
    <form onSubmit={onFormSubmit(handleSubmit, handleError)}>
      <div className="space-y-4">
        <Form.FormEntry name="name" label="Name">
          <Form.TextInput
            id="name"
            placeholder="Enter session name"
            {...register("name")}
          />
        </Form.FormEntry>

        <Form.FormEntry name="game" label="Game">
          <Game.GameChoices 
            choices={choices}
            selected={selectedGame}
            onChange={(selected) => {
              console.log(selected)
              setValue('game', selected.id)
            }}
          />
        </Form.FormEntry>

        {/* TODO: iterate over all questions, max 4 answers */}
        <div className="space-y-6">
          <Form.FormEntry label="Access Code" name="accessCode">
            <Form.TextInput
              id="accessCode"
              name="accessCode"
              placeholder="Enter an access code"
            />
          </Form.FormEntry>
          <Form.FormButton type="submit">
            Create Session
          </Form.FormButton>
        </div>
      </div>
    </form>
  );
}

export default GameSessionForm;
