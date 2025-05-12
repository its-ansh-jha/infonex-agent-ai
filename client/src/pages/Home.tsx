import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import ChatView from "@/components/ChatView";
import Header from "@/components/Header";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Home() {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : "lg:ml-0"}`}>
        <Header toggleSidebar={toggleSidebar} title="Chat" />
        <ChatView />
      </div>
    </div>
  );
}
