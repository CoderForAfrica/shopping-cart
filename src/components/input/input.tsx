import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  useState,
} from 'react';
import { IconType } from 'react-icons';
import { cva, VariantProps } from 'class-variance-authority';

const inputStyle = cva(
  'h-12 rounded w-full border focus-within:border-blue-400 transition-all flex items-center overflow-hidden',
  {
    defaultVariants: { intent: 'primary' },
    variants: {
      intent: {
        primary: 'border-brand bg-brand-accent50/5',
      },
    },
  }
);

type Props = VariantProps<typeof inputStyle> &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    LeftIcon?: IconType;
    error?: string;
    RightIcon?: IconType;
    label?: string;
  };

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      error,
      intent,
      label,
      LeftIcon,
      onChange,
      RightIcon,
      ...props
    },
    ref
  ) => {
    const [message, setMessage] = useState('');

    const handleChange = (event: React.ChangeEvent<any>) => {
      setMessage(event.target.value);
    };

    return (
      <div>
        {label && <label>{label}</label>}
        <div className={inputStyle({ className, intent })}>
          {LeftIcon && (
            <div className="bg-brand-accent50/20 flex h-full w-12 items-center justify-center">
              <LeftIcon className="h-5 w-5" />
            </div>
          )}
          <input
            className="h-full w-full border-0 bg-transparent px-2 text-sm outline-0 placeholder:text-sm "
            {...props}
            onChange={handleChange}
            ref={ref}
          />
          {RightIcon && (
            <div className=" bg-brand-accent50/20 h-full w-full items-center justify-center">
              <RightIcon className="h-5 w-5" />
            </div>
          )}
        </div>
        {message.length > 0
          ? error && <p className="text-xs text-rose-700">{error}</p>
          : ''}
      </div>
    );
  }
);

Input.displayName = 'Input';
