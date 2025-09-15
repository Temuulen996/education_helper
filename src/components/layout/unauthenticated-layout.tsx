"use client";
interface BUnauthenticatedLayoutProps {
  children: React.ReactNode;
}
const BUnauthenticatedLayout = ({ children }: BUnauthenticatedLayoutProps) => {
  return <div className="w-full h-screen">{children}</div>;
};

export default BUnauthenticatedLayout;
