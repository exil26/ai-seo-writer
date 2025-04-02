"use client";

import Link from "next/link";
import { PenLine } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white py-4 px-4 md:px-6 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <PenLine className="h-6 w-6" />
          <span className="font-medium">AI Journalist</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="#"
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            Blog
          </Link>
        </div>
      </div>
    </header>
  );
}
