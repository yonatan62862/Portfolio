import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1350px] mx-auto overflow-hidden  min-h-screen flex flex-col border-l border-r">
      {children}
    </div>
  );
}