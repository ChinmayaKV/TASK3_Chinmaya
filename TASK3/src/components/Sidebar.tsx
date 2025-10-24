export const Sidebar = () => {
  return (
    <aside className="w-52 bg-background border-r border-border p-5 space-y-6">
      <div>
        <h3 className="text-primary text-sm font-semibold mb-3">Most searched links</h3>
        <div className="space-y-3">
          <button className="w-full text-center px-4 py-3 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium">
            Mess Change
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button className="text-center px-3 py-3 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-xs font-medium break-words">
          Fees Payment
        </button>
        <button className="text-center px-3 py-3 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-xs font-medium break-words">
          Attendance
        </button>
      </div>

      <div>
        <button className="w-full text-center px-4 py-3 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium">
          Time table
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button className="text-center px-3 py-3 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-xs font-medium break-words">
          Gyan
        </button>
        <button className="text-center px-3 py-3 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-xs font-medium break-words">
          My Courses
        </button>
      </div>

      <div>
        <h3 className="text-primary text-sm font-semibold mb-3">Module Designers</h3>
        <div className="space-y-3">
          <div className="text-center px-4 py-3 rounded-md bg-secondary text-sm font-medium">
            Akshay Revankar
          </div>
          <div className="text-center px-4 py-3 rounded-md bg-secondary text-sm font-medium">
            Govind Jeevan
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-primary text-sm font-semibold mb-3">Support</h3>
        <div className="text-xs text-center">
          officers@iris.nitk.ac.in
        </div>
      </div>
    </aside>
  );
};
