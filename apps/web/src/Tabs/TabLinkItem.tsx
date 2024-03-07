import React from "react";
import cn from "../utils/cn";

export type TabLinkItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean;
  disabled?: boolean;
};

function TabLinkItem({
  active,
  children,
  className,
  disabled,
  ...rest
}: TabLinkItemProps) {
  return (
    <li className="me-2">
      <a
        {...rest}
        className={cn(
          "inline-block p-4 border-b-2 border-transparent rounded-t-md ",
          "focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-sky-900",
          disabled && "text-gray-400 cursor-disabled",
          !disabled &&
            "hover:bg-opacity-75 hover:text-gray-600 hover:border-gray-300 cursor-pointer",
          active && "active text-blue-600 border-b-2 border-blue-600",
          className
        )}
      >
        {children}
      </a>
    </li>
  );
}

export default React.memo(TabLinkItem);
