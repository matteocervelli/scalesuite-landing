import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  isFullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isFullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href: string;
  className?: string;
  isExternal?: boolean;
}

const getButtonClasses = (
  variant: ButtonVariant = 'primary', 
  size: ButtonSize = 'md', 
  isFullWidth: boolean = false,
  className?: string
) => {
  const baseClasses = 'btn inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'btn-primary bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'btn-secondary bg-secondary-200 text-secondary-800 hover:bg-secondary-300 focus:ring-secondary-500',
    outline: 'btn-outline border border-primary-600 text-primary-600 bg-transparent hover:bg-primary-50 focus:ring-primary-500',
    text: 'text-primary-600 bg-transparent hover:text-primary-700 hover:bg-primary-50 focus:ring-primary-500',
  };
  
  const sizeClasses = {
    xs: 'text-xs px-2.5 py-1.5',
    sm: 'text-sm px-3 py-2',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2.5',
    xl: 'text-lg px-6 py-3',
  };
  
  const widthClass = isFullWidth ? 'w-full' : '';
  
  return clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    widthClass,
    className
  );
};

const Button = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  isFullWidth = false,
  leftIcon,
  rightIcon,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={getButtonClasses(variant, size, isFullWidth, className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export const ButtonLink = ({
  variant = 'primary',
  size = 'md',
  isFullWidth = false,
  leftIcon,
  rightIcon,
  className,
  href,
  children,
  isExternal = false,
  ...props
}: ButtonLinkProps) => {
  const buttonClasses = getButtonClasses(variant, size, isFullWidth, className);
  
  if (isExternal) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </a>
    );
  }
  
  return (
    <Link href={href} passHref legacyBehavior>
      <a className={buttonClasses} {...props}>
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </a>
    </Link>
  );
};

export default Button; 