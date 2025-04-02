"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PenLine, Settings, History, User, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl"
          >
            <PenLine className="h-6 w-6" />
            <span>AI Journalist</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/writer" className="text-sm font-medium hover:text-primary">
            Article Writer
          </Link>
          <Link href="/autoblog" className="text-sm font-medium hover:text-primary">
            AutoBlog
          </Link>
          <Link href="/bulk-writer" className="text-sm font-medium hover:text-primary">
            Bulk Writer
          </Link>
          <Link href="/history" className="text-sm font-medium hover:text-primary">
            History
          </Link>
          <Link href="/settings" className="text-sm font-medium hover:text-primary">
            Settings
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="default" size="sm">
            Get Started
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="container py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="/writer"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <PenLine className="h-4 w-4" />
              Article Writer
            </Link>
            <Link
              href="/autoblog"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <History className="h-4 w-4" />
              AutoBlog
            </Link>
            <Link
              href="/bulk-writer"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <PenLine className="h-4 w-4" />
              Bulk Writer
            </Link>
            <Link
              href="/history"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <History className="h-4 w-4" />
              History
            </Link>
            <Link
              href="/settings"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
            <Button className="mt-2">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
