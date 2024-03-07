import React from 'react';
import { BackwardIcon, ForwardIcon, PlayPauseIcon } from '@heroicons/react/24/outline'
import Button from '../Button';
import clsx from 'clsx';
import cn from '../../utils/cn';

type ControlPanelProps = React.HTMLAttributes<HTMLDivElement> & {
  paused?: boolean;
  disabled?: boolean;
};

function ControlPanel({
  paused,
  className,
  disabled,
  ...rest
}: ControlPanelProps) {
  return (
    <div className={cn('flex justify-center gap-2 items-center', className)} {...rest}>
      
      <Button
        className="bg-slate-200 rounded-md p-4 shadow-sm shadow-black/25"
        onClick={() => {}}
        disabled={disabled}
      >
        <BackwardIcon className="w-6 h-6 " />
      </Button>
      <Button
        className={cn("bg-amber-500 p-4 text-white rounded-md shadow-sm shadow-black/25", paused && "bg-emerald-500")}
        onClick={() => {}}
        disabled={disabled}

      >
        <PlayPauseIcon className="w-6 h-6" />
      </Button>
      <Button
        className="bg-slate-200 rounded-md p-4 shadow-sm shadow-black/25"
        onClick={() => {}}
        disabled={disabled}

      >
        <ForwardIcon className="w-6 h-6" />
      </Button>
    </div>
  )
}

export default React.memo(ControlPanel);