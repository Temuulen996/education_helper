import { toast } from "sonner";

interface RequestOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: any;
}

export async function httpRequest<T>(
  url: string,
  options: RequestOptions = {}
): Promise<T | Error> {
  try {
    const { method = "GET", headers = {}, body } = options;

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (ex) {
    if (ex instanceof Error) {
      toast.error(ex.message);
    } else {
      toast.error("An unknown error occurred");
    }
    throw ex;
  }
}
