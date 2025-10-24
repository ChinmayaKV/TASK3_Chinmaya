import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AssignmentCardProps {
  subject: string;
  title: string;
  dueDate?: string;
}

export const AssignmentCard = ({ subject, title, dueDate }: AssignmentCardProps) => {
  return (
    <Card className="p-6 bg-[hsl(250,60%,30%)] border-[hsl(250,50%,40%)] hover:border-primary transition-colors">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">{subject}</h3>
        <p className="text-sm text-gray-300">{title}</p>
        {dueDate && (
          <p className="text-xs text-gray-400">Due: {dueDate}</p>
        )}
        <Button 
          variant="default" 
          className="w-full mt-4 bg-black hover:bg-black/80 text-white"
        >
          Read
        </Button>
      </div>
    </Card>
  );
};
