import { ReactNode } from "react";

export default function PageTitle({ children }: { children: ReactNode }) {
  return <h1>{children}</h1>;
}
