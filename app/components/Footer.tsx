"use client";

import Link from "next/link";
import { PenLine } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <PenLine className="h-6 w-6" />
              <span className="font-bold text-xl">AI Journalist</span>
            </Link>
            <p className="text-sm text-gray-500">
              AI-powered content creation for bloggers, marketers, and businesses. Generate SEO-optimized content with ease.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-base">Product</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/writer" className="text-sm text-gray-500 hover:text-primary">
                Article Writer
              </Link>
              <Link href="/autoblog" className="text-sm text-gray-500 hover:text-primary">
                AutoBlog
              </Link>
              <Link href="/bulk-writer" className="text-sm text-gray-500 hover:text-primary">
                Bulk Writer
              </Link>
              <Link href="/pricing" className="text-sm text-gray-500 hover:text-primary">
                Pricing
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-base">Resources</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/blog" className="text-sm text-gray-500 hover:text-primary">
                Blog
              </Link>
              <Link href="/guide" className="text-sm text-gray-500 hover:text-primary">
                Guides
              </Link>
              <Link href="/faq" className="text-sm text-gray-500 hover:text-primary">
                FAQs
              </Link>
              <Link href="/support" className="text-sm text-gray-500 hover:text-primary">
                Support
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-base">Legal</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/cookie" className="text-sm text-gray-500 hover:text-primary">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 border-t pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} AI Journalist. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="https://twitter.com" className="text-gray-500 hover:text-primary">
                Twitter
              </Link>
              <Link href="https://facebook.com" className="text-gray-500 hover:text-primary">
                Facebook
              </Link>
              <Link href="https://linkedin.com" className="text-gray-500 hover:text-primary">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
