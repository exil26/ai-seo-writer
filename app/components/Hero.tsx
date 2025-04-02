"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                AI SEO Writer that
                <span className="bg-gradient-to-r from-blue-600 to-violet-500 bg-clip-text text-transparent"> Auto-Publishes </span>
                to your Blog
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Generate, publish, syndicate and update articles automatically. Watch your organic traffic grow.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/writer">
                <Button size="lg" className="w-full">
                  Get 3 Free Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="flex flex-col gap-2 text-sm text-gray-500 sm:flex-row">
              <div className="flex items-center">
                <CheckCircle2 className="mr-1 h-4 w-4 text-green-500" />
                <span>SEO Optimized</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="mr-1 h-4 w-4 text-green-500" />
                <span>Auto WordPress Publishing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="mr-1 h-4 w-4 text-green-500" />
                <span>25,000+ businesses</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 p-2">
              <div className="bg-white rounded-lg shadow-xl p-4 h-full w-full">
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <h3 className="font-medium text-lg">Article Preview</h3>
                  <div className="h-4 bg-gray-200 rounded mt-2 w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded mt-2 w-1/2"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <h4 className="font-medium">SEO Score</h4>
                    <div className="flex items-center mt-2">
                      <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xs">92</div>
                      <div className="ml-2 text-sm text-gray-600">/100</div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <h4 className="font-medium">Auto Publish</h4>
                    <div className="mt-2 flex items-center">
                      <div className="h-4 w-4 rounded-full bg-green-500"></div>
                      <div className="ml-2 text-sm text-gray-600">Ready</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Table of Contents</h4>
                  <div className="h-3 bg-gray-200 rounded mt-2 w-5/6"></div>
                  <div className="h-3 bg-gray-200 rounded mt-2 w-4/6"></div>
                  <div className="h-3 bg-gray-200 rounded mt-2 w-3/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
