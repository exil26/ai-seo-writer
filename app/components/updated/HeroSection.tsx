"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-white py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900">
              AI SEO Writer that <span className="text-blue-500">Auto-Publishes</span> to your Blog
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Generate, publish, syndicate and update articles automatically. Watch your organic traffic grow.
            </p>
            <div className="mt-8">
              <Link href="/writer">
                <Button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-medium">
                  Get 3 Free Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <span className="flex items-center mr-3">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-500 mr-1">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Auto WordPress Publishing
              </span>
              <span className="flex items-center">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-500 mr-1">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                25,000+ users
              </span>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 border-b">
                <div className="text-sm font-medium">Article Preview</div>
                <div className="flex items-center text-xs space-x-1">
                  <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded-full">1 free</span>
                </div>
              </div>

              <div className="p-4 bg-white">
                <div className="w-full h-20 bg-gray-100 rounded-md mb-4"></div>

                <div className="flex flex-col sm:flex-row justify-between mt-4 space-y-3 sm:space-y-0">
                  <div className="flex items-center">
                    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-green-500 text-white text-xs font-bold">92</div>
                    <div className="ml-2">
                      <div className="text-xs font-medium text-gray-500">SEO Score</div>
                      <div className="text-xs font-medium text-gray-900">/100</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                    <div>
                      <div className="text-xs font-medium text-gray-500">Auto-Publish</div>
                      <div className="text-xs font-medium text-gray-900">Ready</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-xs font-medium text-gray-500 mb-1">Table of Contents</div>
                  <div className="space-y-1">
                    <div className="h-2 bg-gray-100 rounded-full w-full"></div>
                    <div className="h-2 bg-gray-100 rounded-full w-5/6"></div>
                    <div className="h-2 bg-gray-100 rounded-full w-4/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
