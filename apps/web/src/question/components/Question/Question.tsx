import React from "react";
import cn from "../../../utils/cn";

export type QuestionProps = React.HTMLAttributes<HTMLDivElement> & {
  text: string;
  answers: React.JSX.Element;
  timer?: React.JSX.Element;
};

function Question({ text, answers, className, timer, ...rest }: QuestionProps) {
  return (
    <div className={cn("space-y-4", className)} {...rest}>
      <div className="flex items-center justify-between gap-2">
        <div>
          {timer}
        </div>
        <div className="space-2 flex-grow">
          <header className="text-xs tracking-wide uppercase text-gray-500">
            Question
          </header>

          <header className="text-xl">{text}</header>
        </div>
      </div>
      <div
        className={cn(
          "flex flex-row flex-wrap justify-between items-center gap-4",
        )}
      >
        {answers}
      </div>
    </div>

  );
}

export default React.memo(Question);
