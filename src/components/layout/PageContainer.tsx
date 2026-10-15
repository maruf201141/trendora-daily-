import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'default' | 'narrow' | 'wide';
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className = '',
  maxWidth = 'default',
}) => {
  const widthClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-[1440px]',
  };

  return (
    <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 ${widthClasses[maxWidth]} ${className}`}>
      {children}
    </div>
  );
};
