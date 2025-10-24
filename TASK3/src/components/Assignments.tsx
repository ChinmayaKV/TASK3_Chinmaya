import { AssignmentCard } from "./AssignmentCard";
import { X } from "lucide-react";

interface AssignmentsProps {
  onClose?: () => void;
}

export const Assignments = ({ onClose }: AssignmentsProps) => {
  const assignments = [
    {
      subject: "Chemistry",
      title: "1.Essay on blast Furnance",
      dueDate: "25th Oct 2025"
    },
    {
      subject: "Chemistry",
      title: "1.Essay on blast Furnance",
      dueDate: "26th Oct 2025"
    },
    {
      subject: "Chemistry",
      title: "1.Essay on blast Furnance",
      dueDate: "27th Oct 2025"
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold">Assignments</h2>
          <button className="text-sm px-4 py-2 bg-card rounded hover:bg-secondary transition-colors">
            Sort ▼
          </button>
        </div>
        {onClose && (
          <button onClick={onClose} className="p-2 hover:bg-secondary rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assignments.map((assignment, index) => (
          <AssignmentCard
            key={index}
            subject={assignment.subject}
            title={assignment.title}
            dueDate={assignment.dueDate}
          />
        ))}
      </div>
    </div>
  );
};
