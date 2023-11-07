import { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }) {
  return (
    <div className="bg-orange-100 p-4 min-h-screen text-red-900">
      {children}
    </div>
  );
}
