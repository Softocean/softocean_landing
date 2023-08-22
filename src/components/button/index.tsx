import React from 'react';

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button' | undefined;
  fontSize?: number;
  width?: string;
  className?: string;
  children?: React.ReactNode
}

function Button(props: ButtonProps) {
  const { type, children, fontSize, width, className } = props;
  return (
    <button
      type={type}
      className={`appearance-none ${className} w-fit cursor-pointer rounded-[10px] bg-gradient-main from-deep-sky-blue from-0%  to-rebecca-purple to-100% px-12 py-4 text-base-21 font-normal text-white`}>
      {children}
    </button>
  );
}

export default Button;
