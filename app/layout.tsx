import type { Metadata } from "next";

import "./globals.css";
import "@ant-design/v5-patch-for-react-19";
import ReduxProvider from "@/src/store/ReduxProvider";
import localFont from "next/font/local";

import { NextIntlClientProvider } from "next-intl";

import { Toaster } from "sonner";
import { RootProvider } from "@/src/providers/root-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bakery",
  description: "Bakery web app",
};

export default async function RootLayout({
  children,
  params,
  authClient,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
  authClient: React.ReactNode;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <ReduxProvider>
            <RootProvider>
              <main>{children}</main>
              {authClient}
              <Toaster />
            </RootProvider>
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
