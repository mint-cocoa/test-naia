import React from "react";
import { Search, Image, Settings, Database, Code, Sliders, Box } from "lucide-react";

export function PrimarySidebar() {
  return (
    <div className="w-14 flex flex-col items-center py-4 bg-white border-r border-[#e5e7eb] h-full shadow-sm z-20">
      <div className="flex flex-col space-y-4">
        <SidebarIcon icon={<Search size={22} />} label="Search" active />
        <SidebarIcon icon={<Image size={22} />} label="Generation" />
        <SidebarIcon icon={<Code size={22} />} label="Prompts" />
        <SidebarIcon icon={<Box size={22} />} label="Modules" />
      </div>
      
      <div className="mt-auto flex flex-col space-y-4">
        <SidebarIcon icon={<Database size={22} />} label="API Config" />
        <SidebarIcon icon={<Settings size={22} />} label="Settings" />
      </div>
    </div>
  );
}

function SidebarIcon({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button 
      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all group relative ${
        active 
          ? 'bg-blue-50 text-blue-600 shadow-inner' 
          : 'text-gray-400 hover:text-blue-500 hover:bg-blue-50/50'
      }`}
      title={label}
    >
      {icon}
      {/* Tooltip */}
      <span className="absolute left-14 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 font-medium tracking-wide">
        {label}
      </span>
    </button>
  );
}
