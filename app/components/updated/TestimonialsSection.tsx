"use client";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "AI Journalist has transformed our content strategy. We're publishing twice as much high-quality content with half the effort.",
      author: "Sarah Johnson",
      role: "Marketing Director, TechSolutions",
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80"
    },
    {
      quote: "The SEO optimization features are incredible. Our organic traffic has increased by 74% since we started using AI Journalist.",
      author: "Michael Rodriguez",
      role: "SEO Specialist, GrowthHackers",
      avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80"
    },
    {
      quote: "As a solo blogger, AI Journalist gives me the power of a full content team. I can focus on my core business while my blog keeps growing.",
      author: "Emma Thompson",
      role: "Founder, Travel Beyond",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-center mb-12">Loved by Content Creators</h2>

        <div className="space-y-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={`testimonial-${testimonial.author.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-white border border-gray-100 rounded-md p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl font-serif text-gray-300">"</div>
                <div>
                  <p className="text-gray-800 font-medium mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatarUrl}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <div className="font-medium text-sm">{testimonial.author}</div>
                      <div className="text-gray-500 text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
