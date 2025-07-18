import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Building,
  Users,
  AlertTriangle,
  TrendingUp,
  Filter,
  ArrowLeft,
  User,
  MessageSquare,
  Clock,
  CheckCircle,
  XCircle,
  MapPin,
  GraduationCap,
  Calendar,
  Moon,
  Sparkles,
  Users2,
  BookOpen,
  MessageCircle,
  Home,
} from "lucide-react";

interface Student {
  id: number;
  name: string;
  dorm: string;
  room: string;
  floor: number;
  compatibility_score: number;
  profile_completion: number;
  status: string;
  major: string;
  year: string;
  last_checkin: string;
  flagged: boolean;
  roommate_feedback: number;
}

interface Message {
  id: number;
  dorm: string;
  floor: number;
  message: string;
  sentiment_score: number;
  flagged: boolean;
  status: string;
  timestamp: string;
  category: string;
  priority: string;
}

interface DormStats {
  dorm: string;
  floors: number[];
  totalStudents: number;
  averageCompatibility: number;
  flaggedMessages: number;
  healthScore: number;
  healthStatus: "excellent" | "good" | "warning" | "critical";
}

type ViewLevel = "campus" | "dorm" | "floor" | "student";

interface ViewState {
  level: ViewLevel;
  selectedDorm?: string;
  selectedFloor?: number;
  selectedStudent?: Student;
}

export default function AdminDashboard() {
  const [students, setStudents] = useState<Student[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [viewState, setViewState] = useState<ViewState>({ level: "campus" });
  const [loading, setLoading] = useState(true);

  // Load data from CSV files
  useEffect(() => {
    const loadData = async () => {
      try {
        // Parse CSV data (in a real app, this would be an API call)
        const studentsData: Student[] = [
          {
            id: 1,
            name: "Jordan Reed",
            dorm: "Harrison Hall",
            room: "247",
            floor: 2,
            compatibility_score: 54,
            profile_completion: 78,
            status: "flagged",
            major: "Computer Science",
            year: "Junior",
            last_checkin: "2024-11-15",
            flagged: true,
            roommate_feedback: -2,
          },
          {
            id: 2,
            name: "Alex Martinez",
            dorm: "Harrison Hall",
            room: "312",
            floor: 3,
            compatibility_score: 92,
            profile_completion: 100,
            status: "active",
            major: "Psychology",
            year: "Sophomore",
            last_checkin: "2024-11-16",
            flagged: false,
            roommate_feedback: 4,
          },
          {
            id: 3,
            name: "Taylor Park",
            dorm: "Harrison Hall",
            room: "304",
            floor: 3,
            compatibility_score: 89,
            profile_completion: 95,
            status: "active",
            major: "Engineering",
            year: "Junior",
            last_checkin: "2024-11-16",
            flagged: false,
            roommate_feedback: 3,
          },
          {
            id: 4,
            name: "Sarah Kim",
            dorm: "Harrison Hall",
            room: "156",
            floor: 1,
            compatibility_score: 96,
            profile_completion: 100,
            status: "active",
            major: "Biology",
            year: "Freshman",
            last_checkin: "2024-11-16",
            flagged: false,
            roommate_feedback: 5,
          },
          {
            id: 5,
            name: "Marcus Johnson",
            dorm: "Harrison Hall",
            room: "201",
            floor: 2,
            compatibility_score: 67,
            profile_completion: 85,
            status: "flagged",
            major: "Business",
            year: "Sophomore",
            last_checkin: "2024-11-14",
            flagged: true,
            roommate_feedback: 1,
          },
          {
            id: 11,
            name: "Ryan Thompson",
            dorm: "Kennedy Tower",
            room: "412",
            floor: 4,
            compatibility_score: 76,
            profile_completion: 83,
            status: "active",
            major: "Physics",
            year: "Junior",
            last_checkin: "2024-11-16",
            flagged: false,
            roommate_feedback: 3,
          },
          {
            id: 12,
            name: "Olivia Garcia",
            dorm: "Kennedy Tower",
            room: "387",
            floor: 3,
            compatibility_score: 82,
            profile_completion: 90,
            status: "active",
            major: "Nursing",
            year: "Sophomore",
            last_checkin: "2024-11-16",
            flagged: false,
            roommate_feedback: 4,
          },
          {
            id: 16,
            name: "Madison Taylor",
            dorm: "Wilson Commons",
            room: "145",
            floor: 1,
            compatibility_score: 93,
            profile_completion: 98,
            status: "active",
            major: "Environmental Science",
            year: "Sophomore",
            last_checkin: "2024-11-16",
            flagged: false,
            roommate_feedback: 4,
          },
        ];

        const messagesData: Message[] = [
          {
            id: 1,
            dorm: "Harrison Hall",
            floor: 2,
            message: "Someone's throwing a party in Harrison Hall.",
            sentiment_score: 2,
            flagged: true,
            status: "unreviewed",
            timestamp: "2024-11-16T14:30:00Z",
            category: "noise",
            priority: "high",
          },
          {
            id: 2,
            dorm: "Harrison Hall",
            floor: 1,
            message:
              "Really appreciate how fair the chore system is. My roommates and I finally found balance!",
            sentiment_score: 5,
            flagged: false,
            status: "resolved",
            timestamp: "2024-11-15T10:15:00Z",
            category: "positive",
            priority: "low",
          },
          {
            id: 3,
            dorm: "Harrison Hall",
            floor: 2,
            message:
              "My roommate never cleans the kitchen and it's getting gross.",
            sentiment_score: 1,
            flagged: true,
            status: "unreviewed",
            timestamp: "2024-11-16T09:45:00Z",
            category: "cleanliness",
            priority: "medium",
          },
          {
            id: 4,
            dorm: "Kennedy Tower",
            floor: 4,
            message: "The noise from next door is keeping me up at night.",
            sentiment_score: 1,
            flagged: true,
            status: "unreviewed",
            timestamp: "2024-11-16T11:20:00Z",
            category: "noise",
            priority: "high",
          },
          {
            id: 6,
            dorm: "Wilson Commons",
            floor: 2,
            message: "Someone keeps eating my food from the shared fridge.",
            sentiment_score: 2,
            flagged: true,
            status: "unreviewed",
            timestamp: "2024-11-16T13:15:00Z",
            category: "conflict",
            priority: "medium",
          },
        ];

        setStudents(studentsData);
        setMessages(messagesData);
        setLoading(false);
      } catch (error) {
        console.error("Error loading data:", error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Calculate dorm statistics
  const calculateDormStats = (): DormStats[] => {
    const dormMap = new Map<string, DormStats>();

    students.forEach((student) => {
      if (!dormMap.has(student.dorm)) {
        dormMap.set(student.dorm, {
          dorm: student.dorm,
          floors: [],
          totalStudents: 0,
          averageCompatibility: 0,
          flaggedMessages: 0,
          healthScore: 0,
          healthStatus: "good",
        });
      }

      const stats = dormMap.get(student.dorm)!;
      stats.totalStudents++;
      stats.averageCompatibility += student.compatibility_score;

      if (!stats.floors.includes(student.floor)) {
        stats.floors.push(student.floor);
      }
    });

    messages.forEach((message) => {
      const stats = dormMap.get(message.dorm);
      if (stats && message.flagged) {
        stats.flaggedMessages++;
      }
    });

    // Calculate final stats
    dormMap.forEach((stats) => {
      stats.averageCompatibility = Math.round(
        stats.averageCompatibility / stats.totalStudents,
      );
      stats.healthScore = Math.max(
        0,
        stats.averageCompatibility - stats.flaggedMessages * 5,
      );

      if (stats.healthScore >= 85) stats.healthStatus = "excellent";
      else if (stats.healthScore >= 75) stats.healthStatus = "good";
      else if (stats.healthScore >= 60) stats.healthStatus = "warning";
      else stats.healthStatus = "critical";

      stats.floors.sort((a, b) => a - b);
    });

    return Array.from(dormMap.values());
  };

  const dormStats = calculateDormStats();

  // Get health color
  const getHealthColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "text-emerald-600 bg-emerald-50 border-emerald-200";
      case "good":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "warning":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "critical":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  // Filter data based on current view
  const getFilteredStudents = () => {
    let filtered = students;
    if (viewState.selectedDorm) {
      filtered = filtered.filter((s) => s.dorm === viewState.selectedDorm);
    }
    if (viewState.selectedFloor) {
      filtered = filtered.filter((s) => s.floor === viewState.selectedFloor);
    }
    return filtered;
  };

  const getFilteredMessages = () => {
    let filtered = messages;
    if (viewState.selectedDorm) {
      filtered = filtered.filter((m) => m.dorm === viewState.selectedDorm);
    }
    if (viewState.selectedFloor) {
      filtered = filtered.filter((m) => m.floor === viewState.selectedFloor);
    }
    return filtered;
  };

  // Navigation functions
  const navigateToDorm = (dorm: string) => {
    setViewState({ level: "dorm", selectedDorm: dorm });
  };

  const navigateToFloor = (floor: number) => {
    setViewState({ ...viewState, level: "floor", selectedFloor: floor });
  };

  const navigateToStudent = (student: Student) => {
    setViewState({ ...viewState, level: "student", selectedStudent: student });
  };

  const navigateBack = () => {
    if (viewState.level === "student") {
      setViewState({
        ...viewState,
        level: "floor",
        selectedStudent: undefined,
      });
    } else if (viewState.level === "floor") {
      setViewState({ level: "dorm", selectedDorm: viewState.selectedDorm });
    } else if (viewState.level === "dorm") {
      setViewState({ level: "campus" });
    }
  };

  const getBreadcrumb = () => {
    const parts = ["Campus"];
    if (viewState.selectedDorm) parts.push(viewState.selectedDorm);
    if (viewState.selectedFloor) parts.push(`Floor ${viewState.selectedFloor}`);
    if (viewState.selectedStudent) parts.push(viewState.selectedStudent.name);
    return parts.join(" > ");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-4">
                {viewState.level !== "campus" && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={navigateBack}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>
                )}
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    CoHabitly Admin Dashboard
                  </h1>
                  <p className="text-sm text-gray-600">{getBreadcrumb()}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-emerald-50 rounded-lg">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-emerald-700 font-medium">
                  Live
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Campus Overview */}
        {viewState.level === "campus" && (
          <div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Campus Health Overview
              </h2>
              <p className="text-gray-600">
                Monitor overall campus dorm health and identify areas requiring
                attention
              </p>
            </div>

            {/* High Priority Alerts */}
            <div className="mb-8">
              <Card className="border-red-200 bg-red-50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-red-800">
                    <AlertTriangle className="w-5 h-5" />
                    High Priority Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {messages
                      .filter(
                        (m) =>
                          m.priority === "high" && m.status === "unreviewed",
                      )
                      .map((message) => (
                        <div
                          key={message.id}
                          className="flex items-center justify-between p-3 bg-white rounded-lg border"
                        >
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {message.message}
                            </p>
                            <p className="text-xs text-gray-600">
                              {message.dorm} • Floor {message.floor} •{" "}
                              {new Date(message.timestamp).toLocaleDateString()}
                            </p>
                          </div>
                          <Badge variant="destructive" className="text-xs">
                            {message.category}
                          </Badge>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Dorm Cards */}
            <div className="grid lg:grid-cols-3 gap-6">
              {dormStats.map((dorm) => (
                <Card
                  key={dorm.dorm}
                  className={`cursor-pointer transition-all hover:shadow-lg ${getHealthColor(dorm.healthStatus)} border-2`}
                  onClick={() => navigateToDorm(dorm.dorm)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Building className="w-6 h-6" />
                        <div>
                          <h3 className="font-semibold text-lg">{dorm.dorm}</h3>
                          <p className="text-sm opacity-70">
                            {dorm.floors.length} floors
                          </p>
                        </div>
                      </div>
                      <Badge className={getHealthColor(dorm.healthStatus)}>
                        {dorm.healthScore}%
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Students</span>
                        <span className="font-medium">
                          {dorm.totalStudents}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Avg. Compatibility</span>
                        <span className="font-medium">
                          {dorm.averageCompatibility}%
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Flagged Messages</span>
                        <span
                          className={`font-medium ${dorm.flaggedMessages > 3 ? "text-red-600" : "text-gray-900"}`}
                        >
                          {dorm.flaggedMessages}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          dorm.healthStatus === "excellent"
                            ? "bg-emerald-500"
                            : dorm.healthStatus === "good"
                              ? "bg-blue-500"
                              : dorm.healthStatus === "warning"
                                ? "bg-yellow-500"
                                : "bg-red-500"
                        }`}
                        style={{ width: `${dorm.healthScore}%` }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Dorm View */}
        {viewState.level === "dorm" && viewState.selectedDorm && (
          <div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {viewState.selectedDorm} Overview
              </h2>
              <p className="text-gray-600">
                Floor-by-floor breakdown and student insights
              </p>
            </div>

            {/* Dorm Summary Stats */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {(() => {
                const dorm = dormStats.find(
                  (d) => d.dorm === viewState.selectedDorm,
                );
                return dorm ? (
                  <>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <p className="text-2xl font-bold">
                          {dorm.totalStudents}
                        </p>
                        <p className="text-sm text-gray-600">Total Students</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <p className="text-2xl font-bold">
                          {dorm.averageCompatibility}%
                        </p>
                        <p className="text-sm text-gray-600">
                          Avg Compatibility
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <AlertTriangle className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                        <p className="text-2xl font-bold">
                          {dorm.flaggedMessages}
                        </p>
                        <p className="text-sm text-gray-600">
                          Flagged Messages
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                        <p className="text-2xl font-bold">
                          {dorm.healthScore}%
                        </p>
                        <p className="text-sm text-gray-600">Health Score</p>
                      </CardContent>
                    </Card>
                  </>
                ) : null;
              })()}
            </div>

            {/* Floor Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(() => {
                const dorm = dormStats.find(
                  (d) => d.dorm === viewState.selectedDorm,
                );
                return dorm?.floors.map((floor) => {
                  const floorStudents = students.filter(
                    (s) =>
                      s.dorm === viewState.selectedDorm && s.floor === floor,
                  );
                  const floorMessages = messages.filter(
                    (m) =>
                      m.dorm === viewState.selectedDorm && m.floor === floor,
                  );
                  const avgCompatibility = Math.round(
                    floorStudents.reduce(
                      (sum, s) => sum + s.compatibility_score,
                      0,
                    ) / floorStudents.length,
                  );
                  const flaggedCount = floorMessages.filter(
                    (m) => m.flagged,
                  ).length;

                  return (
                    <Card
                      key={floor}
                      className="cursor-pointer hover:shadow-lg transition-all"
                      onClick={() => navigateToFloor(floor)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-lg">
                            Floor {floor}
                          </h3>
                          <Badge
                            variant={
                              avgCompatibility >= 80
                                ? "default"
                                : avgCompatibility >= 60
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {avgCompatibility}%
                          </Badge>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Students</span>
                            <span className="font-medium">
                              {floorStudents.length}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Flagged</span>
                            <span
                              className={`font-medium ${flaggedCount > 0 ? "text-red-600" : "text-gray-900"}`}
                            >
                              {flaggedCount}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                });
              })()}
            </div>
          </div>
        )}

        {/* Floor View */}
        {viewState.level === "floor" &&
          viewState.selectedDorm &&
          viewState.selectedFloor && (
            <div>
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {viewState.selectedDorm} - Floor {viewState.selectedFloor}
                </h2>
                <p className="text-gray-600">
                  Student profiles and room assignments
                </p>
              </div>

              <Tabs defaultValue="students" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="students">Students</TabsTrigger>
                  <TabsTrigger value="messages">Messages</TabsTrigger>
                </TabsList>

                <TabsContent value="students">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {getFilteredStudents().map((student) => (
                      <Card
                        key={student.id}
                        className={`cursor-pointer hover:shadow-lg transition-all ${
                          student.flagged
                            ? "border-red-200 bg-red-50"
                            : "border-gray-200"
                        }`}
                        onClick={() => navigateToStudent(student)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                                student.compatibility_score >= 80
                                  ? "bg-emerald-100 text-emerald-700"
                                  : student.compatibility_score >= 60
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-red-100 text-red-700"
                              }`}
                            >
                              {student.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div>
                              <h3 className="font-semibold">{student.name}</h3>
                              <p className="text-sm text-gray-600">
                                Room {student.room}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Compatibility</span>
                              <Badge
                                variant={
                                  student.compatibility_score >= 80
                                    ? "default"
                                    : student.compatibility_score >= 60
                                      ? "secondary"
                                      : "destructive"
                                }
                              >
                                {student.compatibility_score}%
                              </Badge>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Profile</span>
                              <span className="font-medium">
                                {student.profile_completion}%
                              </span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Status</span>
                              <Badge
                                variant={
                                  student.status === "active"
                                    ? "default"
                                    : "destructive"
                                }
                              >
                                {student.status}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="messages">
                  <div className="space-y-4">
                    {getFilteredMessages().map((message) => (
                      <Card
                        key={message.id}
                        className={
                          message.flagged ? "border-red-200 bg-red-50" : ""
                        }
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <MessageSquare className="w-4 h-4 text-gray-500" />
                              <span className="text-sm text-gray-600">
                                Floor {message.floor}
                              </span>
                            </div>
                            <div className="flex gap-2">
                              <Badge
                                variant={
                                  message.priority === "high"
                                    ? "destructive"
                                    : message.priority === "medium"
                                      ? "secondary"
                                      : "default"
                                }
                              >
                                {message.priority}
                              </Badge>
                              <Badge
                                variant={
                                  message.status === "resolved"
                                    ? "default"
                                    : "secondary"
                                }
                              >
                                {message.status}
                              </Badge>
                            </div>
                          </div>

                          <p className="text-sm text-gray-900 mb-3">
                            {message.message}
                          </p>

                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>
                              {new Date(message.timestamp).toLocaleString()}
                            </span>
                            <Button size="sm" variant="outline">
                              Review
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}

        {/* Student Detail View */}
        {viewState.level === "student" && viewState.selectedStudent && (
          <div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {viewState.selectedStudent.name}
              </h2>
              <p className="text-gray-600">
                Student profile and living situation insights
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Profile Summary */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Profile Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Room:</span>
                        <span className="font-medium">
                          {viewState.selectedStudent.room}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Major:</span>
                        <span className="font-medium">
                          {viewState.selectedStudent.major}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Year:</span>
                        <span className="font-medium">
                          {viewState.selectedStudent.year}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-gray-600">
                          Compatibility Score
                        </span>
                        <div className="mt-1">
                          <Badge
                            variant={
                              viewState.selectedStudent.compatibility_score >=
                              80
                                ? "default"
                                : viewState.selectedStudent
                                      .compatibility_score >= 60
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {viewState.selectedStudent.compatibility_score}%
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">
                          Profile Completion
                        </span>
                        <div className="mt-1 flex items-center gap-2">
                          <div className="flex-1 h-2 bg-gray-200 rounded-full">
                            <div
                              className="h-full bg-blue-500 rounded-full"
                              style={{
                                width: `${viewState.selectedStudent.profile_completion}%`,
                              }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">
                            {viewState.selectedStudent.profile_completion}%
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">
                          Last Check-in
                        </span>
                        <div className="mt-1">
                          <span className="text-sm font-medium">
                            {new Date(
                              viewState.selectedStudent.last_checkin,
                            ).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {viewState.selectedStudent.flagged && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        <span className="font-medium text-red-800">
                          Flagged for Attention
                        </span>
                      </div>
                      <p className="text-sm text-red-700">
                        This student has been flagged due to low compatibility
                        scores or negative feedback. Consider reaching out or
                        reviewing recent messages.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Home className="w-4 h-4 mr-2" />
                    Room Reassignment
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="w-4 h-4 mr-2" />
                    View Roommates
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Clock className="w-4 h-4 mr-2" />
                    Check-in History
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
