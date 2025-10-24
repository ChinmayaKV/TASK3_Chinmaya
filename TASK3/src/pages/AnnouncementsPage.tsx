import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Sidebar } from "@/components/Sidebar";
import { QuickActions } from "@/components/QuickActions";
import { Announcements } from "@/components/Announcements";

export default function AnnouncementsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2">Good Morning Chinmaya</h1>
          </div>

          <div className="mb-8">
            <QuickActions />
          </div>

          <Announcements />
        </main>
      </div>
    </div>
  );
}
