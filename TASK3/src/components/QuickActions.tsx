import { Link } from "react-router-dom";

interface QuickActionProps {
  label: string;
  to?: string;
  onClick?: () => void;
}

const QuickActionButton = ({ label, to, onClick }: QuickActionProps) => {
  const button = (
    <button 
      onClick={onClick}
      className="px-6 py-3 rounded border-2 border-primary text-foreground hover:bg-primary/10 transition-colors whitespace-nowrap flex-shrink-0"
    >
      {label}
    </button>
  );

  return to ? <Link to={to}>{button}</Link> : button;
};

interface QuickActionsProps {}

export const QuickActions = ({}: QuickActionsProps = {}) => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide scroll-smooth snap-x snap-mandatory">
      <QuickActionButton label="View Time Table" to="/timetable" />
      <QuickActionButton label="Fees Payment" />
      <QuickActionButton label="View Courses" />
      <QuickActionButton label="Announcements" to="/announcements" />
      <QuickActionButton label="Assignments" to="/assignments" />
      <QuickActionButton label="Calendar" to="/calendar" />
    </div>
  );
};
