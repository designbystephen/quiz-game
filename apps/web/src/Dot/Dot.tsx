import React from "react";
import cn from "../utils/cn";

export type DotProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  variant?: "error" | "success" | "warning";
};

function Dot({ className, variant, ...rest }: DotProps) {
  return (
    <div
      className={cn(
        "bg-gray-500 w-4 h-4 rounded-full",
        variant === "error" && " bg-rose-500",
        variant === "success" && "bg-emerald-500",
        variant === "warning" && "bg-amber-500",
        className
      )}
      {...rest}
    />
  );
}

export default Dot;
