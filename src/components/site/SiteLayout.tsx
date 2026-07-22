import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CustomCursor } from "./CustomCursor";

export function SiteLayout({
  children,
  transparentHeader = false,
}: {
  children: ReactNode;
  transparentHeader?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <CustomCursor />
      <Header transparentOverHero={transparentHeader} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
