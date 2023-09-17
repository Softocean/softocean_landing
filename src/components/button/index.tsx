import React from 'react';

type ButtonProps = {
  type?: 'submit' | 'reset' | 'button' | undefined;
  fontSize?: number;
  width?: string;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;

  onClick?: (e: React.SyntheticEvent) => void;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  props: ButtonProps,
  ref
) {
  const { type, children, fontSize, width, className, disabled, onClick } = props;
  return (
    <button
      onClick={onClick}
      ref={ref}
      disabled={disabled}
      type={type}
      className={`appearance-none ${className} w-fit cursor-pointer rounded-md bg-gradient-main from-deep-sky-blue from-0% to-rebecca-purple  to-100% px-4 py-2 text-base-21 font-normal text-white md:rounded-[10px] md:px-12 md:py-4`}>
      {children}
    </button>
  );
});

export default Button;
