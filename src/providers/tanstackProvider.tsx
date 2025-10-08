'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient: QueryClient = new QueryClient();

type queryClientProps = {
  children: React.ReactNode;
};

const TanstackProvider = ({ children }: queryClientProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackProvider;
