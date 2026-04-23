import { HelpCircle, RefreshCw, Search as SearchIcon } from "lucide-react";

export function SearchPanel() {
  return (
    <div className="p-4 border-b border-[#e5e7eb] bg-white flex flex-col gap-3 relative z-20">
      <div className="flex items-center justify-between">
        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Search Filter</h3>
        <select className="bg-blue-50 border-none text-[10px] font-bold text-blue-500 rounded px-2 py-1 outline-none appearance-none cursor-pointer">
          <option>NAI</option>
          <option>WEBUI</option>
          <option>COMFYUI</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <input 
          type="text" 
          placeholder="Search keywords..." 
          className="bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-md px-3 py-1.5 text-sm outline-none w-full text-gray-800 placeholder:text-gray-400 font-medium transition-all"
        />
        <input 
          type="text" 
          placeholder="Exclude keywords..." 
          className="bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-md px-3 py-1.5 text-sm outline-none w-full text-gray-800 placeholder:text-gray-400 font-medium transition-all"
        />
      </div>

      <div className="flex items-center gap-4 py-1">
        <label className="flex items-center gap-1.5 text-[11px] font-medium text-gray-600 cursor-pointer">
          <input type="checkbox" defaultChecked className="accent-blue-600 w-3 h-3" /> General
        </label>
        <label className="flex items-center gap-1.5 text-[11px] font-medium text-gray-600 cursor-pointer">
          <input type="checkbox" className="accent-blue-600 w-3 h-3" /> Sensitive
        </label>
        <label className="flex items-center gap-1.5 text-[11px] font-medium text-gray-600 cursor-pointer">
          <input type="checkbox" className="accent-blue-600 w-3 h-3" /> NSFW
        </label>
      </div>

      <button className="flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-700 font-bold py-1.5 rounded-md text-[11px] uppercase tracking-wide transition-colors mt-1 shadow-sm">
        <SearchIcon size={12} /> Execute Search
      </button>
    </div>
  );
}
