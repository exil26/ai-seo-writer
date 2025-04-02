"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PenLine, Bot, BarChart3, BookText, Zap, CalendarClock } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <PenLine className="h-10 w-10 text-blue-500" />,
      title: "AI Article Writer",
      description: "Generate high-quality, SEO-optimized articles with a click. Complete with images, videos, and links."
    },
    {
      icon: <Bot className="h-10 w-10 text-violet-500" />,
      title: "Automatic Blogging",
      description: "Schedule, publish, and update content automatically to WordPress and other CMS platforms."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-green-500" />,
      title: "SEO Optimization",
      description: "Get SEO scores and recommendations to ensure your content ranks well on search engines."
    },
    {
      icon: <BookText className="h-10 w-10 text-orange-500" />,
      title: "Bulk Content Creation",
      description: "Create multiple blog posts at once for efficient content planning and creation."
    },
    {
      icon: <Zap className="h-10 w-10 text-yellow-500" />,
      title: "Smart Templates",
      description: "Use pre-built templates for different content types or create your own for consistent branding."
    },
    {
      icon: <CalendarClock className="h-10 w-10 text-red-500" />,
      title: "Scheduling & Analytics",
      description: "Plan your content calendar and track performance to optimize your content strategy."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Features That Drive Results
          </h2>
          <p className="mt-4 text-lg text-gray-500 md:text-xl">
            Everything you need to create, optimize, and publish content that ranks.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 transition-all hover:border-primary hover:shadow-md">
              <CardHeader>
                <div className="p-2 w-fit rounded-lg bg-gray-100/50 mb-3">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
