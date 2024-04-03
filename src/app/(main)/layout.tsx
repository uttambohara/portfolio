import NavigationBar from "@/components/global/sections/navigation-bar";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="scroll-smooth text-slate-200">
      <NavigationBar />
      {children}
    </div>
  );
}
