import React from 'react'
import clamp from 'lodash/clamp';
import cn from '../../../utils/cn';

export type TimerProps = React.HTMLAttributes<HTMLDivElement> & {
  timeRemainingInSeconds: number;
  maxTimeInSeconds: number;
  active?: boolean;
};

function Timer({
  timeRemainingInSeconds,
  maxTimeInSeconds = 60,
  active,
  className,
  ...rest
}: TimerProps) {
  const safeMaxTimeInSeconds = clamp(Math.trunc(maxTimeInSeconds), 0, 99);
  const safeTimeRemainingInSeconds = clamp(Math.trunc(timeRemainingInSeconds), 0, safeMaxTimeInSeconds);

  const percentage = (safeTimeRemainingInSeconds / safeMaxTimeInSeconds) * 100;

  const getColorFromPercentage = (pct: number) => {
    if (pct > 75) {
      return "bg-emerald-500";
    }

    if (pct > 50) {
      return "bg-yellow-500";
    }

    if (pct > 25) {
      return "bg-orange-400";
    }

    return "bg-rose-500";
  };

  return (
    <div className={cn('relative flex h-12 w-12 rounded-full text-lg text-white', className)} {...rest}>
      <div 
        className={cn(
          "relative flex justify-center items-center h-full w-full rounded-full", 
          getColorFromPercentage(percentage),
          !active && "bg-slate-500"
        )}
      >
        {safeTimeRemainingInSeconds}
      </div>
      <div className={cn(
        "absolute  h-full w-full rounded-full",
        getColorFromPercentage(percentage),
        active ? 'animate-ping': 'hidden',
      )}/>
    </div>
  )
}

export default Timer