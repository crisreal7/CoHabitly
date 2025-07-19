import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import InteractiveDemo from "@/components/InteractiveDemo";
import CouplesDemo from "@/components/CouplesDemo";
import HoverScrollContainer from "@/components/HoverScrollContainer";
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
  const [demoType, setDemoType] = useState<"roommate" | "couples">("roommate");

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

  // Sample data
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
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMockup((prev) => (prev + 1) % mockupCards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 font-sans">
      {/* 1. Hero Section */}
      <section className="relative px-6 py-20 md:py-32 lg:py-40 overflow-hidden">
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

              <div className="space-y-8">
                <div className="relative group">
                  <Button
                    className="h-16 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group-hover:scale-105"
                    onClick={() => {
                      const demoElement =
                        document.querySelector("#interactive-demo");
                      if (demoElement) {
                        demoElement.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <Play className="w-5 h-5" />
                    Try the Live Demo
                    <Sparkles className="w-5 h-5 animate-pulse" />
                  </Button>

                  {selectedDemo && (
                    <div className="absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl p-6 space-y-3 z-50">
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-12 text-left hover:bg-blue-50"
                        onClick={() => {
                          const demoElement =
                            document.querySelector("#interactive-demo");
                          if (demoElement) {
                            demoElement.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
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

                <div className="flex justify-center lg:justify-start">
                  <Button
                    className="h-14 px-8 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => {
                      const earlyAccessSection = document.querySelector(
                        "#early-access-section",
                      );
                      if (earlyAccessSection) {
                        earlyAccessSection.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    Request Early Access
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-[640px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    <div className="h-12 bg-gray-50 flex items-center justify-between px-6">
                      <div className="text-sm font-semibold">9:41</div>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                        <div className="w-6 h-3 border border-gray-400 rounded-sm">
                          <div className="w-4 h-full bg-green-500 rounded-sm"></div>
                        </div>
                      </div>
                    </div>

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
                                <div
                                  className={`text-sm font-medium ${card.isActive ? "text-gray-900" : "line-through text-gray-500"}`}
                                >
                                  {card.title}
                                </div>
                                <div className="text-xs text-gray-600">
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

      {/* Interactive Demo Section */}
      <section
        id="interactive-demo"
        className="px-6 py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full mb-8 border border-blue-400/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-blue-200 text-sm font-medium">
                  Live Interactive Demo
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Experience CoHabitly
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text block">
                  in Action
                </span>
              </h2>

              <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
                Tap, scroll, and interact with a fully functional roommate
                experience. See how CoHabitly transforms shared living with real
                features and smart AI.
              </p>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className={`h-14 px-8 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${
                      demoType === "roommate"
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                        : "bg-white/20 text-blue-100 hover:bg-white/30"
                    }`}
                    onClick={() => {
                      setDemoType("roommate");
                      const demoPhone = document.querySelector(".demo-phone");
                      if (demoPhone) {
                        demoPhone.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }
                    }}
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Roommate Demo
                  </Button>
                  <Button
                    className={`h-14 px-8 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${
                      demoType === "couples"
                        ? "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white"
                        : "bg-white/20 text-blue-100 hover:bg-white/30"
                    }`}
                    onClick={() => {
                      setDemoType("couples");
                      const demoPhone = document.querySelector(".demo-phone");
                      if (demoPhone) {
                        demoPhone.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }
                    }}
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Couples Demo
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-blue-200">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Real-time vibe tracking</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-200">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Smart chore management</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-200">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Anonymous feedback</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-200">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>AI-powered mediation</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="demo-phone">
                {demoType === "roommate" ? (
                  <InteractiveDemo />
                ) : (
                  <CouplesDemo />
                )}
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
              </div>
              <span className="text-white font-medium">
                Tap the tabs to explore different features
              </span>
              <ChevronRight className="w-4 h-4 text-white/70" />
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <section
        id="early-access-section"
        className="px-6 py-20 bg-gradient-to-br from-blue-50/40 via-white to-purple-50/30"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Ready to Transform Shared Living?
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-light">
            Join thousands of students, housing administrators, and couples
            creating more harmonious living spaces.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
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
