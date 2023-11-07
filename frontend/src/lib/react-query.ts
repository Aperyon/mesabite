import { QueryClient } from "@tanstack/react-query";

const config = {
  queries: {
    retry: false,
  },
};
export const queryClient = new QueryClient({ defaultOptions: config });
