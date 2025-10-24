import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, X } from "lucide-react";

interface AnnouncementsProps {
  onClose?: () => void;
}

export const Announcements = ({ onClose }: AnnouncementsProps) => {
  const [sortBy, setSortBy] = useState("newest");

  const announcements = [
    {
      id: 1,
      title: "Mid-semester Examination Schedule",
      date: "2025-10-20",
      content: "The mid-semester examinations will be held from November 1st to November 10th. Please check the detailed timetable on the portal.",
    },
    {
      id: 2,
      title: "Workshop on Machine Learning",
      date: "2025-10-19",
      content: "A special workshop on Machine Learning will be conducted on October 25th. Registration is mandatory for all interested students.",
    },
    {
      id: 3,
      title: "Library Timing Extension",
      date: "2025-10-18",
      content: "The library will be open until 10 PM during the examination period. Students can utilize the extended hours for preparation.",
    },
  ];

  return (
    <div className="w-full animate-in slide-in-from-top-4 duration-300">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Announcements</h2>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  Sort
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setSortBy("newest")}>
                  Newest First
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("oldest")}>
                  Oldest First
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {onClose && (
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-4">
          {announcements.map((announcement) => (
            <Card key={announcement.id} className="p-4 hover:bg-accent/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{announcement.title}</h3>
                <span className="text-sm text-muted-foreground">
                  {new Date(announcement.date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-muted-foreground">{announcement.content}</p>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};
