'use client'; //remove after integration of react-hook-form

import clsx from 'clsx';
import TextareaAutosize from 'react-textarea-autosize';
import React from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';

interface BriefInputProps {
  onChange?: (value: any) => void;
  onBlur?: () => void;
  value: unknown;

  label: string;
  id: string;
  name: string;
  placeholder: string;
  multline?: boolean;
}

function BriefInput(props: BriefInputProps) {
  const [value, setValue] = React.useState(''); //remove after integration of react-hook-form
  const { label, placeholder, multline, name, id } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const className =
    'peer block relative placeholder:text-sm placeholder:text-silver bottom-0 pt-4 pb-2 h-full z-10 w-full resize-none appearance-none border-b-[1px] border-border-gray text-sm-16 focus:outline-none focus:border-lightdark';
  const inputProps = { value, onChange: handleChange, name, id, className };

  return (
    <div className="flex flex-col flex-grow">
      <p className="text-sm-16 text-dark-as-night">{label}</p>
      <div className="relative flex items-end">
        {multline ? (
          <TextareaAutosize {...inputProps} placeholder={placeholder} />
        ) : (
          <input {...inputProps} placeholder={placeholder} />
        )}
      </div>
    </div>
  );
}

export default BriefInput;
