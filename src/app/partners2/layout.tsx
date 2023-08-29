import NavBar from '@/components/navBar';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <NavBar>{children}</NavBar>;
}
