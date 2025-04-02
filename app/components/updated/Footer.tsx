"use client";

import Link from "next/link";
import { PenLine } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PenLine className="h-5 w-5" />
              <span className="font-medium">AI Journalist</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              AI-powered content creation for bloggers, marketers, and businesses. Generate SEO-optimized content efficiently.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-3">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Article Writer</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-900">AutoBlog</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Bulk Writer</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Blog</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Guides</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-900">FAQs</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} AI Journalist. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Twitter</Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Facebook</Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
