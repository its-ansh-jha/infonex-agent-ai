import { useState, FormEvent } from "react";
import { Send, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

export default function ChatView() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm InfoAgentAI. How can I help you today?",
      sender: "ai",
    },
    {
      id: 2,
      text: "Can you tell me more about what you can do?",
      sender: "user",
    },
    {
      id: 3,
      text: "Of course! I can help you with a wide range of tasks:\n\n• Answer questions and provide information\n• Help with coding and programming\n• Assist with writing and content creation\n• Explain complex concepts\n• Generate creative ideas\n\nFeel free to ask me anything specific!",
      sender: "ai",
    },
  ]);
  
  const [input, setInput] = useState("");
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      // Add user message
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: input,
          sender: "user",
        },
      ]);
      
      // Simulate AI response (in a real app, this would be an API call)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            text: "I'm processing your request. In a real implementation, this would be a response from the InfoAgentAI API.",
            sender: "ai",
          },
        ]);
      }, 1000);
      
      setInput("");
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <div className="flex flex-col space-y-6">
        {/* Welcome card - shown only when no messages */}
        {messages.length === 0 && (
          <Card className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold mb-4">Welcome to InfoAgentAI</h1>
            <p className="text-gray-600 mb-6">Your intelligent assistant for information and more.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
              <div className="bg-gray-50 p-4 rounded-lg">
                <Search className="h-6 w-6 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Ask anything</h3>
                <p className="text-sm text-gray-600">Get detailed answers on any topic</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Code className="h-6 w-6 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Code assistance</h3>
                <p className="text-sm text-gray-600">Help with programming problems</p>
              </div>
            </div>
          </Card>
        )}

        {/* Chat Messages */}
        <div className="space-y-6">
          {messages.map((message) => (
            <div 
              key={message.id}
              className={`flex items-start space-x-3 ${
                message.sender === "user" ? "justify-end" : ""
              }`}
            >
              {message.sender === "ai" && (
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
                  <Bot className="h-4 w-4" />
                </div>
              )}
              
              <div 
                className={`p-4 rounded-lg shadow-sm ${
                  message.sender === "user" 
                    ? "bg-primary-light max-w-[80%]" 
                    : "bg-white flex-1"
                }`}
              >
                <p className="whitespace-pre-line">{message.text}</p>
              </div>
              
              {message.sender === "user" && (
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 flex-shrink-0">
                  <User className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="sticky bottom-4 bg-white rounded-xl shadow-md p-3 mt-auto">
          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
            <Button 
              type="submit" 
              className="bg-primary text-white p-3 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

// These are missing from import so defining them here
function Search(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function Code(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
