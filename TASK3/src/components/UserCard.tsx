import { GraduationCap, Plus } from "lucide-react";

export const UserCard = () => {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-4 w-[362px] h-[352px] flex flex-col">
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold mb-1">Chinmaya Krishna</h2>
        <p className="text-muted-foreground text-sm">Good morning Chinmaya</p>
      </div>

      <div className="grid grid-cols-2 gap-3 flex-1">
        <div className="bg-secondary rounded-lg p-3 flex flex-col items-center justify-center gap-2 relative">
          <GraduationCap className="text-primary" size={32} />
          <span className="text-xs font-medium">CGPA</span>
          <span className="absolute top-2 right-2 text-primary text-xs">📊</span>
        </div>

        <div className="bg-secondary rounded-lg p-3 flex flex-col items-center justify-center gap-2 relative">
          <GraduationCap className="text-primary" size={32} />
          <span className="text-xs font-medium">Credits</span>
          <span className="absolute top-2 right-2 text-primary text-xs">📊</span>
        </div>

        <div className="bg-secondary rounded-lg p-3 flex flex-col items-center justify-center gap-2 relative">
          <GraduationCap className="text-primary" size={32} />
          <span className="text-xs font-medium">Courses</span>
          <span className="absolute top-2 right-2 text-primary text-xs">📊</span>
        </div>

        <div className="bg-secondary rounded-lg p-3 flex flex-col items-center justify-center gap-2">
          <Plus className="text-primary" size={32} />
          <span className="text-xs font-medium">Add</span>
        </div>
      </div>
    </div>
  );
};
