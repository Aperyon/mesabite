import classNames from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";

const variants = {
  primary: "bg-red-700 text-white",
  secondary: "bg-gray-200 text-white",
};

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: keyof typeof variants;
}
export default function Button({
  variant = "primary",
  children,
  type = "button",
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = classNames("px-4 py-3 rounded-full", variants[variant]);
  return (
    <button {...props} className={classes} type={type}>
      {children}
    </button>
  );
}
