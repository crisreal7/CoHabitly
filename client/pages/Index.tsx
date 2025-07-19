import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import InteractiveDemo from "@/components/InteractiveDemo";
import CouplesDemo from "@/components/CouplesDemo";
import StudentDemo from "@/components/StudentDemo";
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
  ShoppingCart,
  Bell,
  Settings,
  User,
} from "lucide-react";

type RoadmapView = "student" | "admin" | "couples" | "roommate";

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
  const [demoType, setDemoType] = useState<"roommate" | "couples" | "student">(
    "roommate",
  );
  const [demoTab, setDemoTab] = useState("overview");

  // Update demo tab when demo type changes
  useEffect(() => {
    if (demoType === "couples") {
      setDemoTab("home");
    } else if (demoType === "student") {
      setDemoTab("overview");
    } else {
      setDemoTab("overview");
    }
  }, [demoType]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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

  // Comprehensive roadmap data
  const studentJourney: RoadmapStage[] = [
    {
      id: "S1",
      phase: "Foundation",
      title: "Smart Roommate Matching",
      description:
        "AI-powered compatibility assessment and optimal room assignments based on lifestyle preferences",
      status: "Live",
      timeline: "Available Now",
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
      phase: "Harmony",
      title: "Anonymous Feedback System",
      description:
        "Safe communication tools for addressing concerns without direct confrontation",
      status: "Live",
      timeline: "Available Now",
      progress: 100,
      color: {
        primary: "blue-500",
        secondary: "blue-600",
        bg: "blue-50",
        border: "blue-200",
      },
    },
    {
      id: "S3",
      phase: "Growth",
      title: "Social Integration",
      description:
        "Campus-wide social features, study groups, and community building tools",
      status: "Beta",
      timeline: "Q3 2024",
      progress: 75,
      color: {
        primary: "purple-500",
        secondary: "purple-600",
        bg: "purple-50",
        border: "purple-200",
      },
    },
    {
      id: "S4",
      phase: "Intelligence",
      title: "Predictive Conflict Resolution",
      description:
        "AI-driven early warning system for potential roommate conflicts with proactive solutions",
      status: "Coming Soon",
      timeline: "Q4 2024",
      progress: 45,
      color: {
        primary: "orange-500",
        secondary: "orange-600",
        bg: "orange-50",
        border: "orange-200",
      },
    },
  ];

  const adminJourney: RoadmapStage[] = [
    {
      id: "A1",
      phase: "Analytics",
      title: "Real-Time Harmony Dashboard",
      description:
        "Comprehensive dorm health metrics, satisfaction scores, and trend analysis for housing administrators",
      status: "Live",
      timeline: "Available Now",
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
      phase: "Intervention",
      title: "Automated Alert System",
      description:
        "Smart notifications for potential conflicts with suggested intervention strategies",
      status: "Live",
      timeline: "Available Now",
      progress: 100,
      color: {
        primary: "red-500",
        secondary: "red-600",
        bg: "red-50",
        border: "red-200",
      },
    },
    {
      id: "A3",
      phase: "Optimization",
      title: "Housing Assignment AI",
      description:
        "Machine learning algorithms for optimal room assignments and housing policy recommendations",
      status: "Beta",
      timeline: "Q3 2024",
      progress: 80,
      color: {
        primary: "cyan-500",
        secondary: "cyan-600",
        bg: "cyan-50",
        border: "cyan-200",
      },
    },
    {
      id: "A4",
      phase: "Integration",
      title: "Campus Systems Integration",
      description:
        "Seamless integration with existing housing management, student information, and communication systems",
      status: "Coming Soon",
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
      phase: "Intelligence",
      title: "Predictive Analytics Suite",
      description:
        "Advanced forecasting for housing demand, satisfaction prediction, and resource optimization",
      status: "Planned",
      timeline: "Q1 2025",
      progress: 15,
      color: {
        primary: "violet-500",
        secondary: "violet-600",
        bg: "violet-50",
        border: "violet-200",
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
      title: "Shared Goals & Milestones",
      description:
        "Track relationship goals and celebrate achievements together",
      status: "Coming Soon",
      timeline: "Q4 2024",
      progress: 30,
      color: {
        primary: "pink-500",
        secondary: "pink-600",
        bg: "pink-50",
        border: "pink-200",
      },
    },
    {
      id: "C3",
      phase: "Harmony",
      title: "Living Style Compatibility",
      description:
        "Advanced matching for cleaning habits, social preferences, and daily routines",
      status: "Coming Soon",
      timeline: "Q4 2024",
      progress: 40,
      color: {
        primary: "purple-500",
        secondary: "purple-600",
        bg: "purple-50",
        border: "purple-200",
      },
    },
    {
      id: "C4",
      phase: "Growth",
      title: "Relationship Milestones",
      description:
        "Track moving in together, financial planning, and major life decision support",
      status: "Planned",
      timeline: "Q1 2025",
      progress: 20,
      color: {
        primary: "indigo-500",
        secondary: "indigo-600",
        bg: "indigo-50",
        border: "indigo-200",
      },
    },
    {
      id: "C5",
      phase: "Intelligence",
      title: "AI Relationship Coach",
      description:
        "Personalized guidance for communication, conflict resolution, and relationship strengthening",
      status: "Planned",
      timeline: "Q2 2025",
      progress: 10,
      color: {
        primary: "emerald-500",
        secondary: "emerald-600",
        bg: "emerald-50",
        border: "emerald-200",
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
        <div className="absolute inset-0 bg-gradient-to-br from-sage-50/40 via-white to-brand-50/30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-brand-200/20 to-sage-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-lavender-200/20 to-mint-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-coral-200/20 to-brand-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>
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
                    className="h-16 px-8 bg-gradient-to-r from-brand-600 to-sage-600 hover:from-brand-700 hover:to-sage-700 text-white rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group-hover:scale-105"
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
                        onClick={() => {
                          const adminSection =
                            document.querySelector("#admin-section");
                          if (adminSection) {
                            adminSection.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
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
                    className="h-14 px-8 bg-gradient-to-r from-mint-500 to-coral-500 hover:from-mint-600 hover:to-coral-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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
              <div className="relative w-96 h-96">
                {/* Central pulsing ring animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 border-4 border-sage-300 rounded-full animate-ripple opacity-30"></div>
                  <div className="absolute w-48 h-48 border-2 border-brand-400 rounded-full animate-pulse delay-300 opacity-40"></div>
                  <div className="absolute w-32 h-32 border-2 border-lavender-400 rounded-full animate-pulse delay-600 opacity-50"></div>
                </div>

                {/* Floating capability cards */}
                <div className="absolute top-0 left-12 transform -rotate-12 animate-gentle-bounce">
                  <div className="bg-gradient-to-br from-mint-100 to-mint-200 rounded-2xl p-4 shadow-lg border border-mint-300/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-mint-500 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-mint-800">
                          Vibe Check
                        </p>
                        <p className="text-xs text-mint-600">
                          Anonymous feedback
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-16 right-8 transform rotate-12 animate-gentle-bounce delay-1000">
                  <div className="bg-gradient-to-br from-coral-100 to-coral-200 rounded-2xl p-4 shadow-lg border border-coral-300/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center">
                        <ShoppingCart className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-coral-800">
                          Shared Groceries
                        </p>
                        <p className="text-xs text-coral-600">Smart lists</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 transform -rotate-6 animate-gentle-bounce delay-2000">
                  <div className="bg-gradient-to-br from-lavender-100 to-lavender-200 rounded-2xl p-4 shadow-lg border border-lavender-300/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-lavender-500 rounded-full flex items-center justify-center">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-lavender-800">
                          HeartSpace
                        </p>
                        <p className="text-xs text-lavender-600">
                          AI mediation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Central logo with soft glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-brand-500 to-sage-500 rounded-2xl flex items-center justify-center shadow-2xl border border-white/20 backdrop-blur-sm">
                    <Home className="w-12 h-12 text-white animate-pulse" />
                  </div>
                </div>

                {/* Ambient floating particles */}
                <div className="absolute top-8 left-8 w-2 h-2 bg-brand-400 rounded-full animate-pulse opacity-60"></div>
                <div className="absolute top-20 right-16 w-1 h-1 bg-sage-400 rounded-full animate-pulse delay-500 opacity-70"></div>
                <div className="absolute bottom-16 right-12 w-2 h-2 bg-lavender-400 rounded-full animate-pulse delay-1000 opacity-50"></div>
                <div className="absolute bottom-8 left-16 w-1 h-1 bg-coral-400 rounded-full animate-pulse delay-1500 opacity-60"></div>
                <div className="absolute top-1/3 left-4 w-1 h-1 bg-mint-400 rounded-full animate-pulse delay-2000 opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section
        id="interactive-demo"
        className={`px-6 py-32 relative overflow-hidden transition-all duration-1000 ease-in-out ${
          demoType === "couples"
            ? "bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900"
            : demoType === "student"
              ? "bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900"
              : "bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
        }`}
      >
        <div className="absolute inset-0">
          {demoType === "couples" ? (
            <>
              <div className="absolute top-20 left-10 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl animate-pulse transition-all duration-1000"></div>
              <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000 transition-all duration-1000"></div>
              <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-500 transition-all duration-1000"></div>
            </>
          ) : demoType === "student" ? (
            <>
              <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse transition-all duration-1000"></div>
              <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000 transition-all duration-1000"></div>
              <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-500/20 rounded-full blur-2xl animate-pulse delay-500 transition-all duration-1000"></div>
            </>
          ) : (
            <>
              <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse transition-all duration-1000"></div>
              <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000 transition-all duration-1000"></div>
              <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-500/20 rounded-full blur-2xl animate-pulse delay-500 transition-all duration-1000"></div>
            </>
          )}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border transition-all duration-700 ${
                  demoType === "couples"
                    ? "bg-rose-500/20 border-rose-400/30"
                    : "bg-blue-500/20 border-blue-400/30"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full animate-pulse transition-all duration-700 ${
                    demoType === "couples" ? "bg-rose-400" : "bg-green-400"
                  }`}
                ></div>
                <span
                  className={`text-sm font-medium transition-all duration-700 ${
                    demoType === "couples" ? "text-rose-200" : "text-blue-200"
                  }`}
                >
                  Live Interactive Demo
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Experience CoHabitly
                <span
                  className={`text-transparent bg-clip-text block transition-all duration-700 ${
                    demoType === "couples"
                      ? "bg-gradient-to-r from-rose-400 to-pink-400 animate-pulse"
                      : demoType === "student"
                        ? "bg-gradient-to-r from-emerald-400 to-green-400 animate-pulse"
                        : "bg-gradient-to-r from-blue-400 to-purple-400"
                  }`}
                >
                  in Action
                </span>
              </h2>

              <p
                className={`text-xl mb-8 leading-relaxed font-light transition-all duration-700 ${
                  demoType === "couples"
                    ? "text-rose-100"
                    : demoType === "student"
                      ? "text-emerald-100"
                      : "text-blue-100"
                }`}
              >
                {demoType === "couples"
                  ? "Discover gentle communication tools and relationship harmony features. See how CoHabitly strengthens bonds with AI-powered insights and thoughtful design."
                  : demoType === "student"
                    ? "Experience seamless dorm life management with RA contact, transfer requests, and community features designed specifically for student housing."
                    : "Tap, scroll, and interact with a fully functional roommate experience. See how CoHabitly transforms shared living with real features and smart AI."}
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
                        ? "bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white"
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
                  <Button
                    className={`h-14 px-8 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${
                      demoType === "student"
                        ? "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white"
                        : "bg-white/20 text-blue-100 hover:bg-white/30"
                    }`}
                    onClick={() => {
                      setDemoType("student");
                      const demoPhone = document.querySelector(".demo-phone");
                      if (demoPhone) {
                        demoPhone.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }
                    }}
                  >
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Student Demo
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  {demoType === "student" ? (
                    <>
                      <div className="flex items-center gap-2 text-emerald-200">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Easy dorm transfer requests</span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-200">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>One-tap RA contact</span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-200">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Anonymous incident reporting</span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-200">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Dorm vibe check-ins</span>
                      </div>
                    </>
                  ) : demoType === "couples" ? (
                    <>
                      <div className="flex items-center gap-2 text-rose-200">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>HeartSpace messaging</span>
                      </div>
                      <div className="flex items-center gap-2 text-rose-200">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>AI relationship support</span>
                      </div>
                      <div className="flex items-center gap-2 text-rose-200">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Scheduled love notes</span>
                      </div>
                      <div className="flex items-center gap-2 text-rose-200">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Shared goal tracking</span>
                      </div>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="demo-phone relative">
                {/* Mode indicator above phone */}
                <div className="text-center mb-4">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      demoType === "student"
                        ? "bg-emerald-500/20 text-emerald-300 shadow-emerald-500/20 shadow-lg"
                        : demoType === "couples"
                          ? "bg-pink-500/20 text-pink-300 shadow-pink-500/20 shadow-lg"
                          : "bg-blue-500/20 text-blue-300 shadow-blue-500/20 shadow-lg"
                    }`}
                  >
                    {demoType === "student" ? (
                      <>
                        <GraduationCap className="w-4 h-4" />
                        Student Mode
                      </>
                    ) : demoType === "couples" ? (
                      <>
                        <Heart className="w-4 h-4" />
                        Couples Mode
                      </>
                    ) : (
                      <>
                        <Users className="w-4 h-4" />
                        Roommate Mode
                      </>
                    )}
                  </div>
                </div>

                {/* Mobile App Frame */}
                <div className="w-80 h-[640px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl relative">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative flex flex-col">
                    {/* Status bar */}
                    <div className="h-12 bg-gray-50 flex items-center justify-between px-6 shrink-0">
                      <div className="text-sm font-semibold">9:41</div>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                        <div className="w-6 h-3 border border-gray-400 rounded-sm">
                          <div className="w-4 h-full bg-green-500 rounded-sm"></div>
                        </div>
                      </div>
                    </div>

                    {/* App Header with Navigation */}
                    <div
                      className={`px-6 py-4 text-white relative shrink-0 ${
                        demoType === "student"
                          ? "bg-gradient-to-r from-emerald-500 to-emerald-600"
                          : demoType === "couples"
                            ? "bg-gradient-to-r from-pink-500 to-pink-600"
                            : "bg-gradient-to-r from-blue-600 to-blue-700"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                            className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
                          >
                            <div className="flex flex-col gap-1">
                              <div className="w-4 h-0.5 bg-white rounded"></div>
                              <div className="w-4 h-0.5 bg-white rounded"></div>
                              <div className="w-4 h-0.5 bg-white rounded"></div>
                            </div>
                          </button>
                          <div>
                            <h3 className="font-bold text-lg">CoHabitly</h3>
                            <p className="text-white/80 text-sm">
                              {demoType === "student"
                                ? "Student Mode"
                                : demoType === "couples"
                                  ? "Together Mode"
                                  : "Roommate Mode"}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                            <Bell className="w-4 h-4 text-white" />
                          </div>
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                            <Settings className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Slide-down menu */}
                    {showMobileMenu && (
                      <div
                        className={`absolute top-20 left-0 right-0 z-20 mx-3 rounded-2xl shadow-xl border backdrop-blur-sm transition-all duration-300 ${
                          demoType === "student"
                            ? "bg-emerald-50/95 border-emerald-200"
                            : demoType === "couples"
                              ? "bg-pink-50/95 border-pink-200"
                              : "bg-blue-50/95 border-blue-200"
                        }`}
                      >
                        <div className="p-4 grid grid-cols-3 gap-3">
                          {(demoType === "student"
                            ? [
                                { id: "overview", label: "Home", icon: Home },
                                {
                                  id: "events",
                                  label: "Community",
                                  icon: Star,
                                },
                                {
                                  id: "chores",
                                  label: "Chores",
                                  icon: CheckCircle,
                                },
                                { id: "vibe", label: "Vibe", icon: Heart },
                                {
                                  id: "messages",
                                  label: "Contact RA",
                                  icon: MessageCircle,
                                },
                                { id: "profile", label: "Profile", icon: User },
                              ]
                            : demoType === "couples"
                              ? [
                                  { id: "home", label: "Home", icon: Home },
                                  {
                                    id: "shared",
                                    label: "Shared",
                                    icon: Users,
                                  },
                                  {
                                    id: "communicate",
                                    label: "HeartSpace",
                                    icon: MessageCircle,
                                  },
                                  {
                                    id: "preferences",
                                    label: "Style",
                                    icon: Settings,
                                  },
                                ]
                              : [
                                  { id: "overview", label: "Home", icon: Home },
                                  {
                                    id: "grocery",
                                    label: "Grocery",
                                    icon: ShoppingCart,
                                  },
                                  { id: "events", label: "Events", icon: Star },
                                  {
                                    id: "chores",
                                    label: "Chores",
                                    icon: CheckCircle,
                                  },
                                  { id: "vibe", label: "Vibe", icon: Heart },
                                  {
                                    id: "messages",
                                    label: "Messages",
                                    icon: MessageCircle,
                                  },
                                ]
                          ).map(({ id, label, icon: Icon }) => (
                            <button
                              key={id}
                              onClick={() => {
                                setDemoTab(id);
                                setShowMobileMenu(false);
                              }}
                              className={`flex flex-col items-center gap-2 p-3 rounded-xl text-xs font-medium transition-all ${
                                demoTab === id
                                  ? demoType === "student"
                                    ? "bg-emerald-500 text-white shadow-lg"
                                    : demoType === "couples"
                                      ? "bg-pink-500 text-white shadow-lg"
                                      : "bg-blue-500 text-white shadow-lg"
                                  : "text-gray-700 hover:bg-white/70"
                              }`}
                            >
                              <Icon className="w-5 h-5" />
                              <span>{label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Content Area - This is where the specific demo content will go */}
                    <div className="flex-1 overflow-auto bg-gray-50">
                      {demoType === "roommate" ? (
                        <InteractiveDemo activeTab={demoTab as any} />
                      ) : demoType === "couples" ? (
                        <CouplesDemo activeTab={demoTab as any} />
                      ) : (
                        <StudentDemo activeTab={demoTab as any} />
                      )}
                    </div>
                  </div>
                </div>
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

      {/* Roadmap Section */}
      <section className="px-6 py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-8">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">
                Product Roadmap
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              The Journey to Better
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text block">
                Shared Living
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
              From college dormitories to forever homes, we're building the
              future of cohabitation. See what's live now and what's coming
              next.
            </p>

            {/* View Toggle */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button
                variant={roadmapView === "student" ? "default" : "outline"}
                className={`h-12 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                  roadmapView === "student"
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg"
                    : "border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                }`}
                onClick={() => handleViewToggle("student")}
                disabled={isTransitioning}
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                Student Journey
              </Button>
              <Button
                variant={roadmapView === "admin" ? "default" : "outline"}
                className={`h-12 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                  roadmapView === "admin"
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg"
                    : "border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50"
                }`}
                onClick={() => handleViewToggle("admin")}
                disabled={isTransitioning}
              >
                <Shield className="w-5 h-5 mr-2" />
                Admin Features
              </Button>
              <Button
                variant={roadmapView === "couples" ? "default" : "outline"}
                className={`h-12 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                  roadmapView === "couples"
                    ? "bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg"
                    : "border-2 border-rose-200 text-rose-700 hover:bg-rose-50"
                }`}
                onClick={() => handleViewToggle("couples")}
                disabled={isTransitioning}
              >
                <Heart className="w-5 h-5 mr-2" />
                Couples Path
              </Button>
            </div>
          </div>

          {/* Roadmap Timeline */}
          <div
            className={`transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 transform scale-95"
                : "opacity-100 transform scale-100"
            }`}
          >
            <HoverScrollContainer className="py-4">
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
                            {index === 7 && (
                              <BarChart3 className="w-6 h-6 text-white" />
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
            </HoverScrollContainer>

            {/* Scroll hint */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600">
                <ChevronRight className="w-4 h-4" />
                <span>Hover left/right to explore timeline</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Dashboard Preview Section */}
      <section
        id="admin-section"
        className="px-6 py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 rounded-full mb-8 border border-indigo-400/30">
              <Shield className="w-4 h-4 text-indigo-300" />
              <span className="text-indigo-200 text-sm font-medium">
                Admin Dashboard
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Empower Housing
              <span className="text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text block">
                Administrators
              </span>
            </h2>

            <p className="text-xl text-indigo-100 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
              Get real-time insights into dorm harmony, proactive conflict
              resolution, and data-driven housing decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                className="h-14 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open("/admin", "_blank")}
              >
                <Shield className="w-5 h-5 mr-2" />
                Launch Admin Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="h-14 px-8 bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 rounded-2xl font-semibold transition-all duration-300"
              >
                <Building className="w-5 h-5 mr-2" />
                Request University Demo
              </Button>
            </div>
          </div>

          {/* Admin Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Harmony Analytics
                </h3>
                <p className="text-indigo-200 leading-relaxed">
                  Real-time dorm health scores, conflict prediction, and
                  satisfaction trends across your housing portfolio.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Early Intervention
                </h3>
                <p className="text-indigo-200 leading-relaxed">
                  AI-powered alerts for tension detection, automated mediation
                  suggestions, and proactive support workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Smart Matching
                </h3>
                <p className="text-indigo-200 leading-relaxed">
                  Advanced compatibility algorithms, preference learning, and
                  data-driven room assignment optimization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Showcase Section */}
      <section className="px-6 py-32 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Why Choose CoHabitly?
            </h2>
            <p className="text-xl text-gray-600 mb-12 font-light max-w-3xl mx-auto">
              Our AI-powered platform transforms shared living with intelligent
              features designed for real-world harmony.
            </p>
          </div>

          <HoverScrollContainer className="py-4">
            <div className="flex gap-8 pb-8 min-w-max px-8">
              {[
                {
                  icon: <Smartphone className="w-8 h-8 text-white" />,
                  title: "Anonymous Feedback",
                  description:
                    "Safe space for honest communication without confrontation",
                  color: "emerald",
                  gradient: "from-emerald-500 to-teal-500",
                },
                {
                  icon: <Heart className="w-8 h-8 text-white" />,
                  title: "Smart Compatibility",
                  description:
                    "AI-powered matching based on living habits and preferences",
                  color: "pink",
                  gradient: "from-pink-500 to-rose-500",
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-white" />,
                  title: "Automated Chores",
                  description:
                    "Fair distribution and tracking of household responsibilities",
                  color: "blue",
                  gradient: "from-blue-500 to-indigo-500",
                },
                {
                  icon: <MessageCircle className="w-8 h-8 text-white" />,
                  title: "AI Mediation",
                  description:
                    "Gentle conflict resolution with personalized suggestions",
                  color: "purple",
                  gradient: "from-purple-500 to-indigo-500",
                },
                {
                  icon: <BarChart3 className="w-8 h-8 text-white" />,
                  title: "Harmony Metrics",
                  description:
                    "Real-time insights into your living environment health",
                  color: "orange",
                  gradient: "from-orange-500 to-red-500",
                },
                {
                  icon: <Shield className="w-8 h-8 text-white" />,
                  title: "Privacy First",
                  description:
                    "End-to-end encryption with granular privacy controls",
                  color: "gray",
                  gradient: "from-gray-600 to-gray-700",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="flex-none w-80 border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 group"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </HoverScrollContainer>

          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600">
              <ChevronRight className="w-4 h-4" />
              <span>Hover left/right to explore features</span>
              <ChevronRight className="w-4 h-4" />
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
