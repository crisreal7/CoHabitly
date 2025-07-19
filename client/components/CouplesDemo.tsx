import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Heart,
  MessageCircle,
  CheckCircle,
  Plus,
  Send,
  Settings,
  Calendar,
  Star,
  Lock,
  Smile,
  Coffee,
  Home,
  ShoppingCart,
  Bell,
  User,
  MoreHorizontal,
  Sparkles,
  TrendingUp,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Zap,
  Target,
  Users,
} from "lucide-react";

type CouplesTabType = "home" | "shared" | "communicate" | "preferences";

interface Message {
  id: string;
  text: string;
  timestamp: string;
  isOwn: boolean;
  isAnonymous?: boolean;
  mood?: "happy" | "thoughtful" | "concerned";
}

interface SharedItem {
  id: string;
  text: string;
  isCompleted: boolean;
  addedBy: "You" | "Partner";
  category: "groceries" | "tasks" | "goals";
}

interface MoodData {
  date: string;
  yourMood: number;
  partnerMood: number;
}

export default function CouplesDemo() {
  const [activeTab, setActiveTab] = useState<CouplesTabType>("home");
  const [newMessage, setNewMessage] = useState("");
  const [newItem, setNewItem] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<
    "groceries" | "tasks" | "goals"
  >("groceries");

  const [messages] = useState<Message[]>([
    {
      id: "1",
      text: "I've been feeling a bit overwhelmed with work lately. Could we maybe keep things a bit quieter in the evenings this week?",
      timestamp: "2 hours ago",
      isOwn: false,
      isAnonymous: true,
      mood: "thoughtful",
    },
    {
      id: "2",
      text: "Of course! I didn't realize. I can use headphones for my calls after 7pm. Thank you for letting me know ❤️",
      timestamp: "1 hour ago",
      isOwn: true,
      mood: "happy",
    },
    {
      id: "3",
      text: "You're the best! This really helps. Maybe we can plan a cozy movie night this weekend?",
      timestamp: "45 mins ago",
      isOwn: false,
      mood: "happy",
    },
  ]);

  const [sharedItems, setSharedItems] = useState<SharedItem[]>([
    {
      id: "1",
      text: "Organic blueberries",
      isCompleted: true,
      addedBy: "You",
      category: "groceries",
    },
    {
      id: "2",
      text: "Oat milk (vanilla)",
      isCompleted: false,
      addedBy: "Partner",
      category: "groceries",
    },
    {
      id: "3",
      text: "Fresh basil for pasta",
      isCompleted: false,
      addedBy: "You",
      category: "groceries",
    },
    {
      id: "4",
      text: "Clean bathroom together",
      isCompleted: true,
      addedBy: "Partner",
      category: "tasks",
    },
    {
      id: "5",
      text: "Plan weekend trip",
      isCompleted: false,
      addedBy: "You",
      category: "goals",
    },
    {
      id: "6",
      text: "Try that new restaurant",
      isCompleted: false,
      addedBy: "Partner",
      category: "goals",
    },
  ]);

  const [weeklyMoods] = useState<MoodData[]>([
    { date: "Mon", yourMood: 8, partnerMood: 7 },
    { date: "Tue", yourMood: 6, partnerMood: 8 },
    { date: "Wed", yourMood: 9, partnerMood: 9 },
    { date: "Thu", yourMood: 7, partnerMood: 6 },
    { date: "Fri", yourMood: 9, partnerMood: 8 },
    { date: "Sat", yourMood: 10, partnerMood: 9 },
    { date: "Sun", yourMood: 8, partnerMood: 8 },
  ]);

  const toggleItem = (id: string) => {
    setSharedItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item,
      ),
    );
  };

  const addNewItem = () => {
    if (newItem.trim()) {
      const newSharedItem: SharedItem = {
        id: Date.now().toString(),
        text: newItem.trim(),
        isCompleted: false,
        addedBy: "You",
        category: selectedCategory,
      };
      setSharedItems([...sharedItems, newSharedItem]);
      setNewItem("");
      setShowAddForm(false);
    }
  };

  const getFilteredItems = () => {
    return sharedItems.filter((item) => item.category === selectedCategory);
  };

  const getMoodEmoji = (mood: number) => {
    if (mood >= 9) return "😍";
    if (mood >= 7) return "😊";
    if (mood >= 5) return "😐";
    return "😔";
  };

  const averageMood = Math.round(
    weeklyMoods.reduce((sum, day) => sum + day.yourMood + day.partnerMood, 0) /
      (weeklyMoods.length * 2),
  );

  return (
    <div className="w-80 h-[640px] bg-gradient-to-br from-gray-900 via-rose-900/20 to-gray-800 rounded-[3rem] p-3 shadow-2xl relative overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-pink-500/5 rounded-[3rem]"></div>
      <div className="absolute top-4 left-4 w-32 h-32 bg-rose-400/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-4 right-4 w-24 h-24 bg-pink-400/10 rounded-full blur-xl"></div>

      <div className="w-full h-full bg-gradient-to-br from-white via-rose-50/50 to-pink-50/30 rounded-[2.5rem] overflow-hidden relative backdrop-blur-sm border border-white/20">
        {/* Status bar */}
        <div className="h-12 bg-gradient-to-r from-rose-50 to-pink-50 flex items-center justify-between px-6 border-b border-rose-100/50">
          <div className="text-sm font-semibold text-gray-800">9:41</div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-2 bg-rose-500 rounded-sm"></div>
            <div className="w-6 h-3 border border-rose-300 rounded-sm">
              <div className="w-4 h-full bg-rose-500 rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-rose-400/20 animate-pulse"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Heart className="w-5 h-5 text-white animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">CoHabitly</h3>
                  <p className="text-rose-100 text-sm">Together Mode</p>
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
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-3 h-3 text-white" />
                </div>
                <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center border border-white/20">
                  <User className="w-3 h-3 text-white" />
                </div>
              </div>
              <span className="text-rose-100 text-xs">Connected</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-1"></div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden">
          {activeTab === "home" && (
            <div className="p-6 space-y-6 h-full overflow-y-auto">
              {/* Harmony Score */}
              <Card className="border-0 bg-gradient-to-br from-rose-50 to-pink-50 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-rose-500" />
                      <h3 className="font-bold text-gray-900">
                        Relationship Harmony
                      </h3>
                    </div>
                    <span className="text-2xl font-bold text-rose-600">
                      {averageMood}/10
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">This week's vibe</span>
                      <span className="text-rose-600 font-medium">
                        Flourishing
                      </span>
                    </div>
                    <div className="w-full bg-rose-100 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-rose-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${averageMood * 10}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        Daily check-ins help
                      </span>
                      <div className="flex gap-1">
                        {weeklyMoods.slice(-3).map((day, index) => (
                          <span key={index} className="text-lg">
                            {getMoodEmoji(
                              Math.round((day.yourMood + day.partnerMood) / 2),
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-0 bg-white/70 shadow-md hover:shadow-lg transition-all cursor-pointer group">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      Check In
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Share how you're feeling
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-white/70 shadow-md hover:shadow-lg transition-all cursor-pointer group">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <Target className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      Set Goal
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">Plan together</p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card className="border-0 bg-white/70 shadow-md">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-900">Recent Together</h3>
                    <MoreHorizontal className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          Shared grocery list completed
                        </p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                        <Heart className="w-4 h-4 text-rose-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          Anonymous note sent
                        </p>
                        <p className="text-xs text-gray-500">Yesterday</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "shared" && (
            <div className="p-6 space-y-4 h-full overflow-y-auto">
              {/* Category Tabs */}
              <div className="flex bg-gray-100 rounded-xl p-1">
                {[
                  { key: "groceries", label: "Groceries", icon: ShoppingCart },
                  { key: "tasks", label: "Tasks", icon: CheckCircle },
                  { key: "goals", label: "Goals", icon: Star },
                ].map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key as any)}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === key
                        ? "bg-white text-rose-600 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </button>
                ))}
              </div>

              {/* Add Item */}
              {showAddForm ? (
                <Card className="border-2 border-rose-200 bg-rose-50/50">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <Input
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        placeholder={`Add new ${selectedCategory.slice(0, -1)}...`}
                        className="border-rose-200 focus:border-rose-400"
                        autoFocus
                      />
                      <div className="flex gap-2">
                        <Button
                          onClick={addNewItem}
                          className="flex-1 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white"
                          size="sm"
                        >
                          <Plus className="w-4 h-4 mr-1" />
                          Add
                        </Button>
                        <Button
                          onClick={() => setShowAddForm(false)}
                          variant="outline"
                          size="sm"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Button
                  onClick={() => setShowAddForm(true)}
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add {selectedCategory.slice(0, -1)}
                </Button>
              )}

              {/* Items List */}
              <div className="space-y-3">
                {getFilteredItems().map((item) => (
                  <Card
                    key={item.id}
                    className={`border-0 cursor-pointer transition-all hover:shadow-md ${
                      item.isCompleted
                        ? "bg-gray-50 opacity-75"
                        : "bg-white shadow-sm"
                    }`}
                    onClick={() => toggleItem(item.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                            item.isCompleted
                              ? "bg-rose-500 border-rose-500"
                              : "border-gray-300 hover:border-rose-400"
                          }`}
                        >
                          {item.isCompleted && (
                            <CheckCircle className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p
                            className={`font-medium ${
                              item.isCompleted
                                ? "line-through text-gray-500"
                                : "text-gray-900"
                            }`}
                          >
                            {item.text}
                          </p>
                          <p className="text-xs text-gray-500">
                            Added by {item.addedBy}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "communicate" && (
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-rose-100 bg-gradient-to-r from-rose-50 to-pink-50">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-rose-500" />
                  <span className="text-sm font-medium text-gray-700">
                    Safe Space
                  </span>
                  <span className="text-xs text-gray-500">
                    • End-to-end encrypted
                  </span>
                </div>
              </div>

              <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] ${message.isOwn ? "order-2" : "order-1"}`}
                    >
                      <div
                        className={`p-3 rounded-2xl ${
                          message.isOwn
                            ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white"
                            : "bg-white border border-gray-200 text-gray-900"
                        }`}
                      >
                        {message.isAnonymous && !message.isOwn && (
                          <div className="flex items-center gap-1 mb-2 opacity-75">
                            <Lock className="w-3 h-3" />
                            <span className="text-xs">Anonymous</span>
                          </div>
                        )}
                        <p className="text-sm leading-relaxed">
                          {message.text}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mt-1 px-2">
                        <span className="text-xs text-gray-500">
                          {message.timestamp}
                        </span>
                        {message.mood && (
                          <span className="text-sm">
                            {message.mood === "happy"
                              ? "😊"
                              : message.mood === "thoughtful"
                                ? "🤔"
                                : "😔"}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-rose-100 bg-white">
                <div className="flex gap-2">
                  <Input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Share something thoughtful..."
                    className="flex-1 border-rose-200 focus:border-rose-400"
                  />
                  <Button
                    className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white"
                    size="icon"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <label className="flex items-center gap-2 text-xs text-gray-600">
                    <input type="checkbox" className="w-3 h-3 text-rose-500" />
                    Send anonymously
                  </label>
                  <div className="flex gap-1">
                    <button className="text-lg hover:scale-110 transition-transform">
                      😊
                    </button>
                    <button className="text-lg hover:scale-110 transition-transform">
                      🤔
                    </button>
                    <button className="text-lg hover:scale-110 transition-transform">
                      💕
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "preferences" && (
            <div className="p-6 space-y-6 h-full overflow-y-auto">
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-md">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <Home className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-gray-900">Living Style</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">
                        Cleanliness level
                      </span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((level) => (
                          <div
                            key={level}
                            className={`w-3 h-3 rounded-full ${level <= 4 ? "bg-blue-500" : "bg-gray-200"}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">
                        Social energy
                      </span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((level) => (
                          <div
                            key={level}
                            className={`w-3 h-3 rounded-full ${level <= 3 ? "bg-blue-500" : "bg-gray-200"}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-md">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-5 h-5 text-emerald-600" />
                    <h3 className="font-bold text-gray-900">Schedule Sync</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">
                        Morning person
                      </span>
                      <div className="w-10 h-6 bg-emerald-500 rounded-full relative">
                        <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 shadow-sm"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Quiet hours</span>
                      <span className="text-sm font-medium text-emerald-600">
                        10 PM - 7 AM
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-50 shadow-md">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <Settings className="w-5 h-5 text-purple-600" />
                    <h3 className="font-bold text-gray-900">Communication</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">
                        Gentle reminders
                      </span>
                      <div className="w-10 h-6 bg-purple-500 rounded-full relative">
                        <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 shadow-sm"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">
                        Conflict style
                      </span>
                      <span className="text-sm font-medium text-purple-600">
                        Talk it through
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="px-4 py-3 bg-white border-t border-rose-100">
          <div className="flex justify-around">
            {[
              { key: "home", icon: Home, label: "Home", color: "rose" },
              { key: "shared", icon: Users, label: "Shared", color: "blue" },
              {
                key: "communicate",
                icon: MessageCircle,
                label: "Safe Talk",
                color: "emerald",
              },
              {
                key: "preferences",
                icon: Settings,
                label: "Style",
                color: "purple",
              },
            ].map(({ key, icon: Icon, label, color }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as CouplesTabType)}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                  activeTab === key
                    ? `bg-${color}-100 text-${color}-600`
                    : "text-gray-500 hover:text-gray-700"
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
