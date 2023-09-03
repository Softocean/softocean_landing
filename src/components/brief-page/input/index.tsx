'use client'; //remove after integration of react-hook-form

import TextareaAutosize from 'react-textarea-autosize';
import React, { useCallback, useState } from 'react';
import { formatIncompletePhoneNumber, validatePhoneNumberLength } from 'libphonenumber-js/mobile';

interface BriefInputProps {
  onChange?: (value: any) => void;
  onBlur?: () => void;
  value: unknown;

  label: string;
  id: string;
  name: string;
  placeholder: string;
  multline?: boolean;
  telephone?: boolean;
}

function BriefInput(props: BriefInputProps) {
  const [value, setValue] = useState(''); //remove after integration of react-hook-form
  const { label, placeholder, multline, telephone, name, id } = props;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
    []
  );

  const handelPhoneInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const telephoneNumber = formatIncompletePhoneNumber(e.target.value, 'RU'); //чето нужно придумать с интернализацией
      if (validatePhoneNumberLength(telephoneNumber, 'RU') === 'INVALID_LENGTH') return;
      setValue(telephoneNumber);
    },
    [telephone]
  );

  const className =
    'peer block relative placeholder:text-sm placeholder:text-silver bottom-0 pt-4 pb-2 h-full z-10 w-full resize-none appearance-none border-b-[1px] border-border-gray text-sm-16 focus:outline-none focus:border-lightdark';
  const inputProps = {
    value,
    onChange: telephone ? handelPhoneInputChange : handleChange,
    name,
    id,
    className,
  };

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
