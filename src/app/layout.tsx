import type { Metadata } from 'next';
import './globals.css';
import React from 'react';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
