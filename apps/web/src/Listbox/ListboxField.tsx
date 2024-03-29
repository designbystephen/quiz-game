import React from 'react';
import { Listbox } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'
import cn from '../utils/cn';

export type ListboxFieldProps = {
  label?: string | null;
  placeholder?: string;
};

function ListboxField({ label, placeholder="Make a selection"  }: ListboxFieldProps) {
  return (
    <Listbox.Button 
      className={cn(
        "relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
      )}
    >
      <span className="block truncate">{label || placeholder}</span>
      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <ChevronUpDownIcon
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </span>
    </Listbox.Button>
  )
}

export default React.memo(ListboxField);