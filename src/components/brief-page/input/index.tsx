'use client'; //remove after integration of react-hook-form

import clsx from 'clsx';
import TextareaAutosize from 'react-textarea-autosize';
import React from 'react';

interface BriefInputProps {
  onChange?: (value: any) => void;
  onBlur?: () => void;
  value: unknown;

  label: string;
  labelWidth?: number
  id: string;
  name: string;
  placeholder: string;
  multline?: boolean;
  fullWidth?: boolean;
}

function BriefInput(props: BriefInputProps) {
  const [value, setValue] = React.useState(''); //remove after integration of react-hook-form
  const { label, placeholder, fullWidth, multline, name, id } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const inputProps = { value, onChange: handleChange, name, id };

  return (
    <div>
      <p className="text-sm-16 text-black">{label}</p>
      <div className="relative h-fit">
        {/**После завершения разработки стилей выделить className в переменную (в переменной не работает intellisense для tailwind) (у textarea есть py-3, в то время как у input нет)*/}
        {multline ? (
          <TextareaAutosize
            className={clsx(
              { 'w-auto': fullWidth },
              'peer absolute z-10 h-full w-full resize-none appearance-none border-b-[1px] border-border-gray py-3 text-sm-16 focus:outline-none focus:border-lightdark'
            )}
            {...inputProps}
          />
        ) : (
          <input
            className={clsx(
              { 'w-auto': fullWidth },
              'peer absolute z-10 h-full w-full resize-none appearance-none border-b-[1px] border-border-gray text-sm-16 focus:outline-none focus:border-lightdark'
            )}
            {...inputProps}
          />
        )}
        <label
          className={clsx(
            'relative block w-[160px] py-3 text-sm text-silver peer-focus:z-0',
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
