import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="mt-[100px] flex w-full justify-center">
      <div className="w-full">{children}</div>
    </section>
  );
}

export default Layout;
