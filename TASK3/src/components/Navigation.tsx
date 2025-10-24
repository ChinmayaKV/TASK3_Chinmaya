import { Link } from "react-router-dom";
import { BookOpen, Building2, GraduationCap } from "lucide-react";
import instituteLogo from "@/assets/institute-logo.png";

export const Navigation = () => {
  return (
    <nav className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center gap-6">
        <Link to="/" className="text-2xl font-bold bg-primary text-primary-foreground px-6 py-2 rounded">
          IRIS
        </Link>
        <button className="flex items-center gap-2 px-4 py-2 rounded hover:bg-secondary transition-colors">
          <BookOpen className="w-5 h-5 text-foreground" />
          <span>Academics</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded hover:bg-secondary transition-colors">
          <img src={instituteLogo} alt="Institute" className="w-5 h-5" />
          <span>Institute</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded hover:bg-secondary transition-colors">
          <Building2 className="w-5 h-5 text-foreground" />
          <span>Campus</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded hover:bg-secondary transition-colors">
          <GraduationCap className="w-5 h-5 text-foreground" />
          <span>Alumni</span>
        </button>
      </div>
    </nav>
  );
};
