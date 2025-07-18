import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div className="h-screen flex items-center justify-center bg-sky-500">{children}</div>;
}
