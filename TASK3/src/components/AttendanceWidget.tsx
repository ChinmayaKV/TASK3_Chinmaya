import { MoreVertical } from "lucide-react";

export const AttendanceWidget = () => {
  return (
    <div className="bg-card border border-border rounded-lg p-3 w-[200px] h-[206px] flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xs font-semibold">Attendance</h3>
        <MoreVertical size={12} className="text-muted-foreground" />
      </div>

      <div className="flex items-center justify-center mb-2 flex-1">
        <div className="relative w-24 h-24">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="hsl(var(--secondary))"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="hsl(var(--chart-2))"
              strokeWidth="8"
              fill="none"
              strokeDasharray="251.33"
              strokeDashoffset="62.83"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-chart-2">86%</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mb-2">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-chart-2"></div>
          <span className="text-[10px] text-muted-foreground">Present</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-secondary"></div>
          <span className="text-[10px] text-muted-foreground">Absent</span>
        </div>
      </div>

      <div className="text-center text-[10px] mb-2">
        <span className="text-chart-2 font-semibold">5</span>
        <span className="text-muted-foreground"> leaves</span>
      </div>

      <div className="flex gap-1 justify-center text-[9px]">
        <div className="bg-secondary px-2 py-1 rounded whitespace-nowrap">
          📅 Apr 11
        </div>
        <div className="bg-secondary px-2 py-1 rounded whitespace-nowrap">
          ⏱️ Math
        </div>
      </div>
    </div>
  );
};
