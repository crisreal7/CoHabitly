import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  ShoppingCart,
  MessageCircle,
  Settings,
  Plus,
  Check,
  Heart,
  Calendar,
  DollarSign,
  Send,
  ChevronRight,
  CheckCircle,
  User,
  Wifi,
  Battery,
  Signal,
  Smile,
  Star,
} from "lucide-react";

type CouplesTabType = "dashboard" | "grocery" | "feedback" | "settings";

interface GroceryItem {
  id: string;
  name: string;
  price: number;
  category: string;
  addedBy: string;
  purchased: boolean;
  pickupBy?: string;
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
}

interface VibeData {
  overall: number;
  communication: number;
  chores: number;
  quality_time: number;
  trend: "up" | "down" | "stable";
}

export default function CouplesDemo() {
  const [activeTab, setActiveTab] = useState<CouplesTabType>("dashboard");
  const [newGroceryItem, setNewGroceryItem] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Couples-focused sample data
  const vibeData: VibeData = {
    overall: 92,
    communication: 88,
    chores: 95,
    quality_time: 85,
    trend: "up",
  };

  const groceryItems: GroceryItem[] = [
    {
      id: "1",
      name: "Fresh Flowers",
      price: 12.99,
      category: "Special",
      addedBy: "Alex",
      purchased: false,
      pickupBy: "Jordan",
    },
    {
      id: "2",
      name: "Wine for Date Night",
      price: 24.99,
      category: "Beverages",
      addedBy: "Jordan",
      purchased: true,
      pickupBy: "Jordan",
    },
    {
      id: "3",
      name: "Cooking Ingredients",
      price: 18.5,
      category: "Groceries",
      addedBy: "Alex",
      purchased: false,
      pickupBy: "Alex",
    },
    {
      id: "4",
      name: "Household Supplies",
      price: 15.99,
      category: "Cleaning",
      addedBy: "Jordan",
      purchased: false,
    },
  ];

  const messages: Message[] = [
    {
      id: "1",
      sender: "Jordan",
      content:
        "I love our new routine! The morning coffee together has been really nice 💕",
      timestamp: "This morning",
      isAnonymous: false,
      aiFiltered: false,
    },
    {
      id: "2",
      sender: "AI Suggestion",
      content:
        "Both partners noted some stress this week. Consider planning something relaxing together this weekend?",
      timestamp: "Yesterday",
      isAnonymous: true,
      aiFiltered: true,
      originalTone: "analytical",
      filteredTone: "supportive",
    },
    {
      id: "3",
      sender: "Alex",
      content:
        "Could we maybe talk about splitting the dishes differently? I'm happy to take on more cooking if you handle cleanup?",
      timestamp: "2 days ago",
      isAnonymous: false,
      aiFiltered: true,
      originalTone: "direct",
      filteredTone: "collaborative",
    },
  ];

  const chorePreferences = [
    {
      id: "1",
      task: "Cooking",
      alex_preference: "loves",
      jordan_preference: "neutral",
      current_split: "Alex: 70%, Jordan: 30%",
    },
    {
      id: "2",
      task: "Cleaning Dishes",
      alex_preference: "dislikes",
      jordan_preference: "neutral",
      current_split: "Alex: 20%, Jordan: 80%",
    },
    {
      id: "3",
      task: "Laundry",
      alex_preference: "neutral",
      jordan_preference: "likes",
      current_split: "Alex: 40%, Jordan: 60%",
    },
  ];

  const weeklyPrompts = [
    "What made you feel most supported this week?",
    "Is there anything you'd like more help with?",
    "What's one thing we could do together this weekend?",
    "How are you feeling about our home environment lately?",
  ];

  // Update time every minute
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

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-6 p-4">
            {/* Weekly Vibe Check */}
            <Card className="bg-gradient-to-br from-pink-50 to-rose-100 border-pink-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">
                    How's Everything Feeling?
                  </h3>
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        vibeData.trend === "up"
                          ? "bg-green-500"
                          : vibeData.trend === "down"
                            ? "bg-red-500"
                            : "bg-yellow-500"
                      }`}
                    ></div>
                    <span className="text-sm font-semibold text-gray-700">
                      {vibeData.overall}%
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <div className="text-blue-600 font-medium">
                        {vibeData.communication}%
                      </div>
                      <div className="text-gray-500">Communication</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-600 font-medium">
                        {vibeData.chores}%
                      </div>
                      <div className="text-gray-500">Home Balance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-600 font-medium">
                        {vibeData.quality_time}%
                      </div>
                      <div className="text-gray-500">Quality Time</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Suggestions */}
            <Card className="border-purple-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">This Week's Nudge</h3>
                  <Heart className="w-4 h-4 text-purple-600" />
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm text-purple-800 font-medium">
                    🌟 Plan something fun this weekend?
                  </p>
                  <p className="text-xs text-purple-600 mt-1">
                    You both mentioned wanting more quality time together.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Shared Tasks Overview */}
            <Card className="border-green-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">Shared Tasks</h3>
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
                    <span className="text-sm">Grocery shopping</span>
                    <span className="text-xs text-green-600 font-medium">
                      Jordan's turn
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                    <span className="text-sm">Date night planning</span>
                    <span className="text-xs text-blue-600 font-medium">
                      Alex's turn
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-yellow-50 rounded-lg">
                    <span className="text-sm">Kitchen deep clean</span>
                    <span className="text-xs text-yellow-600 font-medium">
                      Together
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Check-in Prompt */}
            <Card className="border-indigo-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">Weekly Check-in</h3>
                  <Calendar className="w-4 h-4 text-indigo-600" />
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-sm text-indigo-800 font-medium mb-2">
                    "{weeklyPrompts[0]}"
                  </p>
                  <Button
                    size="sm"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white"
                  >
                    Answer Together
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "grocery":
        return (
          <div className="space-y-6 p-4">
            {/* Budget Overview */}
            <Card className="bg-gradient-to-br from-emerald-50 to-green-100 border-emerald-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">Shared Budget</h3>
                  <DollarSign className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">This month</span>
                    <span className="font-semibold text-gray-900">$156.99</span>
                  </div>
                  <Progress value={52} className="h-2" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>$156.99 of $300.00</span>
                    <span>48% remaining</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Add New Item */}
            <Card className="border-blue-200">
              <CardContent className="p-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Add to our list..."
                    value={newGroceryItem}
                    onChange={(e) => setNewGroceryItem(e.target.value)}
                    className="flex-1 h-10"
                    onKeyPress={(e) =>
                      e.key === "Enter" && handleAddGroceryItem()
                    }
                  />
                  <Button
                    size="sm"
                    onClick={handleAddGroceryItem}
                    className="bg-pink-600 hover:bg-pink-700"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Collaborative Grocery List */}
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <h3 className="font-bold text-gray-900 mb-3">
                  Our Grocery List
                </h3>
                <div className="space-y-2">
                  {groceryItems.map((item) => (
                    <div
                      key={item.id}
                      className={`flex items-center justify-between p-3 rounded-lg border ${
                        item.purchased
                          ? "bg-gray-50 border-gray-200 opacity-60"
                          : "bg-white border-gray-200"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center cursor-pointer ${
                            item.purchased
                              ? "bg-green-500 border-green-500"
                              : "border-gray-300 hover:border-green-400"
                          }`}
                        >
                          {item.purchased && (
                            <Check className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <div>
                          <div
                            className={`text-sm font-medium ${
                              item.purchased
                                ? "line-through text-gray-500"
                                : "text-gray-900"
                            }`}
                          >
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            Added by {item.addedBy}
                            {item.pickupBy && ` • ${item.pickupBy} picking up`}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`text-sm font-semibold ${
                            item.purchased ? "text-gray-500" : "text-gray-900"
                          }`}
                        >
                          ${item.price.toFixed(2)}
                        </div>
                        {!item.pickupBy && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-xs mt-1 h-6"
                          >
                            I'll get it
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-600">
                      Total (unpurchased)
                    </span>
                    <span className="text-lg font-bold text-gray-900">
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

      case "feedback":
        return (
          <div className="space-y-6 p-4">
            {/* Private Concerns Input */}
            <Card className="border-pink-200">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-pink-600" />
                    <h3 className="font-bold text-gray-900">
                      Private Thoughts
                    </h3>
                  </div>
                  <p className="text-xs text-gray-600">
                    Share concerns privately with our AI. We'll help you find
                    the right way to discuss things together.
                  </p>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <Input
                        placeholder="What's on your mind?"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="h-10"
                        onKeyPress={(e) =>
                          e.key === "Enter" && handleSendMessage()
                        }
                      />
                      <div className="flex items-center gap-4 mt-2">
                        <label className="flex items-center gap-2 text-xs text-gray-600">
                          <input
                            type="checkbox"
                            className="rounded"
                            defaultChecked
                          />
                          Keep private until I'm ready
                        </label>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      onClick={handleSendMessage}
                      className="bg-pink-600 hover:bg-pink-700 self-start"
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
                    <div className="text-xs text-pink-600 flex items-center gap-2">
                      <div className="animate-pulse w-2 h-2 bg-pink-600 rounded-full"></div>
                      AI is analyzing and preparing gentle conversation
                      suggestions...
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* AI Conversation Starters */}
            <Card className="border-blue-200">
              <CardContent className="p-4">
                <h3 className="font-bold text-gray-900 mb-3">
                  Conversation Starters
                </h3>
                <div className="space-y-2">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800 font-medium">
                      "I've been thinking about how we split household tasks..."
                    </p>
                    <p className="text-xs text-blue-600 mt-1">
                      Based on your recent check-ins about chore balance
                    </p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm text-purple-800 font-medium">
                      "What would make our evenings together even better?"
                    </p>
                    <p className="text-xs text-purple-600 mt-1">
                      You both mentioned wanting more quality time
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Insights */}
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <h3 className="font-bold text-gray-900 mb-3">
                  Recent Insights
                </h3>
                <div className="space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className="p-3 rounded-lg bg-gray-50 border border-gray-200"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            {message.sender === "AI Suggestion"
                              ? "AI"
                              : message.sender[0]}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {message.sender}
                            </div>
                            <div className="text-xs text-gray-500">
                              {message.timestamp}
                            </div>
                          </div>
                        </div>
                        {message.aiFiltered && (
                          <Badge
                            variant="secondary"
                            className="text-xs bg-green-50 text-green-700"
                          >
                            AI Enhanced
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {message.content}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "settings":
        return (
          <div className="space-y-6 p-4">
            {/* Chore Preferences */}
            <Card className="border-indigo-200">
              <CardContent className="p-4">
                <h3 className="font-bold text-gray-900 mb-3">
                  Task Preferences
                </h3>
                <div className="space-y-3">
                  {chorePreferences.map((pref) => (
                    <div key={pref.id} className="p-3 bg-indigo-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">
                          {pref.task}
                        </span>
                        <span className="text-xs text-indigo-600">
                          {pref.current_split}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-gray-600">Alex: </span>
                          <span
                            className={`font-medium ${
                              pref.alex_preference === "loves"
                                ? "text-green-600"
                                : pref.alex_preference === "dislikes"
                                  ? "text-red-600"
                                  : "text-gray-600"
                            }`}
                          >
                            {pref.alex_preference}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600">Jordan: </span>
                          <span
                            className={`font-medium ${
                              pref.jordan_preference === "likes"
                                ? "text-green-600"
                                : pref.jordan_preference === "dislikes"
                                  ? "text-red-600"
                                  : "text-gray-600"
                            }`}
                          >
                            {pref.jordan_preference}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Living Style Settings */}
            <Card className="border-green-200">
              <CardContent className="p-4">
                <h3 className="font-bold text-gray-900 mb-3">
                  "I feel most relaxed when..."
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">
                      Alex
                    </label>
                    <div className="p-3 bg-green-50 rounded-lg text-sm text-gray-700">
                      "The kitchen is clean and there's music playing softly"
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">
                      Jordan
                    </label>
                    <div className="p-3 bg-green-50 rounded-lg text-sm text-gray-700">
                      "We have our evening routine and some quiet time together"
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Communication Settings */}
            <Card className="border-purple-200">
              <CardContent className="p-4">
                <h3 className="font-bold text-gray-900 mb-3">
                  Communication Style
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      Gentle conversation prompts
                    </span>
                    <div className="w-10 h-6 bg-green-500 rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      Weekly relationship check-ins
                    </span>
                    <div className="w-10 h-6 bg-green-500 rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      AI insight notifications
                    </span>
                    <div className="w-10 h-6 bg-gray-300 rounded-full relative">
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
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
    <div
      className="relative mx-auto"
      style={{ width: "375px", height: "812px" }}
    >
      {/* iPhone Frame */}
      <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-2 shadow-2xl transition-all duration-300 hover:shadow-3xl">
        {/* Screen */}
        <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative z-10">
          {/* Dynamic Island */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full z-50"></div>

          {/* Status Bar */}
          <div className="flex items-center justify-between px-6 pt-4 pb-2 bg-white relative z-40">
            <div className="text-sm font-semibold text-black">
              {currentTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
            <div className="flex items-center gap-1">
              <Signal className="w-4 h-4 text-black" />
              <Wifi className="w-4 h-4 text-black" />
              <Battery className="w-4 h-4 text-black" />
            </div>
          </div>

          {/* App Header */}
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h1 className="font-bold text-lg">CoHabitly</h1>
                <p className="text-pink-100 text-sm">Couples Mode</p>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div
            className="flex-1 bg-gray-50 overflow-y-auto"
            style={{ height: "calc(100% - 180px)" }}
          >
            {renderTabContent()}
          </div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 pb-6">
            <div className="flex justify-around">
              {[
                { id: "dashboard", icon: Home, label: "Home" },
                { id: "grocery", icon: ShoppingCart, label: "Our List" },
                { id: "feedback", icon: MessageCircle, label: "Private" },
                { id: "settings", icon: Settings, label: "Preferences" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as CouplesTabType)}
                  className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-pink-100 text-pink-600"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
