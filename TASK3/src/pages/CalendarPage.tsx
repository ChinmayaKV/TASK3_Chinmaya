import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Sidebar } from "@/components/Sidebar";
import { QuickActions } from "@/components/QuickActions";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const upcomingDates = [
  { date: "18", day: "Wed", month: "Sep" },
  { date: "18", day: "Wed", month: "Sep" },
  { date: "19", day: "Thu", month: "Sep" },
  { date: "20", day: "Fri", month: "Sep" },
  { date: "20", day: "Fri", month: "Sep" },
];

const events = [
  "National concussion Awareness day",
  "National concussion Awareness day",
  "National concussion Awareness day",
];

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date(2021, 8, 19));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold">Good Morning Chinmaya</h1>
          </div>

          <div className="mb-6">
            <QuickActions />
          </div>

          <div className="flex gap-6">
            <div className="bg-card/50 rounded-lg p-6 border border-border/50">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md"
              />
            </div>

            <div className="flex-1 bg-card/50 rounded-lg p-6 border border-border/50">
              <div className="flex gap-3 mb-6 overflow-x-auto">
                {upcomingDates.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center px-5 py-3 rounded-lg min-w-[90px] ${
                      index === 2 ? "bg-card border-2 border-border" : "bg-card border border-border"
                    }`}
                  >
                    <span className="text-xs mb-1">{item.month}</span>
                    <span className="text-2xl font-bold mb-1">{item.date}</span>
                    <span className="text-xs">{item.day}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="bg-[#9b8674] text-foreground px-4 py-3 rounded-md"
                  >
                    {event}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
