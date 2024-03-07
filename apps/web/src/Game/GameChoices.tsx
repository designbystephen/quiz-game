import React from 'react';
import { Listbox } from "@headlessui/react";
import { CheckIcon } from '@heroicons/react/20/solid'
import MyListBox from '../Listbox'
import cn from '../utils/cn';

export type GameChoice<T = any> = {
  id: string;
  data?: T;
  label: string;
  disabled?: boolean;
};

export type GameChoicesProps = {
  selected?: GameChoice;
  choices?: GameChoice[];
  onChange?: (selected: GameChoice) => void;
};

function GameChoices({
  selected,
  choices = [],
  onChange,
}: GameChoicesProps) {
  return (
    <Listbox onChange={onChange}>
      <div className="relative mt-1">
        <MyListBox.ListboxField label={selected?.label} />
        <Listbox.Options
          className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
        >
          {choices.map((choice) => (
            <Listbox.Option
              key={choice.id}
              value={choice}
              disabled={choice.disabled}
              className={cn(
                'relative cursor-pointer select-none py-2 pl-10 pr-4',
                selected?.id === choice.id ? 'bg-amber-100 text-amber-900' : 'text-gray-900'        
              )}
            >
              <>
                <span
                  className={`block truncate ${
                    selected ? 'font-medium' : 'font-normal'
                  }`}
                >
                  {choice.label}
                </span>
                {selected?.id === choice.id ? (
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                ) : null}
              </>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  )
}

export default React.memo(GameChoices);