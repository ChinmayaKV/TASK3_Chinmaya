import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Sidebar } from "@/components/Sidebar";
import { QuickActions } from "@/components/QuickActions";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const timeSlots = ["8:00-9:00", "9:00-10:00", "10:00-11:00", "11:00-12:00", "12:00-1:00", "1:00-2:00"];

export default function TimeTable() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2">Good Morning Chinmaya</h1>
            <p className="text-muted-foreground">You have 6 classes to attend today</p>
          </div>

          <div className="mb-8">
            <QuickActions />
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-xl font-semibold mb-6 text-center">Time Table</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left p-2"></th>
                    {timeSlots.map((slot) => (
                      <th key={slot} className="text-center p-2 text-sm text-muted-foreground">
                        {slot}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {days.map((day, dayIndex) => (
                    <tr key={day}>
                      <td className="p-2">
                        <div 
                          className="px-4 py-2 rounded font-medium text-center"
                          style={{
                            backgroundColor: dayIndex === 2 ? "hsl(var(--accent))" : "hsl(var(--accent) / 0.7)",
                            color: dayIndex === 2 ? "hsl(var(--accent-foreground))" : "hsl(var(--foreground))"
                          }}
                        >
                          {day}
                        </div>
                      </td>
                      {timeSlots.map((_, slotIndex) => (
                        <td key={slotIndex} className="p-2">
                          <div className="bg-secondary h-12 rounded"></div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
