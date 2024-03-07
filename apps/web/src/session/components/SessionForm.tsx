import React from "react";
import { Listbox } from "@headlessui/react";

type QuestionSetChoice = {
  id: string;
  label: string;
  disabled?: boolean;
};

type SessionFormProps = {
  selected: QuestionSetChoice;
  choices: QuestionSetChoice[];
  onChange?: (selected: QuestionSetChoice) => void;
};

function SessionForm({ selected, choices, onChange }: SessionFormProps) {
  return (
    <div>
      <input type="text" placeholder="Name" />

      <Listbox value={selected} onChange={onChange}>
        <Listbox.Button>{selected.label}</Listbox.Button>
        <Listbox.Options>
          {choices.map((choice) => (
            <Listbox.Option
              key={choice.id}
              value={choice}
              disabled={choice.disabled}
            >
              {choice.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>

      <button type="submit">Create Session</button>
    </div>
  );
}

export default React.memo(SessionForm);
