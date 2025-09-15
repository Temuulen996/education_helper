import type { Metadata } from "next";

import "@ant-design/v5-patch-for-react-19";

import BUnauthenticatedLayout from "@/src/components/layout/unauthenticated-layout";

import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";

export default async function UnauthenticatedLayout({
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
  return <BUnauthenticatedLayout>{children}</BUnauthenticatedLayout>;
}
