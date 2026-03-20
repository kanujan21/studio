import React, { type ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  href,
}) => {
  const commonProps = {
    className: `btn btn-${variant} btn-${size} ${className}`,
    onClick,
  };

  const content = (
    <>
      <span className="btn-content">{children}</span>
      {variant === 'primary' && <span className="btn-glow"></span>}
    </>
  );

  if (href) {
    return (
      <a href={href} {...commonProps}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      {...commonProps}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
