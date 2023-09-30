import { ReactNode } from 'react';
import Navigation from '../../components/partners/partnersNavigation';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section className="my-4 flex flex-col items-center gap-4">
      <Navigation />
      {children}
    </section>
  );
}
