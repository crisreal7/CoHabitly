import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "CoHabitly helped us avoid so many roommate conflicts. The anonymous feedback is a game-changer.",
    author: "Sarah A.",
    role: "Junior, Psychology",
    initials: "SA",
    bgColor: "bg-mint-100",
    textColor: "text-mint-600",
  },
  {
    quote:
      "I finally felt heard without causing drama. The chore tracking keeps everything fair and transparent.",
    author: "Marcus R.",
    role: "Sophomore, Engineering",
    initials: "MR",
    bgColor: "bg-lavender-100",
    textColor: "text-lavender-600",
  },
  {
    quote:
      "As an RA, the admin dashboard gives me insights I never had before. I can help students proactively.",
    author: "Jessica L.",
    role: "Senior, RA",
    initials: "JL",
    bgColor: "bg-coral-100",
    textColor: "text-coral-600",
  },
  {
    quote:
      "The compatibility matching actually works! I love my new roommate and we get along so well.",
    author: "Ashley K.",
    role: "Freshman, Business",
    initials: "AK",
    bgColor: "bg-sage-100",
    textColor: "text-sage-600",
  },
  {
    quote:
      "No more awkward conversations about chores. The app handles everything fairly and transparently.",
    author: "David M.",
    role: "Senior, Computer Science",
    initials: "DM",
    bgColor: "bg-brand-100",
    textColor: "text-brand-600",
  },
];

export default function AnimatedTestimonials() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          What students are saying
        </h2>
        <p className="text-lg text-muted-foreground">
          Real feedback from beta testers across campus
        </p>
      </div>

      {/* Scrolling Container with Fade Edges */}
      <div className="relative">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        {/* Right Fade */}
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Reviews */}
        <div className="animate-scroll-reviews flex gap-8 w-fit">
          {/* Duplicate the reviews for seamless loop */}
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-8 min-w-fit">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={`${setIndex}-${index}`}
                  className="border-sage-100 shadow-sm hover:shadow-md transition-shadow min-w-[320px] max-w-[320px]"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 ${testimonial.bgColor} rounded-full flex items-center justify-center`}
                      >
                        <span
                          className={`${testimonial.textColor} font-semibold`}
                        >
                          {testimonial.initials}
                        </span>
                      </div>
                      <div className="text-left">
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
