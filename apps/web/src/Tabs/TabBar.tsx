import React from "react";
import cn from "../utils/cn";

export type TabBarProps = React.HTMLAttributes<HTMLDivElement> & {};

function TabBar({ className, children, ...rest }: TabBarProps) {
  return (
    <div
      className={cn(
        "text-sm font-medium text-center text-gray-500 border-b border-gray-200",
        className
      )}
      {...rest}
    >
      <ul className="flex flex-wrap -mb-px list-none">{children}</ul>
    </div>
  );
}

export default React.memo(TabBar);
