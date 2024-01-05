import { ReactNode } from 'react';
import { Metadata } from 'next';
import Navigation from '../../components/partners/partnersNavigation';

export const metadata: Metadata = {
  title: 'For Partners | SoftOcean',
  description:
    'Information about SoftOcean services for individuals, legal-persons and educational staff',
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section className="my-4 flex flex-col items-center gap-4">
      <Navigation />
      {children}
    </section>
  );
}
