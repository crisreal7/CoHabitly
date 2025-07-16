import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Heart,
  Shield,
  Users,
  Star,
  MessageCircle,
  BarChart3,
  Home,
  Mail,
  ChevronRight,
} from "lucide-react";

export default function Index() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-lavender-50 to-mint-50">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Roommate harmony starts here.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
                FairTrade helps students live better together — anonymously,
                intelligently, and peacefully.
              </p>
              <form
                onSubmit={handleEmailSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 px-4 rounded-xl border-sage-200 focus:border-primary focus:ring-primary"
                  required
                />
                <Button
                  type="submit"
                  className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold"
                >
                  Get Early Access
                </Button>
              </form>
              {isSubmitted && (
                <div className="mt-4 flex items-center gap-2 text-sage-600 justify-center lg:justify-start">
                  <CheckCircle className="w-5 h-5" />
                  <span>Thanks! We'll notify you when we launch.</span>
                </div>
              )}
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-lavender-100 to-brand-100 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Home className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-lg">FairTrade</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-mint-50 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          Weekly Vibe Check
                        </span>
                        <span className="text-xs text-sage-600">Anonymous</span>
                      </div>
                    </div>
                    <div className="bg-lavender-50 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          Compatibility: 94%
                        </span>
                        <Heart className="w-4 h-4 text-brand-500" />
                      </div>
                    </div>
                    <div className="bg-coral-50 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          Chores: All caught up!
                        </span>
                        <CheckCircle className="w-4 h-4 text-sage-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 py-16 bg-white/60">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Three simple steps to better campus living
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-sage-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-mint-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-mint-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Submit weekly vibe checks
                </h3>
                <p className="text-muted-foreground">
                  Share anonymous feedback about your living situation and
                  roommate dynamics.
                </p>
              </CardContent>
            </Card>
            <Card className="border-sage-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-lavender-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-lavender-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Get matched with compatible roommates
                </h3>
                <p className="text-muted-foreground">
                  Our algorithm finds perfect matches based on lifestyle,
                  habits, and preferences.
                </p>
              </CardContent>
            </Card>
            <Card className="border-sage-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-coral-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Keep things fair with shared chores
                </h3>
                <p className="text-muted-foreground">
                  Track and balance household responsibilities automatically and
                  transparently.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student-Friendly Features */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built for students, by students
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Anonymous feedback tools
                    </h3>
                    <p className="text-muted-foreground">
                      Share honest thoughts without fear of confrontation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Dorm compatibility logic
                    </h3>
                    <p className="text-muted-foreground">
                      Smart matching based on real compatibility factors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      No roommate can see your score
                    </h3>
                    <p className="text-muted-foreground">
                      Your privacy is protected throughout the process.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Easy mobile access</h3>
                    <p className="text-muted-foreground">
                      Manage everything from your phone, anytime, anywhere.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:order-first">
              <Card className="border-sage-100 shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-mint-50 to-lavender-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-center">
                      Your Dashboard
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                        <span className="font-medium">Harmony Score</span>
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-2 bg-sage-200 rounded-full overflow-hidden">
                            <div className="w-10 h-full bg-primary rounded-full"></div>
                          </div>
                          <span className="text-sm font-semibold">85%</span>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">This Week's Mood</span>
                          <span className="text-2xl">😊</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Feeling positive about living situation
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Chore Balance</span>
                          <span className="text-sage-600 font-semibold">
                            Fair
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Admin & RA Dashboard */}
      <section className="px-4 py-16 bg-white/60">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Admin & RA Dashboard
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Powerful insights and tools for housing administrators to create
                better living environments.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Private insights on dorm health</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Compatibility alerts</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Dorm assignment automation</span>
                </div>
              </div>
              <Button className="h-12 px-8 bg-sage-600 hover:bg-sage-700 text-white rounded-xl font-semibold">
                Request Admin Demo
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div>
              <Card className="border-sage-100 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Dorm Health Overview
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-mint-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Building A</span>
                        <span className="text-sage-600 font-semibold">
                          92% Harmony
                        </span>
                      </div>
                      <div className="w-full h-2 bg-sage-200 rounded-full overflow-hidden">
                        <div className="w-11/12 h-full bg-sage-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-coral-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Building B</span>
                        <span className="text-coral-600 font-semibold">
                          67% Harmony
                        </span>
                      </div>
                      <div className="w-full h-2 bg-coral-200 rounded-full overflow-hidden">
                        <div className="w-2/3 h-full bg-coral-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-lavender-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Building C</span>
                        <span className="text-lavender-600 font-semibold">
                          88% Harmony
                        </span>
                      </div>
                      <div className="w-full h-2 bg-lavender-200 rounded-full overflow-hidden">
                        <div className="w-5/6 h-full bg-lavender-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What students are saying
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Real feedback from beta testers across campus
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-sage-100 shadow-sm hover:shadow-md transition-shadow">
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
                  "FairTrade helped us avoid so many roommate conflicts. The
                  anonymous feedback is a game-changer."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-mint-100 rounded-full flex items-center justify-center">
                    <span className="text-mint-600 font-semibold">SA</span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Sarah A.</p>
                    <p className="text-sm text-muted-foreground">
                      Junior, Psychology
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-sage-100 shadow-sm hover:shadow-md transition-shadow">
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
                  "I finally felt heard without causing drama. The chore
                  tracking keeps everything fair and transparent."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-lavender-100 rounded-full flex items-center justify-center">
                    <span className="text-lavender-600 font-semibold">MR</span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Marcus R.</p>
                    <p className="text-sm text-muted-foreground">
                      Sophomore, Engineering
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-sage-100 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
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
                  "As an RA, the admin dashboard gives me insights I never had
                  before. I can help students proactively."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-coral-100 rounded-full flex items-center justify-center">
                    <span className="text-coral-600 font-semibold">JL</span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Jessica L.</p>
                    <p className="text-sm text-muted-foreground">Senior, RA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Email Signup Form */}
      <section className="px-4 py-16 bg-gradient-to-r from-primary/10 via-lavender-50 to-mint-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Be the first to join the harmony.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our waitlist and help shape the future of campus housing.
          </p>
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto mb-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-4 rounded-xl border-sage-200 focus:border-primary focus:ring-primary"
                required
              />
              <Button
                type="submit"
                className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold"
              >
                Join Waitlist
              </Button>
            </div>
          </form>
          <p className="text-sm text-muted-foreground">
            We never share your info. Privacy guaranteed.
          </p>
        </div>
      </section>

      {/* Sticky Footer/CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-primary/95 backdrop-blur-sm border-t border-primary/20 p-4 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <p className="font-semibold text-primary-foreground">
              Early Access Launching Soon
            </p>
            <p className="text-sm text-primary-foreground/80">
              Join the FairTrade Movement
            </p>
          </div>
          <Button
            className="bg-white text-primary hover:bg-white/90 rounded-xl font-semibold"
            onClick={() =>
              document.querySelector('input[type="email"]')?.focus()
            }
          >
            <Mail className="w-4 h-4 mr-2" />
            Get Notified
          </Button>
        </div>
      </div>

      {/* Padding to account for sticky footer */}
      <div className="h-20"></div>
    </div>
  );
}
