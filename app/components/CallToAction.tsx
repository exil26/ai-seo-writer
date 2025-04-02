"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-12 md:py-20 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Start creating SEO-optimized content that ranks and converts today. No credit card required.
            </p>
          </div>
          <div className="space-y-4 sm:space-x-4 sm:space-y-0">
            <Link href="/writer">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started for Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Pricing
              </Button>
            </Link>
          </div>
          <p className="text-xs text-gray-500">
            Get 3 free articles. No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
