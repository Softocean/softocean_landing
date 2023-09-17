import { ReactNode } from 'react';
import Link from 'next/link';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'reset' | 'submit';
  href?: string;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  target?: string;
};

export const Button = ({
  variant = 'primary',
  type = 'button',
  disabled,
  children,
  className,
  href,
  target,
  onClick,
}: ButtonProps) => {
  const primaryStyles =
    'rounded-[10px] bg-gradient-to-bl from-[#0B96B4] to-[#551DB0] px-12 py-4 text-base text-white transition-all ease-in-out hover:bg-gradient-to-tr hover:shadow-md active:scale-[0.98]';

  let styles = '';

  switch (variant) {
    case 'primary': {
      styles = primaryStyles;
      break;
    }
  }

  if (href) {
    return (
      <Link href={href} target={target} className={styles + ' ' + className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={styles + ' ' + className}>
      {children}
    </button>
  );
};
