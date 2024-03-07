import React from "react";
import cn from "../../utils/cn";
import Button, { ButtonProps } from "../Button";

export type FormButtonProps = ButtonProps & {};

function FormButton({ className, ...rest }: FormButtonProps) {
  return <Button className={cn("bg-blue-500 text-white p-4 shadow-sm shadow-black/25", className)} {...rest} />;
}

export default FormButton;
