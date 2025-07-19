import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  ShoppingCart,
  Users,
  MessageCircle,
  Plus,
  Check,
  Star,
  Heart,
  Calendar,
  DollarSign,
  Send,
  ChevronRight,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  Settings,
  Sparkles,
  TrendingUp,
  BarChart3,
  Zap,
  Target,
  Bell,
  MoreHorizontal,
  Smile,
  Coffee,
  Moon,
  Sun,
  Volume2,
  VolumeX,
} from "lucide-react";

type TabType = "dashboard" | "grocery" | "roommates" | "feedback";

interface RoommateProfile {
  id: string;
  name: string;
  avatar: string;
  compatibility: number;
  status: "online" | "offline" | "away";
  preferences: string[];
  communicationStyle: "direct" | "gentle" | "formal";
  mood: "great" | "good" | "okay" | "stressed";
}

interface GroceryItem {
  id: string;
  name: string;
  price: number;
  category: string;
  addedBy: string;
  purchased: boolean;
  priority: "high" | "medium" | "low";
}

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  isAnonymous: boolean;
  aiFiltered: boolean;
  originalTone?: string;
  filteredTone?: string;
  type: "feedback" | "appreciation" | "concern";
}

interface VibeData {
  overall: number;
  cleanliness: number;
  noise: number;
  communication: number;
  trend: "up" | "down" | "stable";
  weeklyData: Array<{ day: string; score: number }>;
}

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState<TabType>("dashboard");
  const [newGroceryItem, setNewGroceryItem] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Enhanced sample data
  const vibeData: VibeData = {
    overall: 87,
    cleanliness: 92,
    noise: 78,
    communication: 91,
    trend: "up",
    weeklyData: [
      { day: "Mon", score: 82 },
      { day: "Tue", score: 85 },
      { day: "Wed", score: 89 },
      { day: "Thu", score: 87 },
      { day: "Fri", score: 90 },
      { day: "Sat", score: 88 },
      { day: "Sun", score: 87 },
    ],
  };

  const roommates: RoommateProfile[] = [
    {
      id: "1",
      name: "Sarah Chen",
      avatar: "SC",
      compatibility: 94,
      status: "online",
      preferences: ["Early bird", "Clean spaces", "Study music"],
      communicationStyle: "gentle",
      mood: "great",
    },
    {
      id: "2",
      name: "Marcus Rivera",
      avatar: "MR",
      compatibility: 89,
      status: "away",
      preferences: ["Fitness enthusiast", "Social cooking", "Gaming"],
      communicationStyle: "direct",
      mood: "good",
    },
    {
      id: "3",
      name: "Alex Kim",
      avatar: "AK",
      compatibility: 76,
      status: "offline",
      preferences: ["Night owl", "Minimalist", "Quiet spaces"],
      communicationStyle: "formal",
      mood: "okay",
    },
  ];

  const groceryItems: GroceryItem[] = [
    {
      id: "1",
      name: "Organic almond milk",
      price: 5.99,
      category: "Dairy",
      addedBy: "Sarah",
      purchased: false,
      priority: "high",
    },
    {
      id: "2",
      name: "Artisan sourdough",
      price: 6.49,
      category: "Bakery",
      addedBy: "Marcus",
      purchased: true,
      priority: "medium",
    },
    {
      id: "3",
      name: "Avocado (6 pack)",
      price: 8.99,
      category: "Produce",
      addedBy: "You",
      purchased: false,
      priority: "high",
    },
    {
      id: "4",
      name: "Eco-friendly detergent",
      price: 13.99,
      category: "Household",
      addedBy: "Alex",
      purchased: false,
      priority: "low",
    },
    {
      id: "5",
      name: "Fair trade coffee",
      price: 16.99,
      category: "Beverages",
      addedBy: "Sarah",
      purchased: false,
      priority: "high",
    },
  ];

  const messages: Message[] = [
    {
      id: "1",
      sender: "Sarah",
      content: "Hey team! Study group tonight at 7? I'll bring snacks! 📚✨",
      timestamp: "2 hours ago",
      isAnonymous: false,
      aiFiltered: false,
      type: "feedback",
    },
    {
      id: "2",
      sender: "Anonymous",
      content:
        "Would it be possible to keep music levels a bit lower after 10 PM? I have early morning classes. Really appreciate your understanding! 🎧💙",
      timestamp: "Yesterday",
      isAnonymous: true,
      aiFiltered: true,
      originalTone: "frustrated",
      filteredTone: "respectful",
      type: "concern",
    },
    {
      id: "3",
      sender: "Marcus",
      content:
        "Pizza night Friday! I found this amazing local place. Who's interested? 🍕🎉",
      timestamp: "Yesterday",
      isAnonymous: false,
      aiFiltered: false,
      type: "feedback",
    },
  ];

  const upcomingEvents = [
    {
      id: "1",
      title: "Study Session",
      time: "Today 7:00 PM",
      attendees: ["Sarah", "You"],
      type: "study",
      color: "blue",
    },
    {
      id: "2",
      title: "Deep Clean Day",
      time: "Saturday 10:00 AM",
      attendees: ["Everyone"],
      type: "chore",
      color: "green",
    },
    {
      id: "3",
      title: "Game Night",
      time: "Friday 8:00 PM",
      attendees: ["Marcus", "Alex", "You"],
      type: "social",
      color: "purple",
    },
  ];

  const choreAssignments = [
    {
      id: "1",
      task: "Kitchen deep clean",
      assignee: "Sarah",
      dueDate: "Today",
      status: "completed",
      points: 15,
    },
    {
      id: "2",
      task: "Bathroom maintenance",
      assignee: "You",
      dueDate: "Tomorrow",
      status: "pending",
      points: 12,
    },
    {
      id: "3",
      task: "Living room vacuum",
      assignee: "Marcus",
      dueDate: "Friday",
      status: "overdue",
      points: 8,
    },
    {
      id: "4",
      task: "Trash & recycling",
      assignee: "Alex",
      dueDate: "Sunday",
      status: "pending",
      points: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleAddGroceryItem = () => {
    if (newGroceryItem.trim()) {
      setNewGroceryItem("");
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setNewMessage("");
      }, 2000);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-emerald-500";
      case "away":
        return "bg-amber-500";
      case "offline":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  const getMoodEmoji = (mood: string) => {
    switch (mood) {
      case "great":
        return "😊";
      case "good":
        return "🙂";
      case "okay":
        return "😐";
      case "stressed":
        return "😓";
      default:
        return "🙂";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-l-red-500 bg-red-50";
      case "medium":
        return "border-l-amber-500 bg-amber-50";
      case "low":
        return "border-l-green-500 bg-green-50";
      default:
        return "border-l-gray-500 bg-gray-50";
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-6 p-6">
            {/* Harmony Score */}
            <Card className="border-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Harmony Score
                      </h3>
                      <p className="text-sm text-gray-600">This week's vibe</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-indigo-600">
                      {vibeData.overall}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-emerald-600">
                      <TrendingUp className="w-4 h-4" />
                      <span>+5% this week</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Sparkles className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="text-lg font-bold text-emerald-600">
                      {vibeData.cleanliness}%
                    </div>
                    <div className="text-xs text-gray-600">Cleanliness</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Volume2 className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="text-lg font-bold text-amber-600">
                      {vibeData.noise}%
                    </div>
                    <div className="text-xs text-gray-600">Noise Level</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <MessageCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-lg font-bold text-blue-600">
                      {vibeData.communication}%
                    </div>
                    <div className="text-xs text-gray-600">Communication</div>
                  </div>
                </div>

                <div className="bg-white/70 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Weekly Progress
                    </span>
                    <span className="text-sm text-indigo-600 font-medium">
                      Trending up
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {vibeData.weeklyData.map((day, index) => (
                      <div key={day.day} className="flex-1 text-center">
                        <div
                          className="bg-gradient-to-t from-indigo-500 to-blue-400 rounded-sm mb-1 transition-all duration-500"
                          style={{ height: `${(day.score / 100) * 40}px` }}
                        ></div>
                        <div className="text-xs text-gray-500">{day.day}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 bg-white shadow-md hover:shadow-lg transition-all cursor-pointer group">
                <CardContent className="p-5 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">Check In</h4>
                  <p className="text-xs text-gray-600">Share your daily vibe</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white shadow-md hover:shadow-lg transition-all cursor-pointer group">
                <CardContent className="p-5 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Target className="w-7 h-7 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">Set Goals</h4>
                  <p className="text-xs text-gray-600">Plan together</p>
                </CardContent>
              </Card>
            </div>

            {/* Chore Tracker */}
            <Card className="border-0 bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Chore Tracker
                    </h3>
                  </div>
                  <Button size="sm" variant="ghost" className="text-orange-600">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-3">
                  {choreAssignments.slice(0, 3).map((chore) => (
                    <div
                      key={chore.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                            chore.status === "completed"
                              ? "bg-emerald-500 border-emerald-500"
                              : chore.status === "overdue"
                                ? "border-red-400 bg-red-50"
                                : "border-blue-400 bg-blue-50"
                          }`}
                        >
                          {chore.status === "completed" && (
                            <Check className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 text-sm">
                            {chore.task}
                          </div>
                          <div className="text-xs text-gray-500">
                            {chore.assignee} • {chore.dueDate}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-amber-600">
                          +{chore.points}pts
                        </span>
                        <Badge
                          variant="secondary"
                          className={`text-xs ${
                            chore.status === "completed"
                              ? "bg-emerald-100 text-emerald-700"
                              : chore.status === "overdue"
                                ? "bg-red-100 text-red-700"
                                : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {chore.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="border-0 bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Coming Up
                    </h3>
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-gray-400" />
                </div>
                <div className="space-y-3">
                  {upcomingEvents.map((event) => (
                    <div
                      key={event.id}
                      className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div
                        className={`w-3 h-8 rounded-full ${
                          event.color === "blue"
                            ? "bg-blue-500"
                            : event.color === "green"
                              ? "bg-emerald-500"
                              : "bg-purple-500"
                        }`}
                      ></div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm">
                          {event.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {event.time}
                        </div>
                      </div>
                      <div className="text-xs text-gray-600">
                        {event.attendees.join(", ")}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "grocery":
        return (
          <div className="space-y-6 p-6">
            {/* Budget Overview */}
            <Card className="border-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Monthly Budget
                      </h3>
                      <p className="text-sm text-gray-600">Shared groceries</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-600">
                      $147
                    </div>
                    <div className="text-sm text-gray-600">of $350</div>
                  </div>
                </div>
                <div className="bg-white/70 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Budget Progress
                    </span>
                    <span className="text-sm text-emerald-600 font-medium">
                      58% remaining
                    </span>
                  </div>
                  <div className="w-full bg-emerald-100 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all duration-1000"
                      style={{ width: "42%" }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Add New Item */}
            <Card className="border-0 bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex gap-3">
                  <Input
                    placeholder="Add grocery item..."
                    value={newGroceryItem}
                    onChange={(e) => setNewGroceryItem(e.target.value)}
                    className="flex-1 h-12 border-gray-200 focus:border-blue-400 rounded-xl"
                    onKeyPress={(e) =>
                      e.key === "Enter" && handleAddGroceryItem()
                    }
                  />
                  <Button
                    onClick={handleAddGroceryItem}
                    className="h-12 px-6 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-xl"
                  >
                    <Plus className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Grocery List */}
            <Card className="border-0 bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Shared Shopping List
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700"
                  >
                    {groceryItems.filter((item) => !item.purchased).length}{" "}
                    items
                  </Badge>
                </div>
                <div className="space-y-3">
                  {groceryItems.map((item) => (
                    <div
                      key={item.id}
                      className={`border-l-4 ${getPriorityColor(item.priority)} rounded-r-xl transition-all ${
                        item.purchased ? "opacity-60" : "hover:shadow-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all ${
                              item.purchased
                                ? "bg-emerald-500 border-emerald-500"
                                : "border-gray-300 hover:border-emerald-400"
                            }`}
                          >
                            {item.purchased && (
                              <Check className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <div>
                            <div
                              className={`font-medium ${
                                item.purchased
                                  ? "line-through text-gray-500"
                                  : "text-gray-900"
                              }`}
                            >
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              Added by {item.addedBy} • {item.category}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div
                            className={`font-bold ${
                              item.purchased ? "text-gray-500" : "text-gray-900"
                            }`}
                          >
                            ${item.price.toFixed(2)}
                          </div>
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              item.priority === "high"
                                ? "border-red-200 text-red-700"
                                : item.priority === "medium"
                                  ? "border-amber-200 text-amber-700"
                                  : "border-green-200 text-green-700"
                            }`}
                          >
                            {item.priority}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200 bg-gray-50 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-700">
                      Total (remaining)
                    </span>
                    <span className="text-xl font-bold text-gray-900">
                      $
                      {groceryItems
                        .filter((item) => !item.purchased)
                        .reduce((sum, item) => sum + item.price, 0)
                        .toFixed(2)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "roommates":
        return (
          <div className="space-y-6 p-6">
            {/* Roommate Profiles */}
            {roommates.map((roommate) => (
              <Card
                key={roommate.id}
                className="border-0 bg-white shadow-md hover:shadow-lg transition-all"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {roommate.avatar}
                      </div>
                      <div
                        className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${getStatusColor(
                          roommate.status,
                        )} shadow-sm`}
                      ></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {roommate.name}
                          </h3>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="secondary"
                              className={`text-xs ${
                                roommate.status === "online"
                                  ? "bg-emerald-100 text-emerald-700"
                                  : roommate.status === "away"
                                    ? "bg-amber-100 text-amber-700"
                                    : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {roommate.status}
                            </Badge>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-lg">
                              {getMoodEmoji(roommate.mood)}
                            </span>
                            <span className="text-sm text-gray-600">
                              {roommate.mood}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            <Heart className="w-4 h-4 text-pink-500" />
                            <span className="text-lg font-bold text-gray-900">
                              {roommate.compatibility}%
                            </span>
                          </div>
                          <Badge
                            variant="outline"
                            className="text-xs text-purple-700 border-purple-200"
                          >
                            {roommate.communicationStyle}
                          </Badge>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm font-medium text-gray-700 mb-2">
                            Living Preferences:
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {roommate.preferences.map((pref, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="text-xs bg-blue-50 text-blue-700 border border-blue-200"
                              >
                                {pref}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 h-10 border-blue-200 text-blue-700 hover:bg-blue-50"
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Message
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 h-10 border-purple-200 text-purple-700 hover:bg-purple-50"
                          >
                            <Settings className="w-4 h-4 mr-2" />
                            Preferences
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Communication Settings */}
            <Card className="border-0 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Your Communication Style
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="font-medium text-gray-700">
                        Anonymous feedback
                      </span>
                    </div>
                    <div className="w-12 h-6 bg-purple-500 rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Zap className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="font-medium text-gray-700">
                        AI tone filtering
                      </span>
                    </div>
                    <div className="w-12 h-6 bg-emerald-500 rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                        <Bell className="w-4 h-4 text-amber-600" />
                      </div>
                      <span className="font-medium text-gray-700">
                        Conflict alerts
                      </span>
                    </div>
                    <div className="w-12 h-6 bg-gray-300 rounded-full relative">
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "feedback":
        return (
          <div className="space-y-6 p-6">
            {/* Message Input */}
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-md">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Send Feedback
                      </h3>
                      <p className="text-sm text-gray-600">
                        Share thoughts safely and constructively
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Input
                      placeholder="What's on your mind?"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="h-12 border-gray-200 focus:border-blue-400 rounded-xl"
                      onKeyPress={(e) =>
                        e.key === "Enter" && handleSendMessage()
                      }
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 text-sm text-gray-600">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-500 rounded"
                            defaultChecked
                          />
                          Send anonymously
                        </label>
                        <label className="flex items-center gap-2 text-sm text-gray-600">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-500 rounded"
                            defaultChecked
                          />
                          AI tone enhancement
                        </label>
                      </div>
                      <Button
                        onClick={handleSendMessage}
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-xl px-6"
                        disabled={isTyping}
                      >
                        {isTyping ? (
                          <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                        ) : (
                          <Send className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                    {isTyping && (
                      <div className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 p-3 rounded-xl">
                        <div className="animate-pulse w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>AI is enhancing your message tone...</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Message History */}
            <Card className="border-0 bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Recent Messages
                </h3>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className="bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-sm">
                          {message.isAnonymous ? "?" : message.sender[0]}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-gray-900">
                                {message.isAnonymous
                                  ? "Anonymous"
                                  : message.sender}
                              </span>
                              <Badge
                                variant="secondary"
                                className={`text-xs ${
                                  message.type === "appreciation"
                                    ? "bg-green-100 text-green-700"
                                    : message.type === "concern"
                                      ? "bg-amber-100 text-amber-700"
                                      : "bg-blue-100 text-blue-700"
                                }`}
                              >
                                {message.type}
                              </Badge>
                            </div>
                            <span className="text-xs text-gray-500">
                              {message.timestamp}
                            </span>
                          </div>
                          <p className="text-gray-700 leading-relaxed mb-2">
                            {message.content}
                          </p>
                          {message.aiFiltered && (
                            <div className="bg-white border border-emerald-200 rounded-lg p-3">
                              <div className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-emerald-500" />
                                <span className="font-medium text-emerald-700">
                                  AI Enhanced:
                                </span>
                                <span className="text-gray-600">
                                  {message.originalTone} →{" "}
                                  {message.filteredTone}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 bg-gradient-to-br from-orange-50 to-amber-50 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="h-16 flex flex-col gap-1 border-orange-200 text-orange-700 hover:bg-orange-50 rounded-xl"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-xs font-medium">Report Issue</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-16 flex flex-col gap-1 border-emerald-200 text-emerald-700 hover:bg-emerald-50 rounded-xl"
                  >
                    <Heart className="w-5 h-5" />
                    <span className="text-xs font-medium">Send Thanks</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-16 flex flex-col gap-1 border-blue-200 text-blue-700 hover:bg-blue-50 rounded-xl"
                  >
                    <Calendar className="w-5 h-5" />
                    <span className="text-xs font-medium">Schedule Chat</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-16 flex flex-col gap-1 border-purple-200 text-purple-700 hover:bg-purple-50 rounded-xl"
                  >
                    <Star className="w-5 h-5" />
                    <span className="text-xs font-medium">Suggest Idea</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-80 h-[640px] bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-800 rounded-[3rem] p-3 shadow-2xl relative overflow-hidden">
      {/* Premium ambient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-[3rem]"></div>
      <div className="absolute top-4 left-4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-4 right-4 w-24 h-24 bg-indigo-400/10 rounded-full blur-xl"></div>

      <div className="w-full h-full bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 rounded-[2.5rem] overflow-hidden relative backdrop-blur-sm border border-white/20">
        {/* Status bar */}
        <div className="h-12 bg-gradient-to-r from-white to-blue-50/50 flex items-center justify-between px-6 border-b border-blue-100/30">
          <div className="text-sm font-semibold text-gray-800">
            {currentTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-2 bg-blue-500 rounded-sm"></div>
            <div className="w-6 h-3 border border-blue-300 rounded-sm">
              <div className="w-4 h-full bg-blue-500 rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-400/20 animate-pulse"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">CoHabitly</h3>
                  <p className="text-blue-100 text-sm">Roommate Mode</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bell className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Settings className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {roommates.slice(0, 3).map((roommate, index) => (
                  <div
                    key={roommate.id}
                    className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center border border-white/20 text-xs font-medium"
                  >
                    {roommate.avatar[0]}
                  </div>
                ))}
              </div>
              <span className="text-blue-100 text-xs">3 roommates</span>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse ml-1"></div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden bg-gray-50/50">
          {renderTabContent()}
        </div>

        {/* Bottom Navigation */}
        <div className="px-4 py-3 bg-white border-t border-gray-200">
          <div className="flex justify-around">
            {[
              { id: "dashboard", icon: Home, label: "Home", color: "blue" },
              {
                id: "grocery",
                icon: ShoppingCart,
                label: "Shopping",
                color: "emerald",
              },
              {
                id: "roommates",
                icon: Users,
                label: "Roommates",
                color: "purple",
              },
              {
                id: "feedback",
                icon: MessageCircle,
                label: "Feedback",
                color: "orange",
              },
            ].map(({ id, icon: Icon, label, color }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as TabType)}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                  activeTab === id
                    ? `bg-${color}-100 text-${color}-600 scale-105 shadow-md`
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
