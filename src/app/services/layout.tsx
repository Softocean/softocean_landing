import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | SoftOcean',
  description: 'Information about SoftOcean services',
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="mt-[100px] flex w-full justify-center">
      <div className="w-full">{children}</div>
    </section>
  );
}

export default Layout;
