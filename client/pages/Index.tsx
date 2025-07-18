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
  ChevronDown,
  Play,
  ArrowRight,
  Target,
  Zap,
  Globe,
  Smartphone,
} from "lucide-react";

type RoadmapView = "student" | "admin" | "couples";

interface RoadmapStage {
  id: string;
  phase: string;
  title: string;
  description: string;
  status: string;
  timeline: string;
  progress: number;
  color: {
    primary: string;
    secondary: string;
    bg: string;
    border: string;
  };
}

interface MockupCard {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  isActive: boolean;
}

export default function Index() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [roadmapView, setRoadmapView] = useState<RoadmapView>("student");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeMockup, setActiveMockup] = useState(0);
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  const handleViewToggle = async (view: RoadmapView) => {
    if (view === roadmapView || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setRoadmapView(view);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 200);
  };

  const studentJourney: RoadmapStage[] = [
    {
      id: "S1",
      phase: "Stage 1",
      title: "Dorm Life Optimization",
      description:
        "Smart roommate matching and vibe monitoring in student housing",
      status: "Live",
      timeline: "Now Available",
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
      title: "Landlord Integration",
      description: "Partner with off-campus housing for seamless transitions",
      status: "Testing",
      timeline: "Q2 2024",
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
      title: "Lifestyle-Based Matching",
      description: "Deep compatibility profiles for long-term living harmony",
      status: "Development",
      timeline: "Q3 2024",
      progress: 45,
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
      title: "Post-Grad Expansion",
      description:
        "Extend to young professionals and adult roommate situations",
      status: "Planned",
      timeline: "Q4 2024",
      progress: 20,
      color: {
        primary: "amber-500",
        secondary: "amber-600",
        bg: "amber-50",
        border: "amber-200",
      },
    },
    {
      id: "S5",
      phase: "Stage 5",
      title: "Long-Term Compatibility Tools",
      description: "Relationship mode for couples and life partners",
      status: "Vision",
      timeline: "2025",
      progress: 10,
      color: {
        primary: "pink-500",
        secondary: "pink-600",
        bg: "pink-50",
        border: "pink-200",
      },
    },
    {
      id: "S6",
      phase: "Stage 6",
      title: "Citywide Integration",
      description: "Urban shared housing network with harmony scores",
      status: "R&D",
      timeline: "2025+",
      progress: 5,
      color: {
        primary: "indigo-500",
        secondary: "indigo-600",
        bg: "indigo-50",
        border: "indigo-200",
      },
    },
    {
      id: "S7",
      phase: "Stage 7",
      title: "Forever Home Tools",
      description: "AI-powered living companion for life's every stage",
      status: "Vision",
      timeline: "Future",
      progress: 2,
      color: {
        primary: "violet-500",
        secondary: "violet-600",
        bg: "violet-50",
        border: "violet-200",
      },
    },
  ];

  const adminJourney: RoadmapStage[] = [
    {
      id: "A1",
      phase: "Admin 1",
      title: "Dorm Health Scoring",
      description: "Real-time harmony metrics and health dashboards",
      status: "Live",
      timeline: "Now Available",
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
      title: "Conflict Signals",
      description: "AI-powered early warning system for roommate tension",
      status: "Testing",
      timeline: "Q2 2024",
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
      title: "Reassignment Suggestions",
      description: "Smart matching for optimal room assignments",
      status: "Development",
      timeline: "Q3 2024",
      progress: 60,
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
      title: "Bulk Assignment Tools",
      description: "Automate housing assignment for thousands of students",
      status: "Planned",
      timeline: "Q4 2024",
      progress: 30,
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
      title: "Campus Health Reports",
      description: "Weekly digests and trend analysis for housing staff",
      status: "Vision",
      timeline: "2025",
      progress: 15,
      color: {
        primary: "emerald-500",
        secondary: "emerald-600",
        bg: "emerald-50",
        border: "emerald-200",
      },
    },
    {
      id: "A6",
      phase: "Admin 6",
      title: "Policy & Governance Tools",
      description: "Customizable systems for different housing policies",
      status: "R&D",
      timeline: "2025+",
      progress: 5,
      color: {
        primary: "gray-500",
        secondary: "gray-600",
        bg: "gray-50",
        border: "gray-200",
      },
    },
  ];

  const couplesJourney: RoadmapStage[] = [
    {
      id: "C1",
      phase: "Couples 1",
      title: "Gentle Communication",
      description: "AI-assisted conversations for sensitive topics",
      status: "Beta",
      timeline: "Q3 2024",
      progress: 70,
      color: {
        primary: "rose-500",
        secondary: "rose-600",
        bg: "rose-50",
        border: "rose-200",
      },
    },
    {
      id: "C2",
      phase: "Couples 2",
      title: "Shared Goals & Tasks",
      description: "Collaborative planning for household management",
      status: "Development",
      timeline: "Q4 2024",
      progress: 40,
      color: {
        primary: "pink-500",
        secondary: "pink-600",
        bg: "pink-50",
        border: "pink-200",
      },
    },
    {
      id: "C3",
      phase: "Couples 3",
      title: "Relationship Health",
      description: "Long-term compatibility tracking and insights",
      status: "Planned",
      timeline: "2025",
      progress: 20,
      color: {
        primary: "fuchsia-500",
        secondary: "fuchsia-600",
        bg: "fuchsia-50",
        border: "fuchsia-200",
      },
    },
  ];

  const getCurrentJourney = () => {
    switch (roadmapView) {
      case "student":
        return studentJourney;
      case "admin":
        return adminJourney;
      case "couples":
        return couplesJourney;
      default:
        return studentJourney;
    }
  };

  const mockupCards: MockupCard[] = [
    {
      title: "Vibe Check",
      subtitle: "Anonymous feedback",
      icon: <MessageCircle className="w-4 h-4 text-emerald-600" />,
      color: "emerald",
      isActive: activeMockup === 0,
    },
    {
      title: "Compatibility: 94%",
      subtitle: "Perfect match",
      icon: <Heart className="w-4 h-4 text-pink-600" />,
      color: "pink",
      isActive: activeMockup === 1,
    },
    {
      title: "Chore Balance",
      subtitle: "All caught up!",
      icon: <CheckCircle className="w-4 h-4 text-blue-600" />,
      color: "blue",
      isActive: activeMockup === 2,
    },
    {
      title: "Anonymous Feedback",
      subtitle: "Constructive suggestions",
      icon: <Shield className="w-4 h-4 text-purple-600" />,
      color: "purple",
      isActive: activeMockup === 3,
    },
  ];

  // Animate through mockups
  useState(() => {
    const interval = setInterval(() => {
      setActiveMockup((prev) => (prev + 1) % mockupCards.length);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 font-['Inter',_'DM_Sans',_system-ui,_sans-serif]">
      {/* 1. Hero Section — Your Life-Long Living Companion */}
      <section className="relative px-6 py-20 md:py-32 lg:py-40 overflow-hidden">
        {/* Animated background mist */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-purple-50/30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                Live better together — from your first dorm to your forever
                home.
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed font-light">
                CoHabitly is an intelligent living assistant that evolves with
                you — from finding your perfect dorm fit to resolving tension
                with a partner, building better homes and habits at every stage
                of life.
              </p>

              {/* Primary CTA with dropdown */}
              <div className="space-y-8">
                <div className="relative group">
                  <Button
                    className="h-16 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group-hover:scale-105"
                    onClick={() =>
                      setSelectedDemo(selectedDemo ? null : "dropdown")
                    }
                  >
                    <Play className="w-5 h-5" />
                    Explore the Demo
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${selectedDemo ? "rotate-180" : ""}`}
                    />
                  </Button>

                  {selectedDemo && (
                    <div className="absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl p-6 space-y-3 z-50">
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-12 text-left hover:bg-blue-50"
                        onClick={() =>
                          window.scrollTo({
                            top: document.querySelector("#demo-section")
                              ?.offsetTop,
                            behavior: "smooth",
                          })
                        }
                      >
                        <GraduationCap className="w-5 h-5 mr-3 text-blue-600" />
                        Student Experience
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-12 text-left hover:bg-indigo-50"
                        onClick={() => window.open("/admin", "_blank")}
                      >
                        <Shield className="w-5 h-5 mr-3 text-indigo-600" />
                        Admin Dashboard
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-12 text-left hover:bg-pink-50"
                      >
                        <Heart className="w-5 h-5 mr-3 text-pink-600" />
                        Couples Mode
                      </Button>
                    </div>
                  )}
                </div>

                {/* Secondary CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                  <Button className="h-14 px-8 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Request Early Access
                  </Button>

                  <Button
                    variant="outline"
                    className="h-14 px-8 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-2xl font-semibold flex items-center gap-2"
                  >
                    <Building className="w-5 h-5" />
                    Universities: Launch a Pilot
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Animated Phone Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Phone frame */}
                <div className="w-80 h-[640px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Status bar */}
                    <div className="h-12 bg-gray-50 flex items-center justify-between px-6">
                      <div className="text-sm font-semibold">9:41</div>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                        <div className="w-6 h-3 border border-gray-400 rounded-sm">
                          <div className="w-4 h-full bg-green-500 rounded-sm"></div>
                        </div>
                      </div>
                    </div>

                    {/* App header */}
                    <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Home className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">CoHabitly</h3>
                          <p className="text-blue-100 text-sm">
                            Your living companion
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Animated cards */}
                    <div className="p-6 space-y-4">
                      {mockupCards.map((card, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-xl border-2 transition-all duration-500 ${
                            card.isActive
                              ? `bg-${card.color}-50 border-${card.color}-200 shadow-lg scale-105`
                              : "bg-gray-50 border-gray-200 opacity-60"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-8 h-8 bg-${card.color}-100 rounded-full flex items-center justify-center`}
                              >
                                {card.icon}
                              </div>
                              <div>
                                <div className="font-semibold text-gray-900">
                                  {card.title}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {card.subtitle}
                                </div>
                              </div>
                            </div>
                            {card.isActive && (
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg animate-float">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white shadow-lg animate-float delay-1000">
                  <Heart className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why CoHabitly Exists */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Shared spaces don't have to mean shared stress.
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              Whether you're living in a dorm, sharing a space with roommates,
              or building a life with a partner — small conflicts can become big
              problems. CoHabitly prevents tension before it escalates, builds
              trust over time, and makes shared living easier at every stage.
            </p>

            {/* Optional enhancement: 3 icons fading */}
            <div className="flex justify-center items-center gap-16 mt-16">
              <div className="text-center opacity-75 hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-700">Dorm Life</p>
                <p className="text-xs text-gray-500">Roommate conflicts</p>
              </div>

              <div className="text-center opacity-75 hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-700">Roommates</p>
                <p className="text-xs text-gray-500">Household tension</p>
              </div>

              <div className="text-center opacity-75 hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-700">Couples</p>
                <p className="text-xs text-gray-500">Communication gaps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. One Platform, Every Stage of Shared Living */}
      <section className="px-6 py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              One Platform, Every Stage of Shared Living
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Life changes, but your need for harmony doesn't. CoHabitly grows
              with you through every living situation.
            </p>
          </div>

          {/* Horizontal scroll cards */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-8 pb-8 min-w-max">
              <Card className="flex-none w-80 border-2 border-blue-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Student Dorms
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Smart roommate matching, weekly vibe check-ins, dorm
                    reassignment suggestions
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>• Anonymous feedback systems</div>
                    <div>• Compatibility scoring</div>
                    <div>• RA dashboard integration</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex-none w-80 border-2 border-purple-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Adult Roommates
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Shared goal setting, trust metrics, chore fairness, conflict
                    detection
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>• Automated chore distribution</div>
                    <div>• Lifestyle compatibility</div>
                    <div>• Communication facilitation</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex-none w-80 border-2 border-pink-200 hover:border-pink-300 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Couples Mode
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Grocery list sharing, AI-assisted discussions, relationship
                    check-ins
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>• Gentle conflict mediation</div>
                    <div>• Shared task management</div>
                    <div>• Emotional intelligence</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex-none w-80 border-2 border-amber-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Moving Out
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Track and export living habits, prepare for next home,
                    maintain compatibility history
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>• Habit tracking & export</div>
                    <div>• Transition planning</div>
                    <div>• Compatibility insights</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex-none w-80 border-2 border-indigo-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Long-Term Living
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Use historical data and partner feedback to guide future
                    living decisions
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>• AI-powered insights</div>
                    <div>• Pattern recognition</div>
                    <div>• Life-long companion</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Key Features (Simplified & Interactive) */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Intelligent tools that make shared living smoother, fairer, and
              more harmonious.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Anonymous Messaging
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Rewritten safely by AI to stay constructive
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-sm text-gray-500 space-y-2">
                    <div>• AI tone adjustment</div>
                    <div>• Conflict prevention</div>
                    <div>• Safe communication</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-2 border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  AI Vibe Monitoring
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Weekly check-ins surface hidden tension and patterns
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-sm text-gray-500 space-y-2">
                    <div>• Mood tracking</div>
                    <div>• Pattern analysis</div>
                    <div>• Early warnings</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-2 border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Compatibility Matching
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Continuously optimized roommate and partner suggestions
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-sm text-gray-500 space-y-2">
                    <div>• Smart algorithms</div>
                    <div>• Behavior learning</div>
                    <div>• Perfect matches</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-2 border-gray-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Chore Coordination
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Delegated fairly using personal preferences + behavior
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-sm text-gray-500 space-y-2">
                    <div>• Fair distribution</div>
                    <div>• Preference learning</div>
                    <div>• Automatic scheduling</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-2 border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Dorm/Unit Health Scoring
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Live health ratings, flag alerts, automation triggers
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-sm text-gray-500 space-y-2">
                    <div>• Real-time scoring</div>
                    <div>• Health monitoring</div>
                    <div>• Alert systems</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-2 border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Private Feedback Loop
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  One-way suggestions, AI softens tone to avoid escalation
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-sm text-gray-500 space-y-2">
                    <div>• Gentle suggestions</div>
                    <div>• Tone optimization</div>
                    <div>• Conflict avoidance</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Interactive Demo Gateway */}
      <section
        id="demo-section"
        className="px-6 py-20 bg-gradient-to-br from-gray-50 to-purple-50/30"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              See CoHabitly in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Experience how CoHabitly transforms shared living for students,
              administrators, and couples.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group border-2 border-blue-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-transparent"></div>
                <div className="absolute top-6 left-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Student Experience
                  </h3>
                  <p className="text-blue-100">
                    See how students create harmony
                  </p>
                </div>
                {/* Animated UI Preview */}
                <div className="absolute bottom-4 right-4 w-20 h-32 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                  <div className="p-2 space-y-2">
                    <div className="h-2 bg-white/40 rounded"></div>
                    <div className="h-2 bg-white/60 rounded"></div>
                    <div className="h-2 bg-white/40 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Explore vibe checks, roommate matching, and conflict
                  prevention in student dorms.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  View Demo
                  <Play className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group border-2 border-indigo-200 hover:border-indigo-300 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-transparent"></div>
                <div className="absolute top-6 left-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Admin Dashboard</h3>
                  <p className="text-indigo-100">
                    Housing management made simple
                  </p>
                </div>
                {/* Animated UI Preview */}
                <div className="absolute bottom-4 right-4 w-20 h-32 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                  <div className="p-2 space-y-2">
                    <div className="h-1 bg-green-400 rounded w-full"></div>
                    <div className="h-1 bg-yellow-400 rounded w-2/3"></div>
                    <div className="h-1 bg-red-400 rounded w-1/3"></div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Discover health scoring, conflict alerts, and smart assignment
                  tools.
                </p>
                <Button
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                  onClick={() => window.open("/admin", "_blank")}
                >
                  View Demo
                  <Play className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group border-2 border-pink-200 hover:border-pink-300 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-pink-500 to-rose-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 to-transparent"></div>
                <div className="absolute top-6 left-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Couples Mode</h3>
                  <p className="text-pink-100">Strengthen your relationship</p>
                </div>
                {/* Animated UI Preview */}
                <div className="absolute bottom-4 right-4 w-20 h-32 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                  <div className="p-2 space-y-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
                    </div>
                    <div className="h-2 bg-white/40 rounded"></div>
                    <div className="h-2 bg-white/60 rounded w-4/5"></div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Experience gentle communication tools and shared goal tracking
                  for couples.
                </p>
                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                  View Demo
                  <Play className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. How It Works (Student Path) */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Three simple steps to better campus living
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <MessageCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Submit Vibe Check
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Weekly feedback on dorm harmony — anonymous and constructive.
                Our AI helps surface tension before it becomes conflict.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get Smart Roommate Matches
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Algorithm recommends based on patterns and behaviors — not just
                preferences. Find people you'll actually live well with.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Balance Chores Automatically
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                System distributes fairly, adjusts over time based on
                preferences and completion patterns. No more awkward
                conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Admin & RA Dashboard Section (Minimal, Powerful) */}
      <section className="px-6 py-20 bg-gradient-to-br from-gray-50 to-indigo-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Total Clarity for Housing Staff — Without the Overwhelm
              </h2>

              <div className="space-y-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Dorm Health Scoring
                    </h3>
                    <p className="text-gray-600 font-light">
                      Harmony by dorm, floor, or individual unit — see patterns
                      at a glance
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Conflict Signals
                    </h3>
                    <p className="text-gray-600 font-light">
                      Detect tension before escalation with AI-powered early
                      warning systems
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Reassignment Suggestions
                    </h3>
                    <p className="text-gray-600 font-light">
                      Auto-generate best matches to resolve friction with
                      compatibility %
                    </p>
                  </div>
                </div>
              </div>

              <Button
                className="h-14 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open("/admin", "_blank")}
              >
                View Admin Dashboard
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* UI Preview */}
            <div className="relative">
              <Card className="border-2 border-gray-200 shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Dorm Health Overview
                  </h3>

                  <div className="space-y-4">
                    <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900">
                          Building A
                        </span>
                        <span className="text-emerald-600 font-bold">
                          92% Harmony
                        </span>
                      </div>
                      <div className="w-full h-2 bg-emerald-200 rounded-full overflow-hidden">
                        <div className="w-11/12 h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"></div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900">
                          Building B
                        </span>
                        <span className="text-yellow-600 font-bold">
                          67% Harmony
                        </span>
                      </div>
                      <div className="w-full h-2 bg-yellow-200 rounded-full overflow-hidden">
                        <div className="w-2/3 h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"></div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900">
                          Building C
                        </span>
                        <span className="text-blue-600 font-bold">
                          88% Harmony
                        </span>
                      </div>
                      <div className="w-full h-2 bg-blue-200 rounded-full overflow-hidden">
                        <div className="w-5/6 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                      <span>2 conflict signals detected this week</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. The Journey: Interactive Roadmap (Split View) */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Follow our roadmap as we build the future of shared living harmony
            </p>
          </div>

          {/* Journey Toggle */}
          <div className="flex justify-center mb-12">
            <div className="relative inline-flex p-1.5 bg-gray-100 rounded-2xl">
              <button
                onClick={() => handleViewToggle("student")}
                disabled={isTransitioning}
                className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  roadmapView === "student"
                    ? "bg-white text-gray-900 shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <GraduationCap className="w-5 h-5 inline mr-2" />
                Student Journey
              </button>
              <button
                onClick={() => handleViewToggle("admin")}
                disabled={isTransitioning}
                className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  roadmapView === "admin"
                    ? "bg-white text-gray-900 shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Shield className="w-5 h-5 inline mr-2" />
                Admin Journey
              </button>
              <button
                onClick={() => handleViewToggle("couples")}
                disabled={isTransitioning}
                className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  roadmapView === "couples"
                    ? "bg-white text-gray-900 shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Heart className="w-5 h-5 inline mr-2" />
                Couples Journey
              </button>
            </div>
          </div>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Progress line */}
            <div className="absolute top-16 left-8 right-8 h-1 bg-gray-200 rounded-full">
              <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full w-1/3"></div>
            </div>

            {/* Drag-scroll container */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-8 pb-8 min-w-max px-8">
                {getCurrentJourney().map((stage, index) => (
                  <div key={stage.id} className="flex-none w-80 relative group">
                    {/* Timeline dot */}
                    <div
                      className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-${stage.color.primary} rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300 flex items-center justify-center`}
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>

                    {/* Stage card */}
                    <Card className="mt-8 border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br from-${stage.color.primary} to-${stage.color.secondary} rounded-xl flex items-center justify-center`}
                          >
                            {index === 0 && (
                              <Target className="w-6 h-6 text-white" />
                            )}
                            {index === 1 && (
                              <Zap className="w-6 h-6 text-white" />
                            )}
                            {index === 2 && (
                              <Users className="w-6 h-6 text-white" />
                            )}
                            {index === 3 && (
                              <Globe className="w-6 h-6 text-white" />
                            )}
                            {index === 4 && (
                              <Heart className="w-6 h-6 text-white" />
                            )}
                            {index === 5 && (
                              <Building className="w-6 h-6 text-white" />
                            )}
                            {index === 6 && (
                              <Sparkles className="w-6 h-6 text-white" />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span
                                className={`text-xs font-medium text-${stage.color.primary} bg-${stage.color.bg} px-2 py-1 rounded-full`}
                              >
                                {stage.phase}
                              </span>
                              <span
                                className={`text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full`}
                              >
                                {stage.status}
                              </span>
                            </div>
                            <h3 className="font-bold text-lg text-gray-900">
                              {stage.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {stage.description}
                        </p>

                        <div className="space-y-3">
                          <div
                            className={`w-full bg-${stage.color.bg} rounded-full h-2 overflow-hidden`}
                          >
                            <div
                              className={`bg-gradient-to-r from-${stage.color.primary} to-${stage.color.secondary} h-full rounded-full transition-all duration-500`}
                              style={{ width: `${stage.progress}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">
                              {stage.timeline}
                            </span>
                            <span
                              className={`text-${stage.color.primary} font-semibold`}
                            >
                              {stage.progress}%
                            </span>
                          </div>
                        </div>

                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button
                            variant="outline"
                            size="sm"
                            className={`w-full border-${stage.color.primary} text-${stage.color.primary} hover:bg-${stage.color.bg}`}
                          >
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll hint */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600">
                <ChevronRight className="w-4 h-4" />
                <span>Drag to explore timeline</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Vision Anchoring Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
            Building Tomorrow's Living Harmony
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Students First
              </h3>
              <p className="text-gray-600 font-light">
                Designed with real feedback from dorm residents
              </p>
            </div>

            <div className="group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Data-Driven
              </h3>
              <p className="text-gray-600 font-light">
                AI improves continuously from lived behavior patterns
              </p>
            </div>

            <div className="group">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Community-Centered
              </h3>
              <p className="text-gray-600 font-light">
                Tools foster trust and transparency between roommates
              </p>
            </div>

            <div className="group">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Privacy-Focused
              </h3>
              <p className="text-gray-600 font-light">
                Anonymous where needed, transparent where helpful
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Email Capture & Pilot CTA (Simplified) */}
      <section className="px-6 py-20 bg-gradient-to-br from-blue-50/40 via-white to-purple-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Ready to Transform Shared Living?
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-light">
            Join thousands of students, housing administrators, and couples
            creating more harmonious living spaces.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Get Early Access */}
            <Card className="border-2 border-emerald-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Get Early Access
                </h3>
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 rounded-xl border-2 border-emerald-200 focus:border-emerald-500"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl font-semibold"
                  >
                    Join Waitlist
                  </Button>
                </form>
                {isSubmitted && (
                  <div className="mt-4 flex items-center gap-2 text-emerald-600 justify-center">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">Thanks! We'll be in touch.</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* For Universities */}
            <Card className="border-2 border-indigo-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  For Universities
                </h3>
                <p className="text-gray-600 mb-6 font-light">
                  Launch a pilot program and see immediate improvements in
                  housing satisfaction.
                </p>
                <Button className="w-full h-12 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-xl font-semibold">
                  Launch a Pilot
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Follow Our Progress */}
            <Card className="border-2 border-purple-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Follow Our Progress
                </h3>
                <p className="text-gray-600 mb-6 font-light">
                  Get updates on new features and roadmap milestones as we build
                  the future.
                </p>
                <Button
                  variant="outline"
                  className="w-full h-12 border-2 border-purple-300 text-purple-700 hover:bg-purple-50 rounded-xl font-semibold"
                >
                  Subscribe to Updates
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-sm text-gray-500 space-y-2">
            <p className="flex items-center justify-center gap-2 font-medium">
              <Shield className="w-4 h-4" />
              Privacy-first approach: Your data is never shown without consent.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
