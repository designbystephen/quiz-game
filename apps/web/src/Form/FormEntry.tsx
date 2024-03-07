import React from "react";
import cn from "../utils/cn";
import FormLabel from "./FormLabel";

export type FormEntryProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string;
  name: string;
};

function FormEntry({
  label,
  name,
  className,
  children,
  ...rest
}: FormEntryProps) {
  return (
    <div {...rest} className={cn("space-y-1", className)}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      {children}
    </div>
  );
}

export default React.memo(FormEntry);
