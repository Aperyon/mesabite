import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { queryClient } from "../lib/react-query";

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>{children}</Router>
    </QueryClientProvider>
  );
}
