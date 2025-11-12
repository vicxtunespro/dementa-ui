import React from 'react';
import { ButtonProps } from './Button.types';
import { Spinner } from './Spinner';

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    variant = 'primary',
    size = 'md',
    shape = 'rounded',
    disabled = false,
    loading = false,
    icon,
    iconPosition = 'left',
    fullWidth = false,
    className = '',
    ...rest
  } = props;

  // Check if rendering as link
  const asLink = 'asLink' in props ? props.asLink : false;

  // Base styles that apply to all buttons
  const baseStyles = 'font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 relative';

  // Variant styles
  const variantStyles: Record<string, string> = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl focus:ring-blue-500',
    secondary: 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl focus:ring-purple-500',
    success: 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl focus:ring-green-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl focus:ring-red-500',
    outline: 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-500'
  };

  // Size styles
  const sizeStyles: Record<string, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg'
  };

  // Icon-only size styles (when no children)
  const iconOnlySizeStyles: Record<string, string> = {
    sm: 'p-1.5',
    md: 'p-2.5',
    lg: 'p-3.5'
  };

  // Shape styles
  const shapeStyles: Record<string, string> = {
    rounded: 'rounded-lg',
    square: 'rounded-none',
    circle: 'rounded-full'
  };

  // Disabled/Loading styles
  const disabledStyles = disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  // Full width
  const widthStyles = fullWidth ? 'w-full' : '';

  // Check if it's icon-only
  const isIconOnly = !children && icon;

  // Combine all styles
  const buttonClasses = `
    ${baseStyles} 
    ${variantStyles[variant]} 
    ${isIconOnly ? iconOnlySizeStyles[size] : sizeStyles[size]} 
    ${shapeStyles[shape]} 
    ${disabledStyles} 
    ${widthStyles}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Render icon and text
  const renderContent = () => {
    if (loading) {
      return (
        <>
          <Spinner size={size} />
          {children && <span className="opacity-0">{children}</span>}
        </>
      );
    }

    if (isIconOnly) {
      return icon;
    }

    if (icon && iconPosition === 'left') {
      return (
        <>
          {icon}
          {children}
        </>
      );
    }

    if (icon && iconPosition === 'right') {
      return (
        <>
          {children}
          {icon}
        </>
      );
    }

    return children;
  };

  // Render as link
  if (asLink && 'href' in props) {
    const { variant: _v, size: _s, shape: _sh, disabled: _d, loading: _l, icon: _i, iconPosition: _ip, fullWidth: _fw, asLink: _al, ...linkProps } = props as any;
    
    return (
      <a className={buttonClasses} {...linkProps}>
        {renderContent()}
      </a>
    );
  }

  // Render as button
  const { variant: _v, size: _s, shape: _sh, icon: _i, iconPosition: _ip, fullWidth: _fw, ...buttonProps } = rest as any;
  
  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      {...buttonProps}
    >
      {renderContent()}
    </button>
  );
};

Button.displayName = 'Button';