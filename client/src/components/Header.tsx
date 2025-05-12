import { Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  toggleSidebar: () => void;
  title: string;
}

export default function Header({ toggleSidebar, title }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="lg:hidden mr-3 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
