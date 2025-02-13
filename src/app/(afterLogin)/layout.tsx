import React from 'react';

type Props = { children: React.ReactNode };

export default function AfterLayout({ children }: Props) {
  return (
    <div>
      <h1>AfterLogin Layout</h1>
      {children}
    </div>
  );
}
