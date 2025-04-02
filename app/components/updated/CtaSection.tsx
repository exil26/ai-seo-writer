"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-16 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Content Strategy?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Start creating SEO-optimized content that ranks and converts today. No credit card required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/writer">
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2"
            >
              Get Started for Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/pricing">
            <Button
              variant="outline"
              className="px-6 py-2"
            >
              View Pricing
            </Button>
          </Link>
        </div>

        <p className="text-gray-500 text-sm mt-4">
          Get 3 free articles. No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
