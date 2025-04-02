"use client";

import { Card } from "@/components/ui/card";

export default function FeaturesSection() {
  const features = [
    {
      icon: "📝",
      title: "AI Article Writer",
      description: "Generate high-quality SEO-optimized articles with a click. Complete with images, videos, and links."
    },
    {
      icon: "🤖",
      title: "Automatic Blogging",
      description: "Schedule, publish, and update content automatically to WordPress and other CMS platforms."
    },
    {
      icon: "📊",
      title: "SEO Optimization",
      description: "Get SEO scores and recommendations to ensure your content ranks well on search engines."
    },
    {
      icon: "📚",
      title: "Bulk Content Creation",
      description: "Create multiple blog posts at once for efficient content planning and creation."
    },
    {
      icon: "⚡",
      title: "Smart Templates",
      description: "Use pre-built templates for different content types or create your own for consistent branding."
    },
    {
      icon: "📅",
      title: "Scheduling & Analytics",
      description: "Plan your content calendar and track performance to optimize your content strategy."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-center mb-6">Features That Drive Results</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Everything you need to create, optimize, and publish content that ranks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="mb-4 text-3xl">{feature.icon}</div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
