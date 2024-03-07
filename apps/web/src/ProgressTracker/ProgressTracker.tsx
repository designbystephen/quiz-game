import React from "react";
import cn from "../utils/cn";

export type ProgressTrackerProps = React.HTMLAttributes<HTMLDivElement> & {
  position?: number;
};

function ProgressTracker({
  position = 0,
  className,
  ...rest
}: ProgressTrackerProps) {
  const stages = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95];

  const closestStage = React.useMemo(() => {
    const pos = Math.trunc(position);

    return stages.reduce((a, b) => {
      return Math.abs(b - pos) < Math.abs(a - pos) ? b : a;
    });
  }, [position, stages]);

  return (
    <div className={cn("relative bg-gray-100 w-full p-4", className)} {...rest}>
      <div className="relative flex justify-center items-center z-[0] h-[24px] w-full">
        <hr className="h-px w-full  border-t-4 border-dotted border-black/15" />
      </div>
      <div
        className={`absolute z-[1] h-[24px] w-[24px] bg-slate-500 rounded-full shadow-sm shadow-black/25`}
        style={{
          top: `calc(50% - 12px)`,
          left: `calc(${closestStage}% - 12px)`,
        }}
      />
    </div>
  );
}

export default React.memo(ProgressTracker);
