"use client";

import { Button } from "antd";

// Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  return (
    // global-error must include html and body tags
    <html lang="en">
      <body className="flex flex-col h-screen w-screen justify-center items-center bg-white ">
        <h2 className="font-semibold text-red-500 text-3xl">
          Something went wrong!
        </h2>
        <Button onClick={() => reset()}>Try again</Button>
      </body>
    </html>
  );
}
