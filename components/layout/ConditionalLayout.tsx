"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Header, RightSidebar, Footer } from "@/components/layout";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export const ConditionalLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <RightSidebar />
      <ScrollToTop />
      <Footer />
    </>
  );
};
