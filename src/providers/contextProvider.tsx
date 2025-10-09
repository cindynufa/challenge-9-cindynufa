'use client';

import TanstackProvider from "./tanstackProvider";

type ContextProviderProps = {
  children: React.ReactNode;
};

const ContextProvider = ({ children }: ContextProviderProps) => {
  return <TanstackProvider>{children}</TanstackProvider>;
};

export default ContextProvider;