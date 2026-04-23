import { Layers, Wand2 } from "lucide-react";

export function PromptPanel() {
  return (
    <div className="p-4 border-b border-[#e5e7eb] bg-white flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Prompt Config</h3>
      </div>
      
      <div className="flex flex-col gap-3">
        <div className="relative">
          <textarea 
            rows={4}
            placeholder="Main prompt..." 
            className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-md px-3 py-2 text-xs outline-none resize-none custom-scroll leading-relaxed text-gray-800 font-mono shadow-inner transition-all"
            defaultValue="masterpiece, best quality, ultra-detailed, 1girl, solo, standing in a futuristic city, cyberpunk, neon lights, night, detailed eyes, glowing jacket"
          />
          <div className="absolute bottom-2 right-2 flex gap-1">
             <button className="bg-white hover:bg-blue-50 text-gray-400 hover:text-blue-600 shadow-sm border border-gray-100 p-1.5 rounded-md transition-colors"><Layers size={14} /></button>
          </div>
        </div>

        <div className="relative">
          <textarea 
            rows={2}
            placeholder="Negative prompt..." 
            className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-md px-3 py-2 text-xs outline-none resize-none custom-scroll text-red-500/80 font-mono shadow-inner leading-relaxed transition-all"
            defaultValue="lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1.5 mt-1">
         <ActionBtn label="Event Preset" />
         <ActionBtn label="Clothes Preset" />
         <ActionBtn label="Remote" />
         <ActionBtn label="Interactive" />
         <ActionBtn label="EZ Mode" />
         <ActionBtn label="Char Viewer" />
      </div>
      
      <div className="flex gap-2 pt-2 border-t border-gray-100 mt-1">
         <button className="flex-1 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-[10px] font-bold uppercase tracking-wide py-2 rounded-md text-gray-600 transition-all flex items-center justify-center gap-1.5 shadow-sm">
            Queue Window
         </button>
         <button className="flex-1 border border-blue-200 bg-blue-50 hover:bg-blue-100 text-[10px] font-bold uppercase tracking-wide py-2 rounded-md text-blue-600 transition-colors flex items-center justify-center gap-1.5 shadow-sm">
            <Wand2 size={12} /> Temp Generate
         </button>
      </div>
    </div>
  );
}

function ActionBtn({ label }: { label: string }) {
  return (
    <button className="bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-[9px] uppercase font-bold tracking-widest py-1.5 rounded text-gray-500 hover:text-blue-600 transition-all truncate px-1 shadow-sm">
      {label}
    </button>
  );
}
