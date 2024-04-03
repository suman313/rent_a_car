"use client";
import React, { Children, ReactNode } from "react";

interface buttonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  variant: string;
}

const Button: React.FC<buttonProps> = ({ children, ...props }) => {
  return (
    <>
      <button className={`${props.variant} btn-default`}>{children}</button>
    </>
  );
};

export default Button;
