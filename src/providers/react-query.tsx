import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import type { PropsWithChildren } from "react";

const client = new QueryClient();

export default function ReactQueryProvider({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
      {children}
    </QueryClientProvider>
  );
}
