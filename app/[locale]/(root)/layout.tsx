import type { Metadata } from "next";

import "@ant-design/v5-patch-for-react-19";

import BLayout from "@/src/components/layout/layout";

import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";

export const metadata: Metadata = {
  title: "Bakery",
  description: "Bakery web app",
};
export default async function AdminLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return <BLayout>{children}</BLayout>;
}
