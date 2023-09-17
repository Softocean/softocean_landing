import { ReactNode } from 'react';
import NavBar from '@/components/navBar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <NavBar>{children}</NavBar>;
}
