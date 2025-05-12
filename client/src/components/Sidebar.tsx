import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  Plus, 
  X, 
  Settings,
  MessageSquare 
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Sample chat history for display
const recentChats = [
  { id: 1, title: "Chat with AI about JavaScript" },
  { id: 2, title: "Python code explanation" },
  { id: 3, title: "Help with React components" },
];

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const [, navigate] = useLocation();
  
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 z-40"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="p-4 flex items-center justify-between border-b border-gray-200">
            <h1 className="text-xl font-semibold text-primary">InfoAgentAI</h1>
            <button 
              onClick={toggleSidebar}
              className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* New Chat button with hamburger menu */}
          <div className="p-4">
            <div className="flex gap-2">
              <Button 
                onClick={() => navigate("/")}
                className="flex-1 flex items-center justify-center gap-2"
              >
                <Plus className="h-4 w-4" />
                <span>New Chat</span>
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => navigate("/privacy-policy")}>
                    Privacy Policy
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/terms-conditions")}>
                    Terms & Conditions
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          {/* Recent chats */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {recentChats.map((chat) => (
              <div 
                key={chat.id}
                className="p-2 rounded-lg hover:bg-primary-light cursor-pointer flex items-center gap-2 text-sm font-medium"
                onClick={() => navigate("/")}
              >
                <MessageSquare className="h-4 w-4" />
                <span>{chat.title}</span>
              </div>
            ))}
          </div>
          
          {/* Settings */}
          <div className="mt-auto p-4 border-t border-gray-200">
            <Button 
              variant="ghost" 
              className="flex items-center space-x-2 rounded-lg p-2 w-full hover:bg-gray-100 transition-colors duration-200"
            >
              <Settings className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium">Settings</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
