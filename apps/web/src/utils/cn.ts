import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type Args = Parameters<typeof twMerge>;

export default (...args: Args) => clsx(twMerge(...args));
