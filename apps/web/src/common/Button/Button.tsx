import React from "react";
import cn from "../../utils/cn";


export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

function Button({ className, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "rounded-md",
        "focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-sky-900",
        !rest.disabled && "active:bg-opacity-75 hover:bg-opacity-75",
        className,
      )}
      {...rest}
    />
  );
}

export default React.memo(Button);
