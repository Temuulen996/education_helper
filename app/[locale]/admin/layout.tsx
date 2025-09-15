import type { Metadata } from "next";

import BAdminLayout from "@/src/components/layout/admin-layout";

export const metadata: Metadata = {
  title: "Education",
  description: "Education web app",
};
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BAdminLayout>{children}</BAdminLayout>;
}
