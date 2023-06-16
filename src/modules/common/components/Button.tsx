import { type VariantProps, cva } from "class-variance-authority";

import type { ButtonHTMLAttributes } from "react";
import React from "react";
import { VscLoading } from "react-icons/vsc";
const button = cva(
  ["rounded-md relative  transition-color border-[1px] cursor-pointer"],
  {
    variants: {
      colorSchema: {
        //479a59
        primary: "bg-blue-600 hover:bg-blue-800 text-white",
        success: "bg-green-600 hover:bg-green-800 text-white",
        monochrome: "bg-white text-text border border-gray-400 ",
        unstyled: "bg-transparent",
      },
      variant: {
        outline: "bg-transparent ",
        ghost: "bg-transparent border-transparent",
        solid: "border-transparent",
      },
      size: {
        small: ["text-sm", "py-1", "px-4"],
        medium: ["text-base", "py-2", "px-4"],
        large: "text-base",
        none: "",
      },
      fullWidth: {
        true: "w-full",
      },
      disabled: {
        true: " ",
      },
    },
    compoundVariants: [
      {
        colorSchema: "primary",
        variant: "outline",
        className:
          "border-[1px] border-blue-600 text-blue-500 hover:bg-blue-500/10",
      },
      {
        colorSchema: "primary",
        variant: "ghost",
        className: " text-blue-500 hover:bg-blue-500/10",
      },
    ],
    defaultVariants: {
      colorSchema: "primary",
      size: "medium",
      variant: "solid",
    },
  }
);

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof button> {
  children?: React.ReactNode;
  isLoading?: boolean;
}

export const Button = ({
  children,
  colorSchema,
  variant,
  size,
  fullWidth,
  disabled,
  isLoading,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={button({
        className,
        colorSchema,
        variant,
        size,
        fullWidth,
        disabled,
      })}
      disabled={!!disabled || isLoading}
      {...props}
    >
      {/* <div
        className={classNames(
          "leading-[1.25rem]",
          isLoading && "text-transparent"
        )}
      > */}
        {children}
      {/* </div> */}
      {isLoading && (
        <span className="absolute inset-0 flex animate-spin items-center justify-center ">
          <VscLoading />
        </span>
      )}
    </button>
  );
};
