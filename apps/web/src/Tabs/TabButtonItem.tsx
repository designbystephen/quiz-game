import React from "react";
import cn from "../utils/cn";
import Button, { ButtonProps } from "../Button";

export type TabButtonItemProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    active?: boolean;
  };

function TabButtonItem({
  active,
  children,
  className,
  ...rest
}: TabButtonItemProps) {
  return (
    <li className="me-2 list-none">
      <Button
        type="button"
        {...rest}
        className={cn(
          "inline-block p-4 border-b-2 border-transparent rounded-t-md hover:text-gray-600 hover:border-gray-300",
          rest.disabled && "text-gray-400 cursor-disabled",
          !rest.disabled &&
            "hover:bg-opacity-75 hover:text-gray-600 hover:border-gray-300 cursor-pointer",
          active && "active text-blue-600 border-b-2 border-blue-600",
          "focus:ring-black/5 focus:ring-offset-0",
          className
        )}
      >
        {children}
      </Button>
    </li>
  );
}

export default React.memo(TabButtonItem);
