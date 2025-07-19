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
  ThumbsUp,
  ThumbsDown,
  ArrowLeft,
  X,
  Edit3,
  Trash2,
  Flag,
  Volume2,
  VolumeX,
  Coffee,
  Moon,
  Sun,
  Timer,
  PartyPopper,
  Gamepad,
  Pizza,
  Film,
  Music,
  Heart,
  Shield,
  Flame,
  Award,
  RefreshCw,
  MessageSquare,
  Phone,
  Video,
  Smile,
  Frown,
  Meh,
  Filter,
  Search,
  Calendar1,
  CalendarDays,
} from "lucide-react";

type TabType =
  | "overview"
  | "grocery"
  | "events"
  | "chores"
  | "vibe"
  | "messages"
  | "profile";
type ViewLevel = "main" | "detail" | "compose" | "settings";

interface ViewState {
  level: ViewLevel;
  activeTab: TabType;
  selectedData?: any;
  composeType?: string;
}

interface GroceryItem {
  id: string;
  name: string;
  price: number;
  category: string;
  assignedTo: string;
  addedBy: string;
  purchased: boolean;
  priority: "high" | "medium" | "low";
  notes?: string;
}

interface Event {
  id: string;
  title: string;
  description: string;
  proposedBy: string;
  type: "poll" | "event";
  date?: string;
  time?: string;
  responses: { [key: string]: "yes" | "no" | "maybe" };
  status: "active" | "confirmed" | "cancelled";
  category: "social" | "house" | "food" | "entertainment";
}

interface Chore {
  id: string;
  task: string;
  assignedTo: string;
  dueDate: string;
  status: "pending" | "completed" | "overdue" | "skipped";
  difficulty: 1 | 2 | 3;
  streak: number;
  skipReason?: string;
  completedDate?: string;
  points: number;
}

interface VibeEntry {
  id: string;
  userId: string;
  userName: string;
  score: number;
  comment: string;
  date: string;
  mood: "happy" | "neutral" | "stressed" | "excited" | "tired";
  streak: number;
}

interface Message {
  id: string;
  sender: string;
  recipient?: string;
  content: string;
  timestamp: string;
  type: "anonymous" | "private" | "group";
  isAIFiltered: boolean;
  originalTone?: string;
  filteredTone?: string;
  status: "sent" | "delivered" | "read";
}

interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  preferences: {
    quietHours: string;
    cleaningFrequency: string;
    socialEnergy: number;
    guestPolicy: string;
  };
  habits: {
    bedtime: string;
    morningPerson: boolean;
    musicVolume: number;
    cookingSkill: number;
  };
  updateStreak: number;
}

interface HouseStatus {
  cleanliness: number;
  pendingChores: number;
  upcomingEvents: number;
  overallHealth: number;
  issues: string[];
  improvements: string[];
}

export default function InteractiveDemo() {
  const [viewState, setViewState] = useState<ViewState>({
    level: "main",
    activeTab: "overview",
  });
  const [currentTime, setCurrentTime] = useState(new Date());

  // Sample Data
  const [groceryItems, setGroceryItems] = useState<GroceryItem[]>([
    {
      id: "1",
      name: "Organic milk",
      price: 4.99,
      category: "Dairy",
      assignedTo: "Sarah",
      addedBy: "Marcus",
      purchased: false,
      priority: "high",
      notes: "2% fat, gallon size",
    },
    {
      id: "2",
      name: "Sourdough bread",
      price: 5.49,
      category: "Bakery",
      assignedTo: "You",
      addedBy: "Sarah",
      purchased: true,
      priority: "medium",
    },
    {
      id: "3",
      name: "Avocados",
      price: 7.99,
      category: "Produce",
      assignedTo: "Alex",
      addedBy: "You",
      purchased: false,
      priority: "high",
      notes: "Get 6 ripe ones",
    },
    {
      id: "4",
      name: "Pasta sauce",
      price: 3.99,
      category: "Pantry",
      assignedTo: "Marcus",
      addedBy: "Alex",
      purchased: false,
      priority: "low",
    },
    {
      id: "5",
      name: "Toilet paper",
      price: 12.99,
      category: "Household",
      assignedTo: "Sarah",
      addedBy: "You",
      purchased: true,
      priority: "high",
    },
  ]);

  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      title: "Game Night Friday?",
      description:
        "Would y'all be down for board games and pizza this Friday? I can host in the living room!",
      proposedBy: "Marcus",
      type: "poll",
      date: "2024-11-22",
      time: "7:00 PM",
      responses: {
        Sarah: "yes",
        Alex: "maybe",
        You: "yes",
      },
      status: "active",
      category: "entertainment",
    },
    {
      id: "2",
      title: "House Cleaning Day",
      description: "Monthly deep clean - everyone picks a room/area",
      proposedBy: "Sarah",
      type: "event",
      date: "2024-11-24",
      time: "10:00 AM",
      responses: {
        Marcus: "yes",
        Alex: "yes",
        You: "yes",
      },
      status: "confirmed",
      category: "house",
    },
    {
      id: "3",
      title: "Try that new Thai place?",
      description:
        "Saw amazing reviews for Bangkok Garden. Group dinner Sunday?",
      proposedBy: "Alex",
      type: "poll",
      date: "2024-11-24",
      time: "6:30 PM",
      responses: {
        Sarah: "yes",
        Marcus: "no",
        You: "maybe",
      },
      status: "active",
      category: "food",
    },
  ]);

  const [chores, setChores] = useState<Chore[]>([
    {
      id: "1",
      task: "Kitchen deep clean",
      assignedTo: "Sarah",
      dueDate: "2024-11-18",
      status: "completed",
      difficulty: 3,
      streak: 4,
      points: 15,
      completedDate: "2024-11-18",
    },
    {
      id: "2",
      task: "Vacuum living room",
      assignedTo: "Marcus",
      dueDate: "2024-11-19",
      status: "overdue",
      difficulty: 2,
      streak: 0,
      points: 10,
    },
    {
      id: "3",
      task: "Bathroom cleaning",
      assignedTo: "You",
      dueDate: "2024-11-20",
      status: "pending",
      difficulty: 3,
      streak: 2,
      points: 15,
    },
    {
      id: "4",
      task: "Take out trash",
      assignedTo: "Alex",
      dueDate: "2024-11-18",
      status: "skipped",
      difficulty: 1,
      streak: 0,
      points: 5,
      skipReason: "Sick this week",
    },
    {
      id: "5",
      task: "Organize common area",
      assignedTo: "Sarah",
      dueDate: "2024-11-21",
      status: "pending",
      difficulty: 2,
      streak: 3,
      points: 10,
    },
  ]);

  const [vibeEntries, setVibeEntries] = useState<VibeEntry[]>([
    {
      id: "1",
      userId: "you",
      userName: "You",
      score: 8,
      comment: "Great energy this week! Everyone's been really considerate.",
      date: "2024-11-18",
      mood: "happy",
      streak: 7,
    },
    {
      id: "2",
      userId: "sarah",
      userName: "Sarah",
      score: 9,
      comment:
        "Love how we're all communicating better. The anonymous feedback really helps!",
      date: "2024-11-18",
      mood: "excited",
      streak: 12,
    },
    {
      id: "3",
      userId: "marcus",
      userName: "Marcus",
      score: 7,
      comment: "Things are good. Maybe we could be better about dishes?",
      date: "2024-11-17",
      mood: "neutral",
      streak: 5,
    },
    {
      id: "4",
      userId: "alex",
      userName: "Alex",
      score: 6,
      comment:
        "Bit stressed with finals coming up. Appreciate everyone keeping it quiet in evenings.",
      date: "2024-11-17",
      mood: "stressed",
      streak: 9,
    },
  ]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "Anonymous",
      content:
        "Could we maybe be more mindful about cleaning up after cooking? The kitchen's been pretty messy lately. Thanks!",
      timestamp: "2 hours ago",
      type: "anonymous",
      isAIFiltered: true,
      originalTone: "frustrated",
      filteredTone: "polite",
      status: "delivered",
    },
    {
      id: "2",
      sender: "Sarah",
      recipient: "You",
      content:
        "Hey! Want to coordinate on grocery shopping this week? I can pick up the heavy stuff if you handle produce.",
      timestamp: "1 day ago",
      type: "private",
      isAIFiltered: false,
      status: "read",
    },
    {
      id: "3",
      sender: "Anonymous",
      content:
        "Really appreciate how everyone's been about quiet hours! It's making such a difference for my sleep schedule.",
      timestamp: "2 days ago",
      type: "anonymous",
      isAIFiltered: false,
      status: "delivered",
    },
    {
      id: "4",
      sender: "Marcus",
      content:
        "Group chat: Pizza party was amazing! Thanks everyone for pitching in. Let's make it a monthly thing?",
      timestamp: "3 days ago",
      type: "group",
      isAIFiltered: false,
      status: "read",
    },
  ]);

  // Compose form state (moved from renderComposeContent to fix hooks order)
  const [composeInputValue, setComposeInputValue] = useState("");
  const [composeSelectedOption, setComposeSelectedOption] = useState("");

  const userProfile: UserProfile = {
    id: "you",
    name: "You",
    avatar: "Y",
    bio: "Junior studying Psychology. Love cooking, quiet study time, and weekend social gatherings. Always down to help with house stuff!",
    preferences: {
      quietHours: "10 PM - 8 AM",
      cleaningFrequency: "Weekly deep clean + daily tidying",
      socialEnergy: 75,
      guestPolicy: "Give 24h notice for overnight guests",
    },
    habits: {
      bedtime: "11:30 PM",
      morningPerson: true,
      musicVolume: 60,
      cookingSkill: 80,
    },
    updateStreak: 14,
  };

  const roommates = [
    {
      id: "sarah",
      name: "Sarah Chen",
      avatar: "SC",
      status: "online",
      compatibility: 94,
    },
    {
      id: "marcus",
      name: "Marcus Rivera",
      avatar: "MR",
      status: "away",
      compatibility: 89,
    },
    {
      id: "alex",
      name: "Alex Kim",
      avatar: "AK",
      status: "offline",
      compatibility: 76,
    },
  ];

  const houseStatus: HouseStatus = {
    cleanliness: 78,
    pendingChores: chores.filter(
      (c) => c.status === "pending" || c.status === "overdue",
    ).length,
    upcomingEvents: events.filter(
      (e) => e.status === "active" || e.status === "confirmed",
    ).length,
    overallHealth: 82,
    issues: [
      "2 overdue chores",
      "Kitchen needs attention (from anonymous feedback)",
      "1 roommate behind on vibe check streak",
    ],
    improvements: [
      "Great communication this week",
      "Event participation up 40%",
      "Anonymous feedback helping resolve issues early",
    ],
  };

  // Interactive Functions
  const toggleGroceryItem = (id: string) => {
    setGroceryItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, purchased: !item.purchased } : item,
      ),
    );
  };

  const respondToEvent = (
    eventId: string,
    response: "yes" | "no" | "maybe",
  ) => {
    setEvents((events) =>
      events.map((event) =>
        event.id === eventId
          ? { ...event, responses: { ...event.responses, You: response } }
          : event,
      ),
    );
  };

  const completeChore = (choreId: string) => {
    setChores((chores) =>
      chores.map((chore) =>
        chore.id === choreId
          ? {
              ...chore,
              status: "completed" as const,
              completedDate: new Date().toISOString().split("T")[0],
              streak: chore.streak + 1,
            }
          : chore,
      ),
    );
  };

  const skipChore = (choreId: string, reason: string) => {
    setChores((chores) =>
      chores.map((chore) =>
        chore.id === choreId
          ? {
              ...chore,
              status: "skipped" as const,
              skipReason: reason,
              streak: 0,
            }
          : chore,
      ),
    );
  };

  const submitVibeCheck = (
    score: number,
    comment: string,
    mood: "happy" | "neutral" | "stressed" | "excited" | "tired",
  ) => {
    const newEntry: VibeEntry = {
      id: Date.now().toString(),
      userId: "you",
      userName: "You",
      score,
      comment,
      date: new Date().toISOString().split("T")[0],
      mood,
      streak: (vibeEntries.find((e) => e.userId === "you")?.streak || 0) + 1,
    };
    setVibeEntries([newEntry, ...vibeEntries]);
  };

  const navigateToDetail = (tab: TabType, data?: any) => {
    setViewState({
      level: "detail",
      activeTab: tab,
      selectedData: data,
    });
  };

  const navigateToCompose = (type: string) => {
    setViewState({
      level: "compose",
      activeTab: viewState.activeTab,
      composeType: type,
    });
  };

  const navigateBack = () => {
    if (
      viewState.level === "detail" ||
      viewState.level === "compose" ||
      viewState.level === "settings"
    ) {
      setViewState({ level: "main", activeTab: viewState.activeTab });
    }
  };

  const renderTabContent = () => {
    switch (viewState.activeTab) {
      case "overview":
        return (
          <div className="space-y-6 p-6">
            {/* House Status Overview */}
            <Card className="border-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      House Health
                    </h3>
                    <p className="text-sm text-gray-600">
                      Overall vibe and status
                    </p>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-3xl font-bold text-indigo-600">
                      {houseStatus.overallHealth}%
                    </div>
                    <div className="text-sm text-emerald-600 flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      Looking good!
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Sparkles className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="text-lg font-bold text-emerald-600">
                      {houseStatus.cleanliness}%
                    </div>
                    <div className="text-xs text-gray-600">Cleanliness</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="text-lg font-bold text-amber-600">
                      {houseStatus.pendingChores}
                    </div>
                    <div className="text-xs text-gray-600">Pending Chores</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Calendar className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="text-lg font-bold text-purple-600">
                      {houseStatus.upcomingEvents}
                    </div>
                    <div className="text-xs text-gray-600">Upcoming Events</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Recent Improvements
                    </h4>
                    {houseStatus.improvements.map((improvement, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-emerald-700"
                      >
                        <CheckCircle className="w-4 h-4" />
                        {improvement}
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Areas for Attention
                    </h4>
                    {houseStatus.issues.map((issue, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-amber-700"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {issue}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 bg-white shadow-md hover:shadow-lg transition-all cursor-pointer group">
                <CardContent
                  className="p-4 text-center"
                  onClick={() => navigateToCompose("vibe")}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Smile className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    Vibe Check
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Share weekly mood
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white shadow-md hover:shadow-lg transition-all cursor-pointer group">
                <CardContent
                  className="p-4 text-center"
                  onClick={() => navigateToCompose("event")}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <PartyPopper className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    Plan Event
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Suggest something fun
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Roommate Status */}
            <Card className="border-0 bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Roommate Status
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      setViewState({ level: "main", activeTab: "profile" })
                    }
                  >
                    View All
                  </Button>
                </div>
                <div className="space-y-3">
                  {roommates.map((roommate) => (
                    <div key={roommate.id} className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          {roommate.avatar}
                        </div>
                        <div
                          className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                            roommate.status === "online"
                              ? "bg-emerald-500"
                              : roommate.status === "away"
                                ? "bg-amber-500"
                                : "bg-gray-400"
                          }`}
                        ></div>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">
                          {roommate.name}
                        </div>
                        <div className="text-xs text-gray-500 capitalize">
                          {roommate.status}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-gray-900">
                          {roommate.compatibility}%
                        </div>
                        <div className="text-xs text-gray-500">
                          compatibility
                        </div>
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
            <Card className="border-0 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        House Budget
                      </h3>
                      <p className="text-sm text-gray-600">
                        This week's spending
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-600">
                      $
                      {groceryItems
                        .filter((item) => item.purchased)
                        .reduce((sum, item) => sum + item.price, 0)
                        .toFixed(0)}
                    </div>
                    <div className="text-sm text-gray-600">of $150 budget</div>
                  </div>
                </div>
                <div className="w-full bg-emerald-100 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all duration-1000"
                    style={{
                      width: `${(groceryItems.filter((item) => item.purchased).reduce((sum, item) => sum + item.price, 0) / 150) * 100}%`,
                    }}
                  ></div>
                </div>
              </CardContent>
            </Card>

            {/* Add Item */}
            <Card className="border-0 bg-white shadow-md">
              <CardContent className="p-4">
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
                  onClick={() => navigateToCompose("grocery")}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Grocery Item
                </Button>
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
                    items left
                  </Badge>
                </div>
                <div className="space-y-3">
                  {groceryItems.map((item) => (
                    <div
                      key={item.id}
                      className={`border-l-4 ${
                        item.priority === "high"
                          ? "border-l-red-500 bg-red-50"
                          : item.priority === "medium"
                            ? "border-l-amber-500 bg-amber-50"
                            : "border-l-green-500 bg-green-50"
                      } rounded-r-xl transition-all ${item.purchased ? "opacity-60" : "hover:shadow-sm"}`}
                    >
                      <div className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3 flex-1">
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all ${
                              item.purchased
                                ? "bg-emerald-500 border-emerald-500"
                                : "border-gray-300 hover:border-emerald-400"
                            }`}
                            onClick={() => toggleGroceryItem(item.id)}
                          >
                            {item.purchased && (
                              <Check className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div
                              className={`font-medium ${item.purchased ? "line-through text-gray-500" : "text-gray-900"}`}
                            >
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              Added by {item.addedBy} • Assigned to{" "}
                              {item.assignedTo}
                              {item.notes && ` • ${item.notes}`}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div
                            className={`font-bold ${item.purchased ? "text-gray-500" : "text-gray-900"}`}
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
                      Total Remaining
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

      case "events":
        return (
          <div className="space-y-6 p-6">
            {/* Create Event */}
            <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg">
              <CardContent className="p-6">
                <Button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  onClick={() => navigateToCompose("event")}
                >
                  <PartyPopper className="w-4 h-4 mr-2" />
                  "Would y'all be down for...?"
                </Button>
              </CardContent>
            </Card>

            {/* Events List */}
            <div className="space-y-4">
              {events.map((event) => (
                <Card
                  key={event.id}
                  className={`border-0 shadow-lg ${
                    event.status === "confirmed"
                      ? "bg-gradient-to-br from-green-50 to-emerald-50"
                      : event.status === "cancelled"
                        ? "bg-gray-50"
                        : "bg-white"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            event.category === "entertainment"
                              ? "bg-purple-100"
                              : event.category === "food"
                                ? "bg-orange-100"
                                : event.category === "house"
                                  ? "bg-blue-100"
                                  : "bg-green-100"
                          }`}
                        >
                          {event.category === "entertainment" && (
                            <Gamepad className="w-6 h-6 text-purple-600" />
                          )}
                          {event.category === "food" && (
                            <Pizza className="w-6 h-6 text-orange-600" />
                          )}
                          {event.category === "house" && (
                            <Home className="w-6 h-6 text-blue-600" />
                          )}
                          {event.category === "social" && (
                            <Users className="w-6 h-6 text-green-600" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">
                            {event.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            Proposed by {event.proposedBy}
                          </p>
                        </div>
                      </div>
                      <Badge
                        className={
                          event.status === "confirmed"
                            ? "bg-green-100 text-green-700"
                            : event.status === "cancelled"
                              ? "bg-red-100 text-red-700"
                              : "bg-blue-100 text-blue-700"
                        }
                      >
                        {event.status}
                      </Badge>
                    </div>

                    <p className="text-gray-700 mb-4">{event.description}</p>

                    {event.date && (
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(event.date).toLocaleDateString()}
                        </div>
                        {event.time && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {event.time}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Responses */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">Responses</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {Object.entries(event.responses).map(
                          ([person, response]) => (
                            <div
                              key={person}
                              className="flex items-center gap-2"
                            >
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs ${
                                  response === "yes"
                                    ? "bg-green-500"
                                    : response === "no"
                                      ? "bg-red-500"
                                      : "bg-amber-500"
                                }`}
                              >
                                {response === "yes" ? (
                                  <Check className="w-4 h-4" />
                                ) : response === "no" ? (
                                  <X className="w-4 h-4" />
                                ) : (
                                  "?"
                                )}
                              </div>
                              <span className="text-sm text-gray-700">
                                {person}
                              </span>
                              <span className="text-xs text-gray-500 capitalize">
                                ({response})
                              </span>
                            </div>
                          ),
                        )}
                      </div>

                      {/* Your Response */}
                      {event.status === "active" && (
                        <div className="pt-3 border-t border-gray-200">
                          <p className="text-sm font-medium text-gray-900 mb-2">
                            Your response:
                          </p>
                          <div className="flex gap-2">
                            {["yes", "maybe", "no"].map((response) => (
                              <Button
                                key={response}
                                variant={
                                  event.responses["You"] === response
                                    ? "default"
                                    : "outline"
                                }
                                size="sm"
                                onClick={() =>
                                  respondToEvent(event.id, response as any)
                                }
                                className={
                                  response === "yes"
                                    ? "bg-green-500 hover:bg-green-600 text-white"
                                    : response === "no"
                                      ? "bg-red-500 hover:bg-red-600 text-white"
                                      : "bg-amber-500 hover:bg-amber-600 text-white"
                                }
                              >
                                {response === "yes" ? (
                                  <ThumbsUp className="w-4 h-4 mr-1" />
                                ) : response === "no" ? (
                                  <ThumbsDown className="w-4 h-4 mr-1" />
                                ) : (
                                  <Meh className="w-4 h-4 mr-1" />
                                )}
                                {response}
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case "chores":
        return (
          <div className="space-y-6 p-6">
            {/* Chore Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="border-0 bg-gradient-to-br from-green-50 to-emerald-50 shadow-md">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-600">
                    {chores.filter((c) => c.status === "completed").length}
                  </div>
                  <div className="text-sm text-gray-600">Completed</div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-gradient-to-br from-amber-50 to-orange-50 shadow-md">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-amber-600">
                    {chores.filter((c) => c.status === "pending").length}
                  </div>
                  <div className="text-sm text-gray-600">Pending</div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-gradient-to-br from-red-50 to-pink-50 shadow-md">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-red-600">
                    {chores.filter((c) => c.status === "overdue").length}
                  </div>
                  <div className="text-sm text-gray-600">Overdue</div>
                </CardContent>
              </Card>
            </div>

            {/* Chore Calendar/List */}
            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Chore Assignment
                  </h3>
                  <Button variant="outline" size="sm">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    Calendar View
                  </Button>
                </div>
                <div className="space-y-3">
                  {chores.map((chore) => (
                    <div
                      key={chore.id}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        chore.status === "completed"
                          ? "border-green-200 bg-green-50"
                          : chore.status === "overdue"
                            ? "border-red-200 bg-red-50"
                            : chore.status === "skipped"
                              ? "border-amber-200 bg-amber-50"
                              : "border-blue-200 bg-blue-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              chore.status === "completed"
                                ? "bg-green-500"
                                : chore.status === "overdue"
                                  ? "bg-red-500"
                                  : chore.status === "skipped"
                                    ? "bg-amber-500"
                                    : "bg-blue-500"
                            }`}
                          >
                            {chore.status === "completed" ? (
                              <CheckCircle className="w-5 h-5 text-white" />
                            ) : chore.status === "overdue" ? (
                              <AlertCircle className="w-5 h-5 text-white" />
                            ) : chore.status === "skipped" ? (
                              <X className="w-5 h-5 text-white" />
                            ) : (
                              <Clock className="w-5 h-5 text-white" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {chore.task}
                            </h4>
                            <div className="text-sm text-gray-600">
                              Assigned to {chore.assignedTo} • Due{" "}
                              {new Date(chore.dueDate).toLocaleDateString()}
                            </div>
                            {chore.streak > 0 && (
                              <div className="flex items-center gap-1 text-sm text-orange-600">
                                <Flame className="w-4 h-4" />
                                {chore.streak} week streak
                              </div>
                            )}
                            {chore.skipReason && (
                              <div className="text-sm text-amber-700">
                                Reason: {chore.skipReason}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-right">
                            <div className="text-sm font-bold text-gray-900">
                              +{chore.points} pts
                            </div>
                            <div className="text-xs text-gray-500">
                              {"★".repeat(chore.difficulty)} difficulty
                            </div>
                          </div>
                          {chore.assignedTo === "You" &&
                            chore.status === "pending" && (
                              <div className="flex gap-1">
                                <Button
                                  size="sm"
                                  className="bg-green-500 hover:bg-green-600 text-white"
                                  onClick={() => completeChore(chore.id)}
                                >
                                  <Check className="w-4 h-4" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() =>
                                    navigateToCompose("skip-chore")
                                  }
                                >
                                  Skip
                                </Button>
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "vibe":
        return (
          <div className="space-y-6 p-6">
            {/* Submit Vibe Check */}
            <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg">
              <CardContent className="p-6">
                <Button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  onClick={() => navigateToCompose("vibe")}
                >
                  <Smile className="w-4 h-4 mr-2" />
                  Submit This Week's Vibe Check
                </Button>
              </CardContent>
            </Card>

            {/* Vibe Overview */}
            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    House Vibe This Week
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">
                      {Math.round(
                        vibeEntries.reduce(
                          (sum, entry) => sum + entry.score,
                          0,
                        ) / vibeEntries.length,
                      )}
                    </div>
                    <div className="text-sm text-gray-600">Average Score</div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-6">
                  {["happy", "excited", "neutral", "stressed"].map((mood) => (
                    <div key={mood} className="text-center">
                      <div className="text-2xl mb-1">
                        {mood === "happy"
                          ? "😊"
                          : mood === "excited"
                            ? "🤩"
                            : mood === "neutral"
                              ? "😐"
                              : "😓"}
                      </div>
                      <div className="text-sm text-gray-600 capitalize">
                        {mood}
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        {vibeEntries.filter((e) => e.mood === mood).length}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Vibe Checks */}
            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Recent Check-ins
                </h3>
                <div className="space-y-4">
                  {vibeEntries.map((entry) => (
                    <div key={entry.id} className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          {entry.userName[0]}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium text-gray-900">
                              {entry.userName}
                            </span>
                            <div className="flex items-center gap-1">
                              {[...Array(10)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-2 h-2 rounded-full ${
                                    i < entry.score
                                      ? "bg-purple-500"
                                      : "bg-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm font-bold text-purple-600">
                              {entry.score}/10
                            </span>
                            <span className="text-lg">
                              {entry.mood === "happy"
                                ? "😊"
                                : entry.mood === "excited"
                                  ? "🤩"
                                  : entry.mood === "neutral"
                                    ? "😐"
                                    : entry.mood === "stressed"
                                      ? "😓"
                                      : "😴"}
                            </span>
                          </div>
                          <p className="text-gray-700 text-sm mb-2">
                            {entry.comment}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>
                              {new Date(entry.date).toLocaleDateString()}
                            </span>
                            {entry.streak > 0 && (
                              <>
                                <span>•</span>
                                <div className="flex items-center gap-1 text-orange-600">
                                  <Flame className="w-3 h-3" />
                                  {entry.streak} week streak
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "messages":
        return (
          <div className="space-y-6 p-6">
            {/* Message Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-md">
                <CardContent className="p-4">
                  <Button
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
                    onClick={() => navigateToCompose("anonymous")}
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Anonymous Feedback
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-0 bg-gradient-to-br from-green-50 to-emerald-50 shadow-md">
                <CardContent className="p-4">
                  <Button
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
                    onClick={() => navigateToCompose("private")}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Private Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Messages List */}
            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Recent Messages
                </h3>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm ${
                            message.type === "anonymous"
                              ? "bg-purple-500"
                              : message.type === "private"
                                ? "bg-blue-500"
                                : "bg-green-500"
                          }`}
                        >
                          {message.type === "anonymous"
                            ? "?"
                            : message.sender[0]}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium text-gray-900">
                              {message.type === "anonymous"
                                ? "Anonymous"
                                : message.sender}
                            </span>
                            <Badge
                              variant="secondary"
                              className={`text-xs ${
                                message.type === "anonymous"
                                  ? "bg-purple-100 text-purple-700"
                                  : message.type === "private"
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-green-100 text-green-700"
                              }`}
                            >
                              {message.type}
                            </Badge>
                            {message.recipient && (
                              <span className="text-xs text-gray-500">
                                to {message.recipient}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-700 text-sm mb-2">
                            {message.content}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{message.timestamp}</span>
                            {message.isAIFiltered && (
                              <>
                                <span>•</span>
                                <Badge
                                  variant="outline"
                                  className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200"
                                >
                                  AI Enhanced: {message.originalTone} →{" "}
                                  {message.filteredTone}
                                </Badge>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Conflict Resolution */}
            <Card className="border-0 bg-gradient-to-br from-orange-50 to-red-50 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Need Help Resolving an Issue?
                    </h3>
                    <p className="text-sm text-gray-600">
                      Guided support for difficult conversations
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-orange-200 text-orange-700 hover:bg-orange-50"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Get conversation suggestions
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-red-200 text-red-700 hover:bg-red-50"
                  >
                    <Flag className="w-4 h-4 mr-2" />
                    Escalate to RA/Housing Admin
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "profile":
        return (
          <div className="space-y-6 p-6">
            {/* Your Profile */}
            <Card className="border-0 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                    {userProfile.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {userProfile.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-orange-100 text-orange-700">
                        <Flame className="w-3 h-3 mr-1" />
                        {userProfile.updateStreak} day streak
                      </Badge>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto">
                    <Edit3 className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {userProfile.bio}
                </p>
              </CardContent>
            </Card>

            {/* Living Preferences */}
            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Living Preferences
                </h3>
                <div className="space-y-4">
                  {Object.entries(userProfile.preferences).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center"
                      >
                        <span className="text-gray-700 capitalize">
                          {key.replace(/([A-Z])/g, " $1")}
                        </span>
                        <span className="font-medium text-gray-900">
                          {value}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Living Habits */}
            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Living Habits
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Bedtime</span>
                    <span className="font-medium text-gray-900">
                      {userProfile.habits.bedtime}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Morning Person</span>
                    <span className="font-medium text-gray-900">
                      {userProfile.habits.morningPerson ? "Yes" : "No"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Music Volume</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                          style={{
                            width: `${userProfile.habits.musicVolume}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {userProfile.habits.musicVolume}%
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Cooking Skill</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                          style={{
                            width: `${userProfile.habits.cookingSkill}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {userProfile.habits.cookingSkill}%
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Roommate Compatibility */}
            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Roommate Compatibility
                </h3>
                <div className="space-y-3">
                  {roommates.map((roommate) => (
                    <div
                      key={roommate.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          {roommate.avatar}
                        </div>
                        <span className="font-medium text-gray-900">
                          {roommate.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"
                            style={{ width: `${roommate.compatibility}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-gray-900">
                          {roommate.compatibility}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  const renderDetailContent = () => {
    return (
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={navigateBack}
            className="rounded-xl"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-xl font-bold text-gray-900">Detail View</h2>
        </div>
        <Card className="border-0 bg-white shadow-lg">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-gray-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Detailed Information
            </h3>
            <p className="text-gray-600">
              This would show expanded details for the selected item.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderComposeContent = () => {
    const handleSubmit = () => {
      if (viewState.composeType === "vibe") {
        const score = parseInt(composeSelectedOption) || 5;
        submitVibeCheck(score, composeInputValue, "happy");
      }
      // Clear form when navigating back
      setComposeInputValue("");
      setComposeSelectedOption("");
      navigateBack();
    };

    return (
      <div className="space-y-6 p-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={navigateBack}
            className="rounded-xl"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-xl font-bold text-gray-900">
            {viewState.composeType === "vibe"
              ? "Weekly Vibe Check"
              : viewState.composeType === "event"
                ? "Suggest Event"
                : viewState.composeType === "grocery"
                  ? "Add Grocery Item"
                  : viewState.composeType === "anonymous"
                    ? "Anonymous Feedback"
                    : viewState.composeType === "private"
                      ? "Private Message"
                      : "Create"}
          </h2>
        </div>

        <Card className="border-0 bg-white shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              {viewState.composeType === "vibe" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      How's the house feeling this week? (1-10)
                    </label>
                    <div className="flex gap-2">
                      {[...Array(10)].map((_, i) => (
                        <button
                          key={i}
                          onClick={() =>
                            setComposeSelectedOption((i + 1).toString())
                          }
                          className={`w-8 h-8 rounded-full border-2 font-bold transition-all ${
                            composeSelectedOption === (i + 1).toString()
                              ? "bg-purple-500 border-purple-500 text-white"
                              : "border-gray-300 text-gray-600 hover:border-purple-400"
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Any comments? (Optional)
                    </label>
                    <textarea
                      value={composeInputValue}
                      onChange={(e) => setComposeInputValue(e.target.value)}
                      placeholder="Share what's working well or what could be better..."
                      className="w-full h-24 p-3 border border-gray-200 rounded-xl resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your mood today
                    </label>
                    <div className="flex gap-2">
                      {[
                        { emoji: "😊", mood: "happy" },
                        { emoji: "🤩", mood: "excited" },
                        { emoji: "😐", mood: "neutral" },
                        { emoji: "😓", mood: "stressed" },
                        { emoji: "😴", mood: "tired" },
                      ].map(({ emoji, mood }) => (
                        <button
                          key={mood}
                          className="text-2xl p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {viewState.composeType === "event" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Title
                    </label>
                    <Input
                      value={composeInputValue}
                      onChange={(e) => setComposeInputValue(e.target.value)}
                      placeholder="Would y'all be down for..."
                      className="border-gray-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      placeholder="Give some details about your idea!"
                      className="w-full h-24 p-3 border border-gray-200 rounded-xl resize-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date (Optional)
                      </label>
                      <Input type="date" className="border-gray-200" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Time (Optional)
                      </label>
                      <Input type="time" className="border-gray-200" />
                    </div>
                  </div>
                </>
              )}

              {(viewState.composeType === "anonymous" ||
                viewState.composeType === "private") && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {viewState.composeType === "private"
                        ? "Send to"
                        : "Anonymous Message"}
                    </label>
                    {viewState.composeType === "private" && (
                      <select className="w-full p-3 border border-gray-200 rounded-xl mb-3">
                        <option>Select roommate...</option>
                        {roommates.map((roommate) => (
                          <option key={roommate.id} value={roommate.id}>
                            {roommate.name}
                          </option>
                        ))}
                      </select>
                    )}
                    <textarea
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder={
                        viewState.composeType === "anonymous"
                          ? "Share feedback anonymously. AI will review and deliver if constructive."
                          : "Send a private message to your roommate."
                      }
                      className="w-full h-32 p-3 border border-gray-200 rounded-xl resize-none"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 text-sm text-gray-600">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 text-blue-500 rounded"
                      />
                      Use AI tone filter
                    </label>
                  </div>
                </>
              )}

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={navigateBack}
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
                  onClick={handleSubmit}
                >
                  {viewState.composeType === "vibe"
                    ? "Submit Vibe Check"
                    : viewState.composeType === "event"
                      ? "Create Poll"
                      : viewState.composeType === "grocery"
                        ? "Add Item"
                        : "Send Message"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-80 h-[640px] bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-800 rounded-[3rem] p-3 shadow-2xl relative overflow-hidden">
      {/* Premium ambient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-[3rem]"></div>
      <div className="absolute top-4 left-4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-4 right-4 w-24 h-24 bg-indigo-400/10 rounded-full blur-xl"></div>

      <div className="w-full h-full bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 rounded-[2.5rem] overflow-hidden relative backdrop-blur-sm border border-white/20 flex flex-col">
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
                {viewState.level !== "main" && (
                  <button
                    onClick={() =>
                      setViewState({
                        level: "main",
                        activeTab: viewState.activeTab,
                      })
                    }
                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 text-white" />
                  </button>
                )}
                <button
                  onClick={() => (window.location.href = "/")}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
                >
                  <Home className="w-5 h-5 text-white" />
                </button>
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
        <div className="flex-1 overflow-auto bg-gray-50/50">
          {viewState.level === "main" && renderTabContent()}
          {viewState.level === "detail" && renderDetailContent()}
          {viewState.level === "compose" && renderComposeContent()}
        </div>

        {/* Bottom Navigation */}
        {viewState.level === "main" && (
          <div className="px-2 py-3 bg-white border-t border-gray-200">
            <div className="flex justify-around">
              {[
                { id: "overview", icon: Home, label: "Home", color: "blue" },
                {
                  id: "grocery",
                  icon: ShoppingCart,
                  label: "Grocery",
                  color: "emerald",
                },
                {
                  id: "events",
                  icon: PartyPopper,
                  label: "Events",
                  color: "purple",
                },
                {
                  id: "chores",
                  icon: CheckCircle,
                  label: "Chores",
                  color: "orange",
                },
                { id: "vibe", icon: Smile, label: "Vibe", color: "pink" },
                {
                  id: "messages",
                  icon: MessageCircle,
                  label: "Messages",
                  color: "indigo",
                },
                { id: "profile", icon: User, label: "Profile", color: "gray" },
              ].map(({ id, icon: Icon, label, color }) => (
                <button
                  key={id}
                  onClick={() =>
                    setViewState({ level: "main", activeTab: id as TabType })
                  }
                  className={`flex flex-col items-center gap-1 px-2 py-2 rounded-xl transition-all ${
                    viewState.activeTab === id
                      ? `bg-${color}-100 text-${color}-600 scale-105 shadow-md`
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-xs font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
