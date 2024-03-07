import React from "react";
import cn from "../utils/cn";

export type FormLabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {};

function FormLabel({ className, ...rest }: FormLabelProps) {
  return (
    <label
      {...rest}
      className={cn("block mb-2 text-sm font-medium text-gray-900", className)}
    />
  );
}

export default React.memo(FormLabel);
