import React from "react";

import "./Button.scss";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export const Button = (props: ButtonProps) => {
  const { className, children, ...nativeProps } = props;
  return (
    <button className={`button ${className ?? ""}`} {...nativeProps}>
      {children}
    </button>
  );
};
