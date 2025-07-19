import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  ShoppingCart,
  Users,
  MessageCircle,
  Plus,
  Check,
  X,
  Star,
  Heart,
  Calendar,
  DollarSign,
  Send,
  Smile,
  ChevronRight,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  Settings,
  Camera,
  Music,
  Wifi,
  Battery,
  Signal,
  Sparkles,
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
}

interface GroceryItem {
  id: string;
  name: string;
  price: number;
  category: string;
  addedBy: string;
  purchased: boolean;
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
  cleanliness: number;
  noise: number;
  communication: number;
  trend: "up" | "down" | "stable";
}

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState<TabType>("dashboard");
  const [newGroceryItem, setNewGroceryItem] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Sample data
  const vibeData: VibeData = {
    overall: 87,
    cleanliness: 92,
    noise: 78,
    communication: 91,
    trend: "up",
  };

  const roommates: RoommateProfile[] = [
    {
      id: "1",
      name: "Sarah Chen",
      avatar: "SC",
      compatibility: 94,
      status: "online",
      preferences: ["Quiet mornings", "Clean kitchen", "Study music"],
      communicationStyle: "gentle",
    },
    {
      id: "2",
      name: "Marcus Rivera",
      avatar: "MR",
      compatibility: 89,
      status: "away",
      preferences: ["Early workouts", "Shared meals", "Gaming nights"],
      communicationStyle: "direct",
    },
    {
      id: "3",
      name: "Alex Kim",
      avatar: "AK",
      compatibility: 76,
      status: "offline",
      preferences: ["Late sleeper", "Minimalist", "Introvert-friendly"],
      communicationStyle: "formal",
    },
  ];

  const groceryItems: GroceryItem[] = [
    {
      id: "1",
      name: "Organic Milk",
      price: 4.99,
      category: "Dairy",
      addedBy: "Sarah",
      purchased: false,
    },
    {
      id: "2",
      name: "Sourdough Bread",
      price: 5.49,
      category: "Bakery",
      addedBy: "Marcus",
      purchased: true,
    },
    {
      id: "3",
      name: "Avocados (6 pack)",
      price: 7.99,
      category: "Produce",
      addedBy: "You",
      purchased: false,
    },
    {
      id: "4",
      name: "Cleaning Supplies",
      price: 12.99,
      category: "Household",
      addedBy: "Alex",
      purchased: false,
    },
    {
      id: "5",
      name: "Coffee Beans",
      price: 14.99,
      category: "Beverages",
      addedBy: "Sarah",
      purchased: false,
    },
  ];

  const messages: Message[] = [
    {
      id: "1",
      sender: "Sarah",
      content:
        "Hey everyone! Just wanted to check if we're still good for the study group tonight? 📚",
      timestamp: "2:30 PM",
      isAnonymous: false,
      aiFiltered: false,
    },
    {
      id: "2",
      sender: "Anonymous",
      content:
        "Could we please keep the music volume down after 10 PM? Some of us have early classes. Thanks for understanding! 😊",
      timestamp: "Yesterday",
      isAnonymous: true,
      aiFiltered: true,
      originalTone: "frustrated",
      filteredTone: "polite",
    },
    {
      id: "3",
      sender: "Marcus",
      content:
        "Pizza party this Friday! I'll grab some from Tony's. Who's in? 🍕",
      timestamp: "Yesterday",
      isAnonymous: false,
      aiFiltered: false,
    },
  ];

  const upcomingEvents = [
    {
      id: "1",
      title: "Study Group",
      time: "7:00 PM",
      attendees: ["Sarah", "You"],
      type: "study",
    },
    {
      id: "2",
      title: "Apartment Cleaning",
      time: "Saturday 10 AM",
      attendees: ["Everyone"],
      type: "chore",
    },
    {
      id: "3",
      title: "Game Night",
      time: "Friday 8 PM",
      attendees: ["Marcus", "Alex", "You"],
      type: "social",
    },
  ];

  const choreAssignments = [
    {
      id: "1",
      task: "Kitchen Deep Clean",
      assignee: "Sarah",
      dueDate: "Today",
      status: "completed",
    },
    {
      id: "2",
      task: "Bathroom Cleaning",
      assignee: "You",
      dueDate: "Tomorrow",
      status: "pending",
    },
    {
      id: "3",
      task: "Vacuum Living Room",
      assignee: "Marcus",
      dueDate: "Friday",
      status: "overdue",
    },
    {
      id: "4",
      task: "Take Out Trash",
      assignee: "Alex",
      dueDate: "Sunday",
      status: "pending",
    },
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
      // Simulate adding item
      setNewGroceryItem("");
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setIsTyping(true);
      // Simulate AI processing
      setTimeout(() => {
        setIsTyping(false);
        setNewMessage("");
      }, 2000);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "away":
        return "bg-yellow-500";
      case "offline":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  const getChoreStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-50";
      case "pending":
        return "text-blue-600 bg-blue-50";
      case "overdue":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-6 p-4">
            {/* Vibe Check Card */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">Weekly Vibe Check</h3>
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
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Overall Harmony</span>
                    <span className="font-medium">{vibeData.overall}%</span>
                  </div>
                  <Progress value={vibeData.overall} className="h-2" />
                  <div className="grid grid-cols-3 gap-2 text-xs mt-3">
                    <div className="text-center">
                      <div className="text-green-600 font-medium">
                        {vibeData.cleanliness}%
                      </div>
                      <div className="text-gray-500">Cleanliness</div>
                    </div>
                    <div className="text-center">
                      <div className="text-yellow-600 font-medium">
                        {vibeData.noise}%
                      </div>
                      <div className="text-gray-500">Noise Level</div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-600 font-medium">
                        {vibeData.communication}%
                      </div>
                      <div className="text-gray-500">Communication</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chore Tracker */}
            <Card className="border-purple-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">Chore Tracker</h3>
                  <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-2">
                  {choreAssignments.slice(0, 3).map((chore) => (
                    <div
                      key={chore.id}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded border-2 flex items-center justify-center ${
                            chore.status === "completed"
                              ? "bg-green-500 border-green-500"
                              : "border-gray-300"
                          }`}
                        >
                          {chore.status === "completed" && (
                            <Check className="w-2 h-2 text-white" />
                          )}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {chore.task}
                          </div>
                          <div className="text-xs text-gray-500">
                            {chore.assignee} • {chore.dueDate}
                          </div>
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className={`text-xs ${getChoreStatusColor(
                          chore.status,
                        )}`}
                      >
                        {chore.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="border-green-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">Upcoming Events</h3>
                  <Calendar className="w-4 h-4 text-green-600" />
                </div>
                <div className="space-y-2">
                  {upcomingEvents.map((event) => (
                    <div
                      key={event.id}
                      className="flex items-center justify-between p-2 bg-green-50 rounded-lg"
                    >
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {event.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {event.time} • {event.attendees.join(", ")}
                        </div>
                      </div>
                      <div
                        className={`w-2 h-2 rounded-full ${
                          event.type === "study"
                            ? "bg-blue-500"
                            : event.type === "chore"
                              ? "bg-orange-500"
                              : "bg-purple-500"
                        }`}
                      ></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "grocery":
        return (
          <div className="space-y-6 p-4">
            {/* Budget Overview */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-green-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">Monthly Budget</h3>
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">
                      Spent this month
                    </span>
                    <span className="font-semibold text-gray-900">$127.45</span>
                  </div>
                  <Progress value={42} className="h-2" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>$127.45 of $300.00</span>
                    <span>58% remaining</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Add New Item */}
            <Card className="border-blue-200">
              <CardContent className="p-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Add grocery item..."
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
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Grocery List */}
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <h3 className="font-bold text-gray-900 mb-3">
                  Shared Grocery List
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
                            Added by {item.addedBy} • {item.category}
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

      case "roommates":
        return (
          <div className="space-y-6 p-4">
            {/* Roommate Profiles */}
            {roommates.map((roommate) => (
              <Card
                key={roommate.id}
                className="border-gray-200 hover:shadow-md transition-shadow"
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {roommate.avatar}
                      </div>
                      <div
                        className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${getStatusColor(
                          roommate.status,
                        )}`}
                      ></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-gray-900">
                          {roommate.name}
                        </h3>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4 text-pink-500" />
                          <span className="text-sm font-semibold text-gray-700">
                            {roommate.compatibility}%
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge
                          variant="secondary"
                          className={`text-xs ${
                            roommate.status === "online"
                              ? "bg-green-50 text-green-700"
                              : roommate.status === "away"
                                ? "bg-yellow-50 text-yellow-700"
                                : "bg-gray-50 text-gray-700"
                          }`}
                        >
                          {roommate.status}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="text-xs text-purple-700 border-purple-200"
                        >
                          {roommate.communicationStyle} communicator
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-gray-500 font-medium">
                          Preferences:
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {roommate.preferences.map((pref, index) => (
                            <span
                              key={index}
                              className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                            >
                              {pref}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 text-xs"
                        >
                          <MessageCircle className="w-3 h-3 mr-1" />
                          Message
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 text-xs"
                        >
                          <Settings className="w-3 h-3 mr-1" />
                          Settings
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Communication Preferences */}
            <Card className="border-indigo-200">
              <CardContent className="p-4">
                <h3 className="font-bold text-gray-900 mb-3">
                  Your Communication Preferences
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      Anonymous feedback
                    </span>
                    <div className="w-10 h-6 bg-green-500 rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      AI tone filtering
                    </span>
                    <div className="w-10 h-6 bg-green-500 rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      Conflict resolution alerts
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

      case "feedback":
        return (
          <div className="space-y-6 p-4">
            {/* Message Input */}
            <Card className="border-blue-200">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-gray-900">Send Feedback</h3>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <Input
                        placeholder="Type your message..."
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
                          Send anonymously
                        </label>
                        <label className="flex items-center gap-2 text-xs text-gray-600">
                          <input
                            type="checkbox"
                            className="rounded"
                            defaultChecked
                          />
                          AI tone filter
                        </label>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      onClick={handleSendMessage}
                      className="bg-blue-600 hover:bg-blue-700 self-start"
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
                    <div className="text-xs text-blue-600 flex items-center gap-2">
                      <div className="animate-pulse w-2 h-2 bg-blue-600 rounded-full"></div>
                      AI is optimizing your message tone...
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Message History */}
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <h3 className="font-bold text-gray-900 mb-3">
                  Recent Messages
                </h3>
                <div className="space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className="p-3 rounded-lg bg-gray-50 border border-gray-200"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            {message.isAnonymous ? "?" : message.sender[0]}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {message.isAnonymous
                                ? "Anonymous"
                                : message.sender}
                            </div>
                            <div className="text-xs text-gray-500">
                              {message.timestamp}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {message.isAnonymous && (
                            <Badge
                              variant="secondary"
                              className="text-xs bg-purple-50 text-purple-700"
                            >
                              Anonymous
                            </Badge>
                          )}
                          {message.aiFiltered && (
                            <Badge
                              variant="secondary"
                              className="text-xs bg-green-50 text-green-700"
                            >
                              AI Filtered
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {message.content}
                      </p>
                      {message.aiFiltered && (
                        <div className="mt-2 text-xs text-gray-500 bg-white p-2 rounded border">
                          <div className="flex items-center gap-1 mb-1">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            <span className="font-medium">
                              Tone adjusted: {message.originalTone} →{" "}
                              {message.filteredTone}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-orange-200">
              <CardContent className="p-4">
                <h3 className="font-bold text-gray-900 mb-3">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-12 text-xs border-orange-200 text-orange-700 hover:bg-orange-50"
                  >
                    <AlertCircle className="w-4 h-4 mb-1" />
                    Report Issue
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-12 text-xs border-green-200 text-green-700 hover:bg-green-50"
                  >
                    <Heart className="w-4 h-4 mb-1" />
                    Send Appreciation
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-12 text-xs border-blue-200 text-blue-700 hover:bg-blue-50"
                  >
                    <Calendar className="w-4 h-4 mb-1" />
                    Schedule Chat
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-12 text-xs border-purple-200 text-purple-700 hover:bg-purple-50"
                  >
                    <Star className="w-4 h-4 mb-1" />
                    Give Feedback
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
    <div
      className="relative mx-auto group"
      style={{ width: "375px", height: "812px" }}
    >
      {/* iPhone Frame */}
      <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-2 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02]">
        {/* Subtle glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-[3.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        {/* Screen */}
        <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative z-10">
          {/* Screen shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
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
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <h1 className="font-bold text-lg">CoHabitly</h1>
                <p className="text-blue-100 text-sm">Interactive Demo</p>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div
            className="flex-1 bg-gray-50 overflow-y-auto transition-all duration-300"
            style={{ height: "calc(100% - 180px)" }}
          >
            <div className="transform transition-all duration-300 group-hover:scale-[0.98]">
              {renderTabContent()}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 pb-6">
            <div className="flex justify-around">
              {[
                { id: "dashboard", icon: Home, label: "Dashboard" },
                { id: "grocery", icon: ShoppingCart, label: "Grocery" },
                { id: "roommates", icon: Users, label: "Roommates" },
                { id: "feedback", icon: MessageCircle, label: "Feedback" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                    activeTab === tab.id
                      ? "bg-blue-100 text-blue-600 scale-105 shadow-md"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-100 hover:shadow-sm"
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
