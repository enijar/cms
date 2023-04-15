import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import config from "@/config";
import trpc from "@/cms/services/trpc";
import App from "@/cms/components/app/app";

const queryClient = new QueryClient();

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: `${config.apiUrl}/trpc`,
    }),
  ],
});

type Props = {
  children: React.ReactNode;
};

export default function Cms({ children }: Props) {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <App>{children}</App>
        </Router>
      </QueryClientProvider>
    </trpc.Provider>
  );
}
