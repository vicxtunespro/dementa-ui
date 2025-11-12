import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonShape = 'rounded' | 'square' | 'circle';

interface BaseButtonProps {
  /**
   * The content to display inside the button
   */
  children?: ReactNode;
  
  /**
   * The visual style variant of the button
   * @default 'primary'
   */
  variant?: ButtonVariant;
  
  /**
   * The size of the button
   * @default 'md'
   */
  size?: ButtonSize;
  
  /**
   * The shape of the button
   * @default 'rounded'
   */
  shape?: ButtonShape;
  
  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the button is in loading state
   * @default false
   */
  loading?: boolean;
  
  /**
   * Icon to display (can be used alone for icon-only buttons)
   */
  icon?: ReactNode;
  
  /**
   * Position of the icon relative to text
   * @default 'left'
   */
  iconPosition?: 'left' | 'right';
  
  /**
   * Whether the button should take full width
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

// For button element
export interface ButtonAsButton extends BaseButtonProps, ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Render as a link
   * @default false
   */
  asLink?: false;
}

// For anchor element
export interface ButtonAsLink extends BaseButtonProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Render as a link
   */
  asLink: true;
  /**
   * Link href
   */
  href: string;
}

export type ButtonProps = ButtonAsButton | ButtonAsLink;