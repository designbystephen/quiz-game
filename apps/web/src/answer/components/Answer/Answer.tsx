import cn from "../../../utils/cn";
import React from "react";
import Button from "../../../common/Button";
import Dot from "../../../common/Dot";

type AnswerProps<T = any> = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  id: string;
  correct?: boolean;
  strike?: boolean;
  chosen?: boolean;
  data: T;
  onClick?: (answer: T) => void;
};

function Answer({
  id,
  className,
  data,
  correct,
  chosen,
  onClick,
  children,
  ...rest
}: AnswerProps) {
  return (
    <Button
      type="button"
      key={id}
      className={cn(
        "relative p-4 rounded-md shadow-sm shadow-black/25",
        chosen && "bg-blue-900 text-white",
        !chosen && "bg-slate-200",
        className,
      )}
      onClick-={() => onClick?.(data)}
      {...rest}
    >
      {children}
      {Boolean(correct) && (
        <Dot className=" absolute top-1 right-1" variant="success" />
      )}
      {correct === false && (
        <Dot className="absolute top-1 right-1" variant="error"/>
      )}
    </Button>
  );
}

export default React.memo(Answer);
