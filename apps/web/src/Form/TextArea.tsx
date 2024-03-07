import React from "react";
import cn from "../utils/cn";

export type TextAreaProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {};

function TextArea(
  { className, ...rest }: TextAreaProps,
  ref: React.Ref<HTMLTextAreaElement>
) {
  return (
    <textarea
      ref={ref}
      {...rest}
      className={cn(
        "bg-gray-50 border border-gray-300 text-gray-900",
        "text-sm rounded-md w-full p-2.5",
        "focus:outline-none focus:border-sky-900 focus:ring-2 focus:ring-sky-900",
        className
      )}
    />
  );
}

export default React.memo(React.forwardRef(TextArea));
