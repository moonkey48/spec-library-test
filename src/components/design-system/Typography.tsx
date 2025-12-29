import { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export const H1 = ({ children, className = '' }: TypographyProps) => (
  <h1 className={`text-h1 ${className}`}>{children}</h1>
);

export const Body = ({ children, className = '' }: TypographyProps) => (
  <p className={`text-body ${className}`}>{children}</p>
);

export const Caption = ({ children, className = '' }: TypographyProps) => (
  <p className={`text-caption text-gray-600 ${className}`}>{children}</p>
);

export const AIVoice = ({ children, className = '' }: TypographyProps) => (
  <p className={`text-ai-voice font-ai ${className}`}>{children}</p>
);
