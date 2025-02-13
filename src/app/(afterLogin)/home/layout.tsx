import React from 'react';

type Props = { children: React.ReactNode };
export default function HomeLayout({ children }: Props) {
  return (
    <div>
      <h1>Home Layout</h1>
      {children}
    </div>
  );
}
