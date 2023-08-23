'use client'; //remove after integration of react-hook-form

import clsx from 'clsx';
import TextareaAutosize from 'react-textarea-autosize';
import React from 'react';

interface BriefInputProps {
  onChange?: (value: any) => void;
  onBlur?: () => void;
  value: unknown;

  label: string;
  smallWidthLabel?: boolean;
  id: string;
  name: string;
  placeholder: string;
  multline?: boolean;
}

function BriefInput(props: BriefInputProps) {
  const [value, setValue] = React.useState(''); //remove after integration of react-hook-form
  const { label, placeholder, multline, name, id, smallWidthLabel } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const className =
    'peer absolute z-10 h-full w-full resize-none appearance-none border-b-[1px] border-border-gray text-sm-16 focus:outline-none focus:border-lightdark';

  if (multline) {
    className.concat(' py-3');
  }

  const inputProps = { value, onChange: handleChange, name, id, className };

  return (
    <div className="flex flex-col justify-end">
      <p className="text-sm-16 text-black">{label}</p>
      <div className="relative h-fit">
        {multline ? <TextareaAutosize {...inputProps} /> : <input {...inputProps} />}
        <label
          className={clsx(
            `relative block ${
              smallWidthLabel ? `w-label-small` : 'w-[160px]'
            } py-3 text-sm text-silver peer-focus:z-0`,
            {
              'z-0': !!value,
            },
            { 'z-20': !value }
          )}
          htmlFor={id}>
          {placeholder}
        </label>
      </div>
    </div>
  );
}

export default BriefInput;
