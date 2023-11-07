import { ReactNode } from "react";

export default function PageTitle({ children }: { children: ReactNode }) {
  return <h1 className="text-red-900 font-bold text-2xl mb-4">{children}</h1>;
}
