import { Bell, Search, User } from "lucide-react";
import { Input } from "./ui/input";

export const Header = () => {
  return (
    <header className="bg-card border-b border-border px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="text-sm text-muted-foreground">
            <span className="mr-4">NITK Surathkal</span>
            <span>About IRIS</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="relative flex items-center gap-2">
            <Search className="text-muted-foreground" size={20} />
            <Input 
              placeholder="Search For" 
              className="w-64 bg-secondary border-border"
            />
          </div>
          <Bell className="text-primary cursor-pointer" size={24} />
          <User className="text-muted-foreground cursor-pointer" size={24} />
        </div>
      </div>
    </header>
  );
};
