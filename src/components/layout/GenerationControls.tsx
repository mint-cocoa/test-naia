import { Play, Sparkles } from "lucide-react";

export function GenerationControls() {
  return (
    <div className="p-4 border-t border-[#e5e7eb] bg-gray-50/80 backdrop-blur z-20 shrink-0">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Res: 1024x1024</span>
          <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Steps: 28</span>
        </div>
        <button className="text-[10px] font-bold text-blue-500 hover:text-blue-700 uppercase tracking-widest">Params</button>
      </div>
      
      <div className="flex gap-2">
        <button className="flex items-center justify-center gap-2 flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-widest uppercase py-3 rounded-lg text-[11px] transition-all shadow-md active:scale-[0.98]">
          <Play size={14} fill="currentColor" /> Generate Image
        </button>
        <button className="w-12 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-600 font-bold tracking-widest uppercase rounded-lg transition-colors flex items-center justify-center shadow-sm" title="Random / Next Prompt">
          <Sparkles size={16} />
        </button>
      </div>
    </div>
  );
}
