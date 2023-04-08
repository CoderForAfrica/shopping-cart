import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const buttonstyle = cva('rounded hover:scale-90 ease-in duration-300', {
  defaultVariants: {
    block: false,
    size: 'sm',
    varant: 'primary',
  },
  variants: {
    block: {
      true: 'block',
    },
    size: {
      lg: 'p-6',
      md: 'p-4',
      sm: 'p-2',
    },
    varant: {
      error: 'text-white bg-[#ff0000]',
      primary: 'text-white bg-[#111C55]',
      secondary: 'text-[#111C55] bg-[#FFB629]',
      success: 'text-[#111C55] bg-[#00ff00]',
    },
  },
});

type Props = VariantProps<typeof buttonstyle> &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const ButtonTwo = ({
  block,
  size,
  varant,
  className,
  children,
  ...rest
}: Props) => {
  const style = buttonstyle({ block, className, size, varant });
  return (
    <button className={style} {...rest}>
      {children}
    </button>
  );
};
