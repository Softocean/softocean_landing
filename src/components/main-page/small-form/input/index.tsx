import React from 'react';
import clsx from 'clsx';

interface InputProps {
  onChange?: (value: any) => void;
  onBlur?: () => void;
  value: unknown;

  id: string;
  placeholder: string;
  name: string;
  error?: any;
  helperText?: string;

  icon?: React.ReactNode;
}

const SmallFormInput = React.forwardRef<HTMLInputElement, InputProps>(
  function SmallFormInput(props, ref) {
    const { icon, placeholder, id, onChange, onBlur, name, value, error, helperText } = props;
    return (
      <div>
        <div className="relative py-[6px]">
          <input
            id={id}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value as string}
            ref={ref}
            type="text"
            className={clsx(
              'peer block appearance-none border-b-[1px]  py-[6px] focus:border-lightdark focus:outline-none',
              { 'border-border-gray': !error },
              { 'border-error-color': !!error }
            )}
          />
          <label
            htmlFor={id}
            className={clsx(
              'translate absolute left-0 top-[30%] flex cursor-text flex-row items-center gap-2 text-sm  transition-transform duration-200 ease-out peer-focus:translate-y-[-160%] peer-focus:transform',
              { 'translate-y-[-160%] transform': value !== '' },
              { 'text-error-color': !!error },
              { 'text-lightdark': !error }
            )}>
            <div>{icon}</div>
            <span>{placeholder}</span>
          </label>
        </div>
        {error && (
          <span className={clsx('text-sm', { 'text-error-color': !!error })}>{helperText}</span>
        )}
      </div>
    );
  }
);

export default SmallFormInput;
