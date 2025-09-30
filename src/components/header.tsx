"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Mountain, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  // { href: "/portfolio", label: "Portfolio" }, // Temporarily hidden
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <img src="/logo.svg" alt="Solitude Logo" className="h-6 w-6" />
          <span className="font-headline">Solitude Infotech Inc.</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "relative rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                pathname === href && "text-primary bg-muted"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b p-4">
                  <Link
                    href="/"
                    className="flex items-center gap-2 font-bold"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    <img
                      src="/logo.svg"
                      alt="Solitude Logo"
                      className="h-6 w-6"
                    />
                    <span className="font-headline">Solitude Infotech</span>
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="grid gap-2 p-4">
                  {navLinks.map(({ href, label }, index) => (
                    <SheetClose key={href} asChild>
                      <Link
                        href={href}
                        className={cn(
                          "rounded-md p-3 text-lg font-medium transition-colors hover:bg-muted hover:text-primary animate-menu-item-in",
                          pathname === href
                            ? "bg-muted text-primary"
                            : "text-muted-foreground"
                        )}
                        style={{ animationDelay: `${index * 50 + 100}ms` }}
                      >
                        {label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
