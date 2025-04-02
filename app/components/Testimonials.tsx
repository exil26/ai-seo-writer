"use client";

import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "AI Journalist has transformed our content strategy. We're publishing twice as much high-quality content with half the effort.",
      author: "Sarah Johnson",
      role: "Marketing Director, TechSolutions",
      avatar: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80"
    },
    {
      quote: "The SEO optimization features are incredible. Our organic traffic has increased by 78% since we started using AI Journalist.",
      author: "Michael Rodriguez",
      role: "SEO Specialist, GrowthHackers",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80"
    },
    {
      quote: "As a solo blogger, AI Journalist gives me the power of a full content team. I can focus on my core business while my blog keeps growing.",
      author: "Emma Thompson",
      role: "Founder, Travel Beyond",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80"
    }
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Loved by Content Creators
          </h2>
          <p className="mt-4 text-lg text-gray-500 md:text-xl">
            Join thousands of satisfied customers who have transformed their content strategy.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={`testimonial-${index}`} className="overflow-hidden">
              <CardContent className="p-6">
                <QuoteIcon className="h-8 w-8 text-gray-300 mb-4" />
                <p className="mb-6 text-base font-medium leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="h-10 w-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="font-medium text-sm">{testimonial.author}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
