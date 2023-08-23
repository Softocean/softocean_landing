'use client';
import React from 'react';

import SkipArrowIcon from '@/../assets/icons/skip-arrow.svg';

interface SkipButtonProps {
  onClick?: (e: React.SyntheticEvent) => void;
  href?: string;
}

const SkipButton = React.forwardRef<HTMLDivElement, SkipButtonProps>(function SkipButton(
  { onClick, href },
  ref
) {
  return (
    <div
      ref={ref}
      onClick={(e) => {
        console.log('in skip!');
        if (onClick) {
          onClick(e);
        }
      }}
      className="hover:opacity-[0.8] cursor-pointer h-fit">
      <div className="flex flex-row gap-1">
        <p className="text-sm-16 text-black items-center">Пропустить</p>
        <span className="my-auto">
          <SkipArrowIcon />
        </span>
      </div>
      <p className="text-sm text-brainstem-grey">Затрудняюсь ответить</p>
      <a hidden href={href}></a> {/**пойдет под SEO? */}
    </div>
  );
});

export default SkipButton;
