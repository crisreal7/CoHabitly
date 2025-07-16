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
  const [showAdminDemo, setShowAdminDemo] = useState(false);

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
                CoHabitly helps students live better together — anonymously,
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
                    <span className="font-semibold text-lg">CoHabitly</span>
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
              <Button
                className="h-12 px-8 bg-sage-600 hover:bg-sage-700 text-white rounded-xl font-semibold"
                onClick={() => {
                  setShowAdminDemo(true);
                  // Small delay to ensure the section is rendered before scrolling
                  setTimeout(() => {
                    const adminSection = document.getElementById(
                      "admin-portal-section",
                    );
                    adminSection?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
              >
                View Admin Demo
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

      {/* Admin Preview Section */}
      {showAdminDemo && (
        <section
          id="admin-portal-section"
          className="px-4 py-16 bg-gradient-to-br from-sage-25 via-white to-lavender-25"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                See the CoHabitly Admin Portal in Action
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                A live glimpse at how RAs and housing staff monitor dorm health,
                address roommate issues, and manage assignments — all in one
                view.
              </p>
            </div>

            {/* Dashboard Container */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-sage-100">
              {/* Dashboard Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 pb-4 border-b border-sage-100">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Admin Dashboard
                  </h3>
                  <p className="text-muted-foreground">
                    West Campus Housing • Fall 2024
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-4 sm:mt-0">
                  <select className="px-3 py-2 border border-sage-200 rounded-lg text-sm bg-white">
                    <option>Filter by Dorm</option>
                    <option>Building A</option>
                    <option>Building B</option>
                    <option>Building C</option>
                  </select>
                  <div className="flex items-center gap-2 px-3 py-2 bg-mint-50 rounded-lg">
                    <div className="w-2 h-2 bg-mint-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-mint-700 font-medium">
                      Live
                    </span>
                  </div>
                </div>
              </div>

              {/* 1. Dorm Overview Cards */}
              <div className="mb-12">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-mint-100 text-mint-800 rounded-full text-sm font-medium mb-3">
                    <BarChart3 className="w-4 h-4" />
                    Dorm Management
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Dorm Health Overview
                  </h3>
                  <p className="text-muted-foreground max-w-2xl">
                    See average vibe scores, flagged messages, and completion
                    rates across all dorms.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="border-sage-100 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h5 className="font-semibold text-foreground">
                            Harrison Hall
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            Floor 1-4
                          </p>
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 bg-mint-100 rounded-full">
                          <div className="w-2 h-2 bg-mint-500 rounded-full"></div>
                          <span className="text-xs text-mint-700 font-medium">
                            94%
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Students
                          </span>
                          <span className="font-medium">156</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Flagged</span>
                          <span className="font-medium text-coral-600">2</span>
                        </div>
                        <div className="w-full h-2 bg-sage-100 rounded-full overflow-hidden">
                          <div className="w-11/12 h-full bg-mint-500 rounded-full"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-sage-100 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h5 className="font-semibold text-foreground">
                            Kennedy Tower
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            Floor 5-12
                          </p>
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 bg-coral-100 rounded-full">
                          <div className="w-2 h-2 bg-coral-500 rounded-full"></div>
                          <span className="text-xs text-coral-700 font-medium">
                            67%
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Students
                          </span>
                          <span className="font-medium">203</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Flagged</span>
                          <span className="font-medium text-coral-600">8</span>
                        </div>
                        <div className="w-full h-2 bg-sage-100 rounded-full overflow-hidden">
                          <div className="w-2/3 h-full bg-coral-500 rounded-full"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-sage-100 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h5 className="font-semibold text-foreground">
                            Wilson Commons
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            Floor 1-3
                          </p>
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 bg-lavender-100 rounded-full">
                          <div className="w-2 h-2 bg-lavender-500 rounded-full"></div>
                          <span className="text-xs text-lavender-700 font-medium">
                            88%
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Students
                          </span>
                          <span className="font-medium">89</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Flagged</span>
                          <span className="font-medium text-coral-600">1</span>
                        </div>
                        <div className="w-full h-2 bg-sage-100 rounded-full overflow-hidden">
                          <div className="w-5/6 h-full bg-lavender-500 rounded-full"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* 2. Student Roster Table */}
              <div className="mb-12">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-lavender-100 text-lavender-800 rounded-full text-sm font-medium mb-3">
                    <Users className="w-4 h-4" />
                    Vibe Monitoring
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Student Roster & Alerts
                  </h3>
                  <p className="text-muted-foreground max-w-2xl">
                    Monitor profile completion, roommate feedback, and
                    AI-flagged tension indicators.
                  </p>
                </div>
                <Card className="border-sage-100">
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-sage-50">
                          <tr className="border-b border-sage-100">
                            <th className="text-left p-4 font-medium text-foreground">
                              Student
                            </th>
                            <th className="text-left p-4 font-medium text-foreground">
                              Dorm
                            </th>
                            <th className="text-center p-4 font-medium text-foreground">
                              Compatibility
                            </th>
                            <th className="text-center p-4 font-medium text-foreground">
                              Profile
                            </th>
                            <th className="text-center p-4 font-medium text-foreground">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-sage-50 hover:bg-sage-25">
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-mint-100 rounded-full flex items-center justify-center">
                                  <span className="text-xs font-semibold text-mint-600">
                                    AM
                                  </span>
                                </div>
                                <span className="font-medium">
                                  Alex Martinez
                                </span>
                              </div>
                            </td>
                            <td className="p-4 text-muted-foreground">
                              Harrison 312
                            </td>
                            <td className="p-4 text-center">
                              <span className="px-2 py-1 bg-mint-100 text-mint-700 rounded-full text-sm font-medium">
                                92%
                              </span>
                            </td>
                            <td className="p-4 text-center">
                              <span className="text-sm font-medium">100%</span>
                            </td>
                            <td className="p-4 text-center">
                              <CheckCircle className="w-4 h-4 text-mint-500 mx-auto" />
                            </td>
                          </tr>
                          <tr className="border-b border-sage-50 hover:bg-sage-25">
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-lavender-100 rounded-full flex items-center justify-center">
                                  <span className="text-xs font-semibold text-lavender-600">
                                    JR
                                  </span>
                                </div>
                                <span className="font-medium">Jordan Reed</span>
                              </div>
                            </td>
                            <td className="p-4 text-muted-foreground">
                              Kennedy 847
                            </td>
                            <td className="p-4 text-center">
                              <span className="px-2 py-1 bg-coral-100 text-coral-700 rounded-full text-sm font-medium">
                                54%
                              </span>
                            </td>
                            <td className="p-4 text-center">
                              <span className="text-sm font-medium">78%</span>
                            </td>
                            <td className="p-4 text-center">
                              <div className="w-4 h-4 bg-coral-500 rounded-full mx-auto animate-pulse"></div>
                            </td>
                          </tr>
                          <tr className="border-b border-sage-50 hover:bg-sage-25">
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center">
                                  <span className="text-xs font-semibold text-sage-600">
                                    TP
                                  </span>
                                </div>
                                <span className="font-medium">Taylor Park</span>
                              </div>
                            </td>
                            <td className="p-4 text-muted-foreground">
                              Wilson 204
                            </td>
                            <td className="p-4 text-center">
                              <span className="px-2 py-1 bg-lavender-100 text-lavender-700 rounded-full text-sm font-medium">
                                89%
                              </span>
                            </td>
                            <td className="p-4 text-center">
                              <span className="text-sm font-medium">95%</span>
                            </td>
                            <td className="p-4 text-center">
                              <CheckCircle className="w-4 h-4 text-mint-500 mx-auto" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 3. Anonymous Feedback Inbox */}
              <div className="mb-12">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-coral-100 text-coral-800 rounded-full text-sm font-medium mb-3">
                    <MessageCircle className="w-4 h-4" />
                    Feedback Management
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Anonymous Feedback Inbox
                  </h3>
                  <p className="text-muted-foreground max-w-2xl">
                    Privately review filtered anonymous messages to catch early
                    warning signs.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-sage-100">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <MessageCircle className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            Harrison Hall
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <span className="px-2 py-1 bg-coral-100 text-coral-700 rounded-full text-xs">
                            Flagged
                          </span>
                          <span className="px-2 py-1 bg-sage-100 text-sage-700 rounded-full text-xs">
                            Unreviewed
                          </span>
                        </div>
                      </div>
                      <div className="bg-sage-50 p-3 rounded-lg mb-3">
                        <p className="text-sm text-foreground">
                          "My roommate never cleans and plays music super late.
                          It's affecting my sleep and grades."
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>2 hours ago</span>
                        <button className="text-primary hover:underline">
                          Review
                        </button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-sage-100">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <MessageCircle className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            Wilson Commons
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <span className="px-2 py-1 bg-mint-100 text-mint-700 rounded-full text-xs">
                            Positive
                          </span>
                          <span className="px-2 py-1 bg-mint-100 text-mint-700 rounded-full text-xs">
                            Reviewed
                          </span>
                        </div>
                      </div>
                      <div className="bg-sage-50 p-3 rounded-lg mb-3">
                        <p className="text-sm text-foreground">
                          "Really appreciate how fair the chore system is. My
                          roommates and I finally found balance!"
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>1 day ago</span>
                        <span className="text-mint-600">✓ Reviewed</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* 4. Matching Queue */}
              <div className="mb-12">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-sage-100 text-sage-800 rounded-full text-sm font-medium mb-3">
                    <Shield className="w-4 h-4" />
                    Smart Matching
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Matching Queue
                  </h3>
                  <p className="text-muted-foreground max-w-2xl">
                    When a living situation degrades, CoHabitly recommends new
                    dorm assignments automatically.
                  </p>
                </div>
                <Card className="border-sage-100">
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 bg-coral-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-coral-600">
                            JR
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">
                            Jordan Reed
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Current: Kennedy 847 (54% compatibility)
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="text-center">
                          <div className="px-3 py-2 bg-mint-50 rounded-lg border border-mint-200">
                            <p className="text-sm font-medium text-mint-700">
                              Harrison Hall
                            </p>
                            <p className="text-xs text-mint-600">92% match</p>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="px-3 py-2 bg-lavender-50 rounded-lg border border-lavender-200">
                            <p className="text-sm font-medium text-lavender-700">
                              Wilson Commons
                            </p>
                            <p className="text-xs text-lavender-600">
                              88% match
                            </p>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
                        >
                          Reassign
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 5. Chore Summary Cards */}
              <div className="mb-12">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-mint-100 text-mint-800 rounded-full text-sm font-medium mb-3">
                    <CheckCircle className="w-4 h-4" />
                    Task Oversight
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Chore Management
                  </h3>
                  <p className="text-muted-foreground max-w-2xl">
                    Assign chores across dorms and visualize consistency,
                    delegation, and follow-through.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card className="border-sage-100">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-mint-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="w-6 h-6 text-mint-600" />
                      </div>
                      <h5 className="font-bold text-2xl text-foreground mb-1">
                        847
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Chores completed this week
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-sage-100">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Home className="w-6 h-6 text-coral-600" />
                      </div>
                      <h5 className="font-bold text-xl text-foreground mb-1">
                        Kitchen Cleaning
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Most skipped chore
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-sage-100">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <BarChart3 className="w-6 h-6 text-lavender-600" />
                      </div>
                      <h5 className="font-bold text-2xl text-foreground mb-1">
                        67%
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Kennedy Tower completion rate
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-sage-100">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-6 h-6 text-sage-600" />
                      </div>
                      <h5 className="font-bold text-2xl text-foreground mb-1">
                        94%
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Average satisfaction score
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Feature 6: Household Digest */}
              <div className="mb-12">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-lavender-100 text-lavender-800 rounded-full text-sm font-medium mb-3">
                    <Mail className="w-4 h-4" />
                    AI Reports
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Household Digest
                  </h3>
                  <p className="text-muted-foreground max-w-2xl">
                    Weekly AI-generated reports are delivered to housing admins
                    with tone trends, alerts, and engagement metrics.
                  </p>
                </div>
                <Card className="border-sage-100 shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-4 border-b border-sage-100">
                        <h4 className="text-lg font-semibold text-foreground">
                          Weekly Housing Report
                        </h4>
                        <span className="text-sm text-muted-foreground">
                          Week of Nov 4-10, 2024
                        </span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-mint-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-mint-800 mb-2">
                            Positive Trends
                          </h5>
                          <p className="text-sm text-mint-700">
                            Chore completion up 15% campus-wide
                          </p>
                        </div>
                        <div className="bg-coral-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-coral-800 mb-2">
                            Attention Needed
                          </h5>
                          <p className="text-sm text-coral-700">
                            Kennedy Tower reports 3 noise complaints
                          </p>
                        </div>
                        <div className="bg-lavender-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-lavender-800 mb-2">
                            Engagement
                          </h5>
                          <p className="text-sm text-lavender-700">
                            89% weekly check-in participation
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Feature 7: Compatibility Logic Table */}
              <div className="mb-12">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-sage-100 text-sage-800 rounded-full text-sm font-medium mb-3">
                    <Heart className="w-4 h-4" />
                    Admin Only
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Compatibility Logic Table
                  </h3>
                  <p className="text-muted-foreground max-w-2xl">
                    Match roommates by shared values, routines, and feedback —
                    invisible to users.
                  </p>
                </div>
                <Card className="border-sage-100 shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-foreground">
                        Matching Criteria Weights
                      </h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Sleep Schedule</span>
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-2 bg-sage-100 rounded-full overflow-hidden">
                                <div className="w-5/6 h-full bg-primary rounded-full"></div>
                              </div>
                              <span className="text-xs font-medium">85%</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">
                              Cleanliness Standards
                            </span>
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-2 bg-sage-100 rounded-full overflow-hidden">
                                <div className="w-4/5 h-full bg-primary rounded-full"></div>
                              </div>
                              <span className="text-xs font-medium">80%</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Social Preferences</span>
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-2 bg-sage-100 rounded-full overflow-hidden">
                                <div className="w-3/5 h-full bg-primary rounded-full"></div>
                              </div>
                              <span className="text-xs font-medium">60%</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Study Habits</span>
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-2 bg-sage-100 rounded-full overflow-hidden">
                                <div className="w-3/4 h-full bg-primary rounded-full"></div>
                              </div>
                              <span className="text-xs font-medium">75%</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Communication Style</span>
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-2 bg-sage-100 rounded-full overflow-hidden">
                                <div className="w-1/2 h-full bg-primary rounded-full"></div>
                              </div>
                              <span className="text-xs font-medium">50%</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Guest Policies</span>
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-2 bg-sage-100 rounded-full overflow-hidden">
                                <div className="w-2/5 h-full bg-primary rounded-full"></div>
                              </div>
                              <span className="text-xs font-medium">40%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Request Live Demo CTA */}
            <div className="mt-12 text-center">
              <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-lavender-50 max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Want to Pilot CoHabitly at Your Campus?
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Join our early access partners and bring harmony to student
                    housing.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <Input
                      type="email"
                      placeholder="University email address"
                      className="flex-1 h-12 px-4 rounded-xl border-sage-200 focus:border-primary focus:ring-primary"
                    />
                    <Button className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold text-lg">
                      Book a University Demo
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Free consultation • No commitment required • FERPA compliant
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

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
