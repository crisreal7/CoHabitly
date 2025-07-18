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
  Building,
  Sparkles,
  GraduationCap,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

type RoadmapView = "student" | "admin";

interface RoadmapStage {
  id: string;
  phase: string;
  title: string;
  description: string;
  status: string;
  visionTag: string;
  progress: number;
  color: {
    primary: string;
    secondary: string;
    bg: string;
    border: string;
  };
}

export default function Index() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [roadmapView, setRoadmapView] = useState<RoadmapView>("student");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  const studentStages: RoadmapStage[] = [
    {
      id: "S1",
      phase: "Stage 1",
      title: "University Dorm Harmony",
      description:
        "CoHabitly launches in student dorms to reduce tension, improve fit, and ease RA load.",
      status: "Live",
      visionTag: "Living well starts early.",
      progress: 100,
      color: {
        primary: "emerald-500",
        secondary: "emerald-600",
        bg: "emerald-50",
        border: "emerald-200",
      },
    },
    {
      id: "S2",
      phase: "Stage 2",
      title: "Off-Campus Expansion",
      description:
        "CoHabitly partners with landlords near campuses to support smooth transitions to first-time renting.",
      status: "In Testing",
      visionTag: "Harmony beyond the quad.",
      progress: 75,
      color: {
        primary: "blue-500",
        secondary: "blue-600",
        bg: "blue-50",
        border: "blue-200",
      },
    },
    {
      id: "S3",
      phase: "Stage 3",
      title: "Lifestyle-Based Roommate Matching",
      description:
        "Users create in-depth lifestyle profiles. CoHabitly recommends compatible roommates based on long-term fit.",
      status: "In Progress",
      visionTag: "Your space. Your rhythm. Your people.",
      progress: 50,
      color: {
        primary: "purple-500",
        secondary: "purple-600",
        bg: "purple-50",
        border: "purple-200",
      },
    },
    {
      id: "S4",
      phase: "Stage 4",
      title: "Partner & Couple Living Tools",
      description:
        "Add modules for cohabiting couples to manage chores, communication, and shared goals respectfully.",
      status: "Coming Soon",
      visionTag: "Love where you live — together.",
      progress: 25,
      color: {
        primary: "pink-500",
        secondary: "pink-600",
        bg: "pink-50",
        border: "pink-200",
      },
    },
    {
      id: "S5",
      phase: "Stage 5",
      title: "Citywide Shared Housing Network",
      description:
        "Build public listings of high-score households and vacant rooms. Make moving city-to-city feel seamless.",
      status: "Vision",
      visionTag: "Harmony, wherever you land.",
      progress: 10,
      color: {
        primary: "amber-500",
        secondary: "amber-600",
        bg: "amber-50",
        border: "amber-200",
      },
    },
    {
      id: "S6",
      phase: "Stage 6",
      title: "AI Life Matching Engine",
      description:
        "CoHabitly evolves into a long-term compatibility engine for homes, pods, and even intentional communities.",
      status: "R&D",
      visionTag: "Your best life, better lived together.",
      progress: 5,
      color: {
        primary: "violet-500",
        secondary: "violet-600",
        bg: "violet-50",
        border: "violet-200",
      },
    },
  ];

  const adminStages: RoadmapStage[] = [
    {
      id: "A1",
      phase: "Admin 1",
      title: "Dorm Feedback Intelligence",
      description:
        "Admins gain access to dashboards of vibe scores, chore completion, and sentiment heatmaps.",
      status: "Live",
      visionTag: "No more flying blind.",
      progress: 100,
      color: {
        primary: "indigo-500",
        secondary: "indigo-600",
        bg: "indigo-50",
        border: "indigo-200",
      },
    },
    {
      id: "A2",
      phase: "Admin 2",
      title: "Real-Time Roommate Monitoring",
      description:
        "AI flags emerging roommate conflict patterns & notifies RAs early.",
      status: "In Testing",
      visionTag: "Intervene before it escalates.",
      progress: 80,
      color: {
        primary: "slate-500",
        secondary: "slate-600",
        bg: "slate-50",
        border: "slate-200",
      },
    },
    {
      id: "A3",
      phase: "Admin 3",
      title: "Smart Matching & Reassignment",
      description:
        "Admins can reassign dorms based on lifestyle compatibility and live feedback.",
      status: "Rolling Out",
      visionTag: "Roommate harmony at scale.",
      progress: 65,
      color: {
        primary: "cyan-500",
        secondary: "cyan-600",
        bg: "cyan-50",
        border: "cyan-200",
      },
    },
    {
      id: "A4",
      phase: "Admin 4",
      title: "Bulk Dorm Assignment",
      description:
        "Use AI and data profiles to assign 1,000+ students in hours — not weeks.",
      status: "Coming Soon",
      visionTag: "The end of spreadsheet chaos.",
      progress: 40,
      color: {
        primary: "teal-500",
        secondary: "teal-600",
        bg: "teal-50",
        border: "teal-200",
      },
    },
    {
      id: "A5",
      phase: "Admin 5",
      title: "Campus-Wide Health Reports",
      description:
        "Receive weekly digests of dorm health, feedback trends, and flagged events.",
      status: "Beta",
      visionTag: "A heartbeat for your housing system.",
      progress: 30,
      color: {
        primary: "sky-500",
        secondary: "sky-600",
        bg: "sky-50",
        border: "sky-200",
      },
    },
    {
      id: "A6",
      phase: "Admin 6",
      title: "Discreet Admin Escalation Panel",
      description:
        "High-priority flagged feedback bypasses noise and gets triaged intelligently.",
      status: "Planned",
      visionTag: "Focus where it matters most.",
      progress: 15,
      color: {
        primary: "blue-500",
        secondary: "blue-600",
        bg: "blue-50",
        border: "blue-200",
      },
    },
    {
      id: "A7",
      phase: "Admin 7",
      title: "Admin-Level Vibe & Policy Control",
      description:
        "Tweak feedback mechanisms, tone models, and visibility settings per dorm.",
      status: "Vision",
      visionTag: "Fully customizable dorm governance.",
      progress: 5,
      color: {
        primary: "gray-500",
        secondary: "gray-600",
        bg: "gray-50",
        border: "gray-200",
      },
    },
  ];

  const currentStages = roadmapView === "student" ? studentStages : adminStages;

  const handleViewToggle = async (view: RoadmapView) => {
    if (view === roadmapView || isTransitioning) return;

    setIsTransitioning(true);

    // Brief delay for animation
    setTimeout(() => {
      setRoadmapView(view);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-lavender-50 to-mint-50">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Live better together — from your first dorm to your forever
                home.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
                An AI-powered roommate and partner harmony platform that evolves
                with your life — from finding the perfect dorm match to managing
                shared chores, resolving tension, and building trust in any
                living situation.
              </p>

              {/* Enhanced CTA Section */}
              <div className="space-y-6">
                {/* Primary CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto lg:mx-0">
                  <Button
                    className="h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold flex items-center gap-2"
                    onClick={() =>
                      window.scrollTo({
                        top: document.querySelector("#roadmap-section")
                          ?.offsetTop,
                        behavior: "smooth",
                      })
                    }
                  >
                    <GraduationCap className="w-4 h-4" />
                    See Student Demo
                  </Button>
                  <Button
                    className="h-12 px-6 bg-sage-600 hover:bg-sage-700 text-white rounded-xl font-semibold flex items-center gap-2"
                    onClick={() => window.open("/admin", "_blank")}
                  >
                    <Shield className="w-4 h-4" />
                    See Admin Dashboard
                  </Button>
                  <Button className="h-12 px-6 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-xl font-semibold flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    See Couples Mode
                  </Button>
                </div>

                {/* Secondary CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto lg:mx-0">
                  <form
                    onSubmit={handleEmailSubmit}
                    className="flex flex-col sm:flex-row gap-3 flex-1"
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
                      className="h-12 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl font-semibold"
                    >
                      Request Early Access
                    </Button>
                  </form>
                </div>

                {/* University CTA */}
                <div className="text-center lg:text-left">
                  <Button
                    variant="outline"
                    className="h-12 px-6 border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 rounded-xl font-semibold flex items-center gap-2 mx-auto lg:mx-0 w-fit"
                  >
                    <Building className="w-4 h-4" />
                    Universities → Get a Pilot
                  </Button>
                </div>
              </div>
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
                    <span className="font-semibold text-lg">CoHabitly</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-mint-50 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Vibe Check</span>
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

      {/* Why We Built CoHabitly */}
      <section className="px-4 py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why We Built CoHabitly
          </h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-xl leading-relaxed mb-6">
              Shared living is hard. Whether you're in college, living with
              roommates, or sharing life with a partner — miscommunication,
              unspoken tension, and mismatched habits can quietly erode peace at
              home.
            </p>
            <p className="text-lg font-semibold text-primary">
              CoHabitly makes it easier to talk, organize, and resolve — without
              confrontation.
            </p>
          </div>
        </div>
      </section>

      {/* One App, Every Stage */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              One App, Every Stage of Shared Living
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Life changes, but your need for harmony doesn't. CoHabitly grows
              with you through every living situation.
            </p>
          </div>

          <div className="grid gap-6">
            {/* Life Stages Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-emerald-200 hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">🧑‍🎓 Student Dorms</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Smart roommate matching, vibe check-ins, AI conflict
                    detection, admin alerts
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">👯 Adult Roommates</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Chore systems, shared goals, trust metrics, anonymous
                    messaging
                  </p>
                </CardContent>
              </Card>

              <Card className="border-pink-200 hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">💑 Couples Mode</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Grocery lists, soft conflict mediation, love languages,
                    emotional check-ins
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Home className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">🏠 Moving Out</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Track past vibe data, transition to new homes, preserve your
                    living habits
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">🧭 Long-Term Vision</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Become your co-living assistant for every shared home,
                    forever
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="px-4 py-16 bg-gradient-to-br from-gray-50 via-white to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Intelligent tools that make shared living smoother, fairer, and
              more harmonious.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-indigo-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  🧠 Anonymous Messaging
                </h3>
                <p className="text-muted-foreground text-center">
                  Speak your mind — safely. AI rewrites the tone and keeps it
                  constructive.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  🔄 AI Vibe Monitoring
                </h3>
                <p className="text-muted-foreground text-center">
                  Weekly check-ins detect mood trends and alert RAs or partners.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  🤝 Compatibility Matching
                </h3>
                <p className="text-muted-foreground text-center">
                  Find better roommate or partner fits over time — without
                  starting from scratch.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  🧽 Chore Coordination
                </h3>
                <p className="text-muted-foreground text-center">
                  Fair task delegation based on preferences, past habits, and
                  communication style.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  💬 Private Feedback Loop
                </h3>
                <p className="text-muted-foreground text-center">
                  One-way messages let you nudge change without confrontation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-rose-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  💡 Couples AI Mode
                </h3>
                <p className="text-muted-foreground text-center">
                  "We need to talk" becomes: "Hey, want to revisit how we split
                  cooking this week?"
                </p>
              </CardContent>
            </Card>
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
              <Button
                className="h-12 px-8 bg-sage-600 hover:bg-sage-700 text-white rounded-xl font-semibold"
                onClick={() => {
                  window.open("/admin", "_blank");
                }}
              >
                View Admin Dashboard
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

      {/* The Long-Term Roadmap */}
      <section
        id="roadmap-section"
        className="relative px-4 py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-lavender-100/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-10 w-40 h-40 bg-gradient-to-br from-sage-100/40 to-mint-100/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-coral-100/20 to-lavender-100/20 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 transition-all duration-500 ${
                roadmapView === "student" ? "bg-primary/10" : "bg-indigo-100/80"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full animate-pulse transition-colors duration-500 ${
                  roadmapView === "student" ? "bg-primary" : "bg-indigo-600"
                }`}
              ></div>
              <span
                className={`text-sm font-medium transition-colors duration-500 ${
                  roadmapView === "student" ? "text-primary" : "text-indigo-700"
                }`}
              >
                {roadmapView === "student" ? "🎓 Student" : "🛠️ Admin"} Roadmap
              </span>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Long-Term Roadmap
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                🚀 CoHabitly starts in the dorm — and grows with you for life.
              </p>
            </div>

            <h3
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-500 ${
                roadmapView === "student"
                  ? "bg-gradient-to-r from-slate-900 via-primary to-slate-700"
                  : "bg-gradient-to-r from-indigo-900 via-slate-700 to-indigo-900"
              } bg-clip-text text-transparent`}
            >
              The CoHabitly Journey
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {roadmapView === "student"
                ? "From solving roommate conflicts to reimagining how communities form and thrive — follow our mission to create harmony in every living space."
                : "Empowering housing administrators with intelligent tools to create better living environments and streamline dorm management at scale."}
            </p>
          </div>

          {/* Enhanced Journey Selector */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              {/* Background glow */}
              <div
                className={`absolute -inset-1 rounded-2xl blur transition-all duration-500 ${
                  roadmapView === "student"
                    ? "bg-gradient-to-r from-primary/30 to-lavender-300/30"
                    : "bg-gradient-to-r from-indigo-400/30 to-slate-400/30"
                }`}
              ></div>

              {/* Main toggle */}
              <div className="relative inline-flex p-1.5 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl">
                <button
                  onClick={() => handleViewToggle("student")}
                  disabled={isTransitioning}
                  className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 group ${
                    roadmapView === "student"
                      ? "bg-gradient-to-r from-primary to-lavender-500 text-white shadow-lg"
                      : "text-gray-600 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-lg">🎓</span>
                    <span>Student Journey</span>
                    {roadmapView === "student" && (
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    )}
                  </span>
                  {roadmapView === "student" && (
                    <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse"></div>
                  )}
                </button>

                <button
                  onClick={() => handleViewToggle("admin")}
                  disabled={isTransitioning}
                  className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 group ${
                    roadmapView === "admin"
                      ? "bg-gradient-to-r from-indigo-600 to-slate-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-lg">🛠️</span>
                    <span>Admin Journey</span>
                    {roadmapView === "admin" && (
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    )}
                  </span>
                  {roadmapView === "admin" && (
                    <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse"></div>
                  )}
                </button>
              </div>

              {/* Transition indicator */}
              {isTransitioning && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>

          {/* Dynamic Timeline Container */}
          <div
            className={`relative transition-all duration-700 ${isTransitioning ? "opacity-50 scale-95" : "opacity-100 scale-100"}`}
          >
            {/* Dynamic Progress Line */}
            <div
              className={`absolute top-20 left-8 right-8 h-1 rounded-full overflow-hidden transition-all duration-700 ${
                roadmapView === "student"
                  ? "bg-gradient-to-r from-emerald-200 via-blue-200 via-purple-200 via-pink-200 via-amber-200 to-violet-200"
                  : "bg-gradient-to-r from-indigo-200 via-slate-200 via-cyan-200 via-teal-200 via-sky-200 via-blue-200 to-gray-200"
              }`}
            >
              <div
                className={`absolute inset-0 rounded-full animate-pulse transition-all duration-700 ${
                  roadmapView === "student"
                    ? "bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"
                    : "bg-gradient-to-r from-indigo-600 via-slate-600 to-cyan-600"
                }`}
              ></div>
            </div>

            {/* Dynamic Progress Indicators */}
            <div className="absolute top-16 left-8 right-8 flex justify-between">
              {currentStages.map((stage, index) => (
                <div
                  key={stage.id}
                  className={`w-8 h-8 bg-${stage.color.primary} rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-bounce transition-all duration-500`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    backgroundColor:
                      roadmapView === "student"
                        ? `rgb(${index === 0 ? "34, 197, 94" : index === 1 ? "59, 130, 246" : index === 2 ? "168, 85, 247" : index === 3 ? "236, 72, 153" : index === 4 ? "245, 158, 11" : "139, 92, 246"})`
                        : `rgb(${index === 0 ? "99, 102, 241" : index === 1 ? "100, 116, 139" : index === 2 ? "34, 211, 238" : index === 3 ? "20, 184, 166" : index === 4 ? "14, 165, 233" : index === 5 ? "59, 130, 246" : "107, 114, 128"})`,
                  }}
                >
                  <div
                    className={`w-2 h-2 bg-white rounded-full ${stage.status === "In Progress" ? "animate-pulse" : ""}`}
                  ></div>
                </div>
              ))}
            </div>

            {/* Dynamic Roadmap Stages */}
            <div
              className={`transition-all duration-500 ${
                roadmapView === "student"
                  ? "overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                  : "overflow-x-auto scrollbar-hide"
              }`}
            >
              <div
                className={`flex gap-12 pb-8 min-w-max px-8 pt-16 transition-all duration-700 ${
                  isTransitioning ? "opacity-50 blur-sm" : "opacity-100 blur-0"
                }`}
              >
                {/* Stage 1: University Dorm Harmony */}
                <div className="flex-none w-96 relative snap-center group">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white shadow-xl z-20 group-hover:scale-125 transition-transform duration-300">
                    <div className="absolute inset-1 bg-white rounded-full animate-ping"></div>
                  </div>

                  {/* Glassmorphism Card */}
                  <div className="mt-8 relative group-hover:scale-105 transition-all duration-500 ease-out">
                    {/* Background Glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>

                    {/* Main Card */}
                    <Card className="relative bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500">
                      <CardContent className="p-8">
                        {/* Enhanced Header */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                              <GraduationCap className="w-8 h-8 text-white" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center animate-pulse">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                              <span className="text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 px-3 py-1 rounded-full shadow-lg">
                                Stage 1
                              </span>
                              <span className="flex items-center gap-1 text-sm font-medium text-emerald-700 bg-emerald-100/80 backdrop-blur-sm px-3 py-1 rounded-full border border-emerald-200/50">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                Live
                              </span>
                            </div>
                            <h3 className="font-bold text-xl text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                              University Dorm Harmony
                            </h3>
                          </div>
                        </div>

                        {/* Enhanced Description */}
                        <div className="space-y-4">
                          <p className="text-gray-600 leading-relaxed">
                            CoHabitly launches in student dorms to reduce
                            tension, improve fit, and ease RA load.
                          </p>

                          {/* Progress Indicator */}
                          <div className="w-full bg-emerald-100 rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-full rounded-full animate-pulse"
                              style={{ width: "100%" }}
                            ></div>
                          </div>

                          {/* Vision Quote */}
                          <div className="relative bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-4 rounded-xl border border-emerald-200/50 backdrop-blur-sm">
                            <div className="absolute top-2 left-2 text-emerald-300 text-2xl font-serif">
                              "
                            </div>
                            <p className="text-emerald-800 font-medium italic text-center pt-2">
                              Living well starts early.
                            </p>
                            <div className="absolute bottom-2 right-2 text-emerald-300 text-2xl font-serif rotate-180">
                              "
                            </div>
                          </div>
                        </div>

                        {/* Interactive Elements */}
                        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                            Explore Stage 1
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Stage 2: Off-Campus Expansion */}
                <div className="flex-none w-96 relative snap-center group">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-xl z-20 group-hover:scale-125 transition-transform duration-300">
                    <div className="absolute inset-1 bg-white rounded-full animate-ping delay-100"></div>
                  </div>

                  {/* Glassmorphism Card */}
                  <div className="mt-8 relative group-hover:scale-105 transition-all duration-500 ease-out">
                    {/* Background Glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>

                    {/* Main Card */}
                    <Card className="relative bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500">
                      <CardContent className="p-8">
                        {/* Enhanced Header */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                              <Home className="w-8 h-8 text-white" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center animate-pulse">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                              <span className="text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-1 rounded-full shadow-lg">
                                Stage 2
                              </span>
                              <span className="flex items-center gap-1 text-sm font-medium text-blue-700 bg-blue-100/80 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-200/50">
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                In Testing
                              </span>
                            </div>
                            <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                              Off-Campus Expansion
                            </h3>
                          </div>
                        </div>

                        {/* Enhanced Description */}
                        <div className="space-y-4">
                          <p className="text-gray-600 leading-relaxed">
                            CoHabitly partners with landlords near campuses to
                            support smooth transitions to first-time renting.
                          </p>

                          {/* Progress Indicator */}
                          <div className="w-full bg-blue-100 rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-blue-400 to-blue-600 h-full rounded-full animate-pulse"
                              style={{ width: "75%" }}
                            ></div>
                          </div>

                          {/* Vision Quote */}
                          <div className="relative bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 rounded-xl border border-blue-200/50 backdrop-blur-sm">
                            <div className="absolute top-2 left-2 text-blue-300 text-2xl font-serif">
                              "
                            </div>
                            <p className="text-blue-800 font-medium italic text-center pt-2">
                              Harmony beyond the quad.
                            </p>
                            <div className="absolute bottom-2 right-2 text-blue-300 text-2xl font-serif rotate-180">
                              "
                            </div>
                          </div>
                        </div>

                        {/* Interactive Elements */}
                        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                            Preview Testing
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Stage 3: Lifestyle-Based Matching */}
                <div className="flex-none w-80 relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg z-10 animate-pulse"></div>
                  <Card className="mt-8 border-purple-200 hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                              Stage 3
                            </span>
                            <span className="flex items-center gap-1 text-xs font-medium text-purple-700 bg-purple-50 px-2 py-1 rounded-full">
                              In Progress
                            </span>
                          </div>
                          <h3 className="font-bold text-lg">
                            Lifestyle-Based Roommate Matching
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Users create in-depth lifestyle profiles. CoHabitly
                        recommends compatible roommates based on long-term fit.
                      </p>
                      <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                        <p className="text-sm font-medium text-purple-800 italic">
                          "Your space. Your rhythm. Your people."
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Stage 4: Partner & Couple Living Tools */}
                <div className="flex-none w-80 relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <Card className="mt-8 border-pink-200 hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                          <Heart className="w-6 h-6 text-pink-600" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-medium text-pink-600 bg-pink-100 px-2 py-1 rounded-full">
                              Stage 4
                            </span>
                            <span className="flex items-center gap-1 text-xs font-medium text-pink-700 bg-pink-50 px-2 py-1 rounded-full">
                              Coming Soon
                            </span>
                          </div>
                          <h3 className="font-bold text-lg">
                            Partner & Couple Living Tools
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Add modules for cohabiting couples to manage chores,
                        communication, and shared goals respectfully.
                      </p>
                      <div className="bg-pink-50 p-3 rounded-lg border border-pink-100">
                        <p className="text-sm font-medium text-pink-800 italic">
                          "Love where you live — together."
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Stage 5: Citywide Shared Housing Network */}
                <div className="flex-none w-80 relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <Card className="mt-8 border-amber-200 hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                          <Building className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-1 rounded-full">
                              Stage 5
                            </span>
                            <span className="flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded-full">
                              Vision
                            </span>
                          </div>
                          <h3 className="font-bold text-lg">
                            Citywide Shared Housing Network
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Build public listings of high-score households and
                        vacant rooms. Make moving city-to-city feel seamless.
                      </p>
                      <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                        <p className="text-sm font-medium text-amber-800 italic">
                          "Harmony, wherever you land."
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Stage 6: AI Life Matching Engine */}
                <div className="flex-none w-80 relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-violet-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <Card className="mt-8 border-violet-200 hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-violet-600" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-medium text-violet-600 bg-violet-100 px-2 py-1 rounded-full">
                              Stage 6
                            </span>
                            <span className="flex items-center gap-1 text-xs font-medium text-violet-700 bg-violet-50 px-2 py-1 rounded-full">
                              R&D
                            </span>
                          </div>
                          <h3 className="font-bold text-lg">
                            AI Life Matching Engine
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        CoHabitly evolves into a long-term compatibility engine
                        for homes, pods, and even intentional communities.
                      </p>
                      <div className="bg-violet-50 p-3 rounded-lg border border-violet-100">
                        <p className="text-sm font-medium text-violet-800 italic">
                          "Your best life, better lived together."
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Enhanced Navigation */}
            <div className="mt-12 space-y-6">
              {/* Mini-Map Navigator */}
              <div className="flex justify-center">
                <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-600">
                      Journey Progress
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-sm animate-pulse"></div>
                      <div className="w-8 h-0.5 bg-emerald-200"></div>
                      <div className="w-3 h-3 bg-blue-500 rounded-full shadow-sm animate-pulse delay-100"></div>
                      <div className="w-8 h-0.5 bg-blue-200"></div>
                      <div className="w-3 h-3 bg-purple-500 rounded-full shadow-sm animate-pulse delay-200"></div>
                      <div className="w-8 h-0.5 bg-purple-200"></div>
                      <div className="w-3 h-3 bg-pink-400 rounded-full shadow-sm"></div>
                      <div className="w-8 h-0.5 bg-pink-200"></div>
                      <div className="w-3 h-3 bg-amber-400 rounded-full shadow-sm"></div>
                      <div className="w-8 h-0.5 bg-amber-200"></div>
                      <div className="w-3 h-3 bg-violet-500 rounded-full shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Scroll Hint */}
              <div className="flex justify-center gap-4">
                <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-lavender-100/50 rounded-full border border-primary/20 shadow-lg animate-float">
                  <ChevronRight className="w-5 h-5 text-primary animate-pulse" />
                  <span className="text-sm font-medium text-primary">
                    Scroll horizontally to explore each stage
                  </span>
                  <ChevronRight className="w-5 h-5 text-primary animate-pulse" />
                </div>
              </div>

              {/* Stage Navigation Pills */}
              <div className="flex justify-center">
                <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
                  <button className="px-4 py-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105">
                    Dorms
                  </button>
                  <button className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105">
                    Off-Campus
                  </button>
                  <button className="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105">
                    Matching
                  </button>
                  <button className="px-4 py-2 bg-pink-100 hover:bg-pink-200 text-pink-700 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105">
                    Couples
                  </button>
                  <button className="px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105">
                    Citywide
                  </button>
                  <button className="px-4 py-2 bg-violet-100 hover:bg-violet-200 text-violet-700 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105">
                    AI Engine
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Vision Section */}
          <div className="mt-20 text-center relative">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-1/4 w-20 h-20 bg-gradient-to-br from-primary/20 to-lavender-200/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-10 right-1/4 w-16 h-16 bg-gradient-to-br from-sage-200/40 to-mint-200/30 rounded-full blur-lg animate-pulse delay-1000"></div>
            </div>

            {/* Main Vision Card */}
            <div className="relative max-w-4xl mx-auto">
              {/* Glassmorphism Card */}
              <div className="relative group">
                {/* Background Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-lavender-300/30 to-sage-300/30 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>

                {/* Main Card */}
                <Card className="relative bg-white/80 backdrop-blur-xl border border-white/30 shadow-2xl">
                  <CardContent className="p-12">
                    {/* Animated Header */}
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-float">
                        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                        <span className="text-sm font-medium text-primary">
                          Our Vision
                        </span>
                        <Sparkles className="w-4 h-4 text-primary animate-pulse delay-300" />
                      </div>

                      <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-primary to-slate-700 bg-clip-text text-transparent mb-6 leading-tight">
                        Building Tomorrow's Living Harmony
                      </h3>

                      <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Each stage represents our commitment to creating better
                        living experiences. From solving immediate roommate
                        conflicts to reimagining how communities form and
                        thrive.
                      </p>
                    </div>

                    {/* Enhanced Value Props */}
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center gap-3 p-4 bg-emerald-50/80 backdrop-blur-sm rounded-xl border border-emerald-200/50 group-hover:scale-105 transition-transform duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-emerald-800">
                            Students First
                          </p>
                          <p className="text-sm text-emerald-600">
                            Designed for student needs
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-4 bg-blue-50/80 backdrop-blur-sm rounded-xl border border-blue-200/50 group-hover:scale-105 transition-transform duration-300 delay-75">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                          <BarChart3 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-blue-800">
                            Data-Driven
                          </p>
                          <p className="text-sm text-blue-600">
                            Evidence-based matching
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-4 bg-purple-50/80 backdrop-blur-sm rounded-xl border border-purple-200/50 group-hover:scale-105 transition-transform duration-300 delay-150">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-purple-800">
                            Privacy-Focused
                          </p>
                          <p className="text-sm text-purple-600">
                            Anonymous and secure
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-4 bg-pink-50/80 backdrop-blur-sm rounded-xl border border-pink-200/50 group-hover:scale-105 transition-transform duration-300 delay-225">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-pink-800">
                            Community-Centered
                          </p>
                          <p className="text-sm text-pink-600">
                            Building connections
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Call to Action */}
                    <div className="flex justify-center">
                      <button className="px-8 py-4 bg-gradient-to-r from-primary to-lavender-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group">
                        <span className="flex items-center gap-2">
                          Join the Journey
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </span>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
            {/* Create continuous loop with double set for seamless animation */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-8 min-w-fit">
                <Card className="border-sage-100 shadow-sm hover:shadow-md transition-shadow min-w-[320px] max-w-[320px]">
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
                      "CoHabitly helped us avoid so many roommate conflicts. The
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

                <Card className="border-sage-100 shadow-sm hover:shadow-md transition-shadow min-w-[320px] max-w-[320px]">
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
                        <span className="text-lavender-600 font-semibold">
                          MR
                        </span>
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

                <Card className="border-sage-100 shadow-sm hover:shadow-md transition-shadow min-w-[320px] max-w-[320px]">
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
                      "As an RA, the admin dashboard gives me insights I never
                      had before. I can help students proactively."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-coral-100 rounded-full flex items-center justify-center">
                        <span className="text-coral-600 font-semibold">JL</span>
                      </div>
                      <div className="text-left">
                        <p className="font-semibold">Jessica L.</p>
                        <p className="text-sm text-muted-foreground">
                          Senior, RA
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-sage-100 shadow-sm hover:shadow-md transition-shadow min-w-[320px] max-w-[320px]">
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
                      "The compatibility matching actually works! I love my new
                      roommate and we get along so well."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
                        <span className="text-sage-600 font-semibold">AK</span>
                      </div>
                      <div className="text-left">
                        <p className="font-semibold">Ashley K.</p>
                        <p className="text-sm text-muted-foreground">
                          Freshman, Business
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-sage-100 shadow-sm hover:shadow-md transition-shadow min-w-[320px] max-w-[320px]">
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
                      "No more awkward conversations about chores. The app
                      handles everything fairly and transparently."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                        <span className="text-brand-600 font-semibold">DM</span>
                      </div>
                      <div className="text-left">
                        <p className="font-semibold">David M.</p>
                        <p className="text-sm text-muted-foreground">
                          Senior, Computer Science
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-sage-100 shadow-sm hover:shadow-md transition-shadow min-w-[320px] max-w-[320px]">
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
                      "The anonymous feedback feature saved my mental health.
                      Finally, a way to address issues without drama."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-mint-100 rounded-full flex items-center justify-center">
                        <span className="text-mint-600 font-semibold">LK</span>
                      </div>
                      <div className="text-left">
                        <p className="font-semibold">Luna K.</p>
                        <p className="text-sm text-muted-foreground">
                          Sophomore, Art & Design
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-sage-100 shadow-sm hover:shadow-md transition-shadow min-w-[320px] max-w-[320px]">
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
                      "Best housing app ever! The vibe checks help us understand
                      each other better and resolve conflicts early."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-lavender-100 rounded-full flex items-center justify-center">
                        <span className="text-lavender-600 font-semibold">
                          RT
                        </span>
                      </div>
                      <div className="text-left">
                        <p className="font-semibold">Riley T.</p>
                        <p className="text-sm text-muted-foreground">
                          Junior, Environmental Science
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-sage-100 shadow-sm hover:shadow-md transition-shadow min-w-[320px] max-w-[320px]">
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
                      "CoHabitly transformed our dorm dynamic. We went from
                      chaos to harmony in just a few weeks!"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-coral-100 rounded-full flex items-center justify-center">
                        <span className="text-coral-600 font-semibold">ZC</span>
                      </div>
                      <div className="text-left">
                        <p className="font-semibold">Zoe C.</p>
                        <p className="text-sm text-muted-foreground">
                          Freshman, Pre-Med
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-sage-100 shadow-sm hover:shadow-md transition-shadow min-w-[320px] max-w-[320px]">
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
                      "The smart matching algorithm is incredible. My roommate
                      and I are perfectly compatible - no conflicts at all!"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
                        <span className="text-sage-600 font-semibold">EM</span>
                      </div>
                      <div className="text-left">
                        <p className="font-semibold">Ethan M.</p>
                        <p className="text-sm text-muted-foreground">
                          Senior, Business Administration
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-sage-100 shadow-sm hover:shadow-md transition-shadow min-w-[320px] max-w-[320px]">
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
                      "As a transfer student, CoHabitly helped me find the
                      perfect living situation. I felt welcomed immediately!"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                        <span className="text-brand-600 font-semibold">NP</span>
                      </div>
                      <div className="text-left">
                        <p className="font-semibold">Nora P.</p>
                        <p className="text-sm text-muted-foreground">
                          Junior, Transfer Student
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
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
              Join the CoHabitly Movement
            </p>
          </div>
          <Button
            className="bg-white text-primary hover:bg-white/90 rounded-xl font-semibold"
            onClick={() =>
              (
                document.querySelector(
                  'input[type="email"]',
                ) as HTMLInputElement
              )?.focus()
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
