import React from "react";

interface Props {
  children: React.ReactNode;
  type: "primary" | "secondary" | "primary light" | "secondary light";
  classes?: string;
  onClick?: any;
}

const Button: React.FC<Props> = ({ children, type, classes, onClick }) => {
  return (
    <button onClick={onClick} className={`btn btn--${type} ${classes}`}>
      {children}
    </button>
  );
};

export default Button;
