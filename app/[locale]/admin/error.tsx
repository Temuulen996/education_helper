"use client"; // Error boundaries must be Client Components
import { ExclamationOutlined } from "@ant-design/icons";

//app iin level
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <ExclamationOutlined className="text-7xl" color="var(--color-red-500)" />
      <p className="text-red-500">Үйлдэл хийхэд алдаа гарлаа</p>
      <button
        className="underline cursor-pointer text-gray-300 text-xs"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
