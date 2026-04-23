import React, { useState } from "react";
import { Settings2, Shuffle, CheckCircle2, SlidersHorizontal, List, Sparkles, MessageSquare } from "lucide-react";

export function ModulesPanel() {
  const [activePanels, setActivePanels] = useState<string[]>(['character', 'prompt_eng']);

  const togglePanel = (id: string) => {
    setActivePanels(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex-1 overflow-y-auto min-h-0 custom-scroll bg-[#f8f9fa] border-t border-[#e5e7eb] px-1 py-1 space-y-1">
      
      <ModuleAccordion title="Character Module" id="character" active={activePanels.includes('character')} onToggle={() => togglePanel('character')}>
        <div className="text-[11px] text-gray-500 mb-2 leading-tight">Search characters, edit slots, and manage primary/variation assets.</div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <input type="text" placeholder="Character Name..." className="flex-1 bg-white border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded px-2 py-1 outline-none text-xs text-gray-800 shadow-sm" />
            <button className="bg-white border border-gray-200 p-1.5 rounded hover:bg-gray-50 text-gray-500 shadow-sm transition-colors" title="Random placement"><Shuffle size={12} /></button>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-1">
            <button className="bg-white border border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 text-[10px] font-bold uppercase tracking-wide py-1.5 rounded text-gray-500 transition-colors shadow-sm">Apply C1 Prompt</button>
            <button className="bg-white border border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 text-[10px] font-bold uppercase tracking-wide py-1.5 rounded text-gray-500 transition-colors shadow-sm">Asset Storage</button>
          </div>
        </div>
      </ModuleAccordion>

      <ModuleAccordion title="Character Reference" id="char_ref" active={activePanels.includes('char_ref')} onToggle={() => togglePanel('char_ref')}>
        <div className="flex flex-col gap-2">
          <div className="h-20 border border-dashed border-gray-300 bg-gray-50 rounded flex items-center justify-center text-xs text-gray-400 hover:border-blue-400 hover:bg-blue-50 transition-colors cursor-pointer shadow-inner">
            + Drop Reference Image
          </div>
          <label className="flex items-center gap-2 cursor-pointer mt-1">
             <input type="checkbox" className="accent-blue-600 w-3 h-3" />
             <span className="text-[11px] font-medium text-gray-600">NAI Mode Native Reference</span>
          </label>
        </div>
      </ModuleAccordion>

      <ModuleAccordion title="Vibe Transfer" id="vibe" active={activePanels.includes('vibe')} onToggle={() => togglePanel('vibe')}>
        <div className="text-[11px] text-gray-500 mb-2">Multiple image sets and intensity.</div>
        <div className="flex items-center gap-2">
           <span className="text-[11px] font-bold text-gray-500">Strength:</span>
           <input type="range" className="flex-1 accent-blue-600" />
        </div>
      </ModuleAccordion>

      <ModuleAccordion title="Prompt Engineering" id="prompt_eng" active={activePanels.includes('prompt_eng')} onToggle={() => togglePanel('prompt_eng')}>
        <div className="flex flex-col gap-2">
          <label className="flex items-center justify-between cursor-pointer group">
             <span className="text-[11px] font-medium text-gray-600 group-hover:text-gray-900">Danbooru Auto-Weight</span>
             <input type="checkbox" defaultChecked className="accent-blue-600 w-3 h-3" />
          </label>
          <label className="flex items-center justify-between cursor-pointer group">
             <span className="text-[11px] font-medium text-gray-600 group-hover:text-gray-900">e621 Auto-Boost</span>
             <input type="checkbox" className="accent-blue-600 w-3 h-3" />
          </label>
          <button className="bg-white border border-gray-200 hover:bg-gray-50 text-[10px] font-bold uppercase tracking-wide py-1.5 rounded text-gray-500 transition-colors flex items-center justify-center gap-1.5 mt-1 shadow-sm">
            <SlidersHorizontal size={10} /> Filter Debug View
          </button>
        </div>
      </ModuleAccordion>

      <ModuleAccordion title="Instant Wildcard" id="wildcard" active={activePanels.includes('wildcard')} onToggle={() => togglePanel('wildcard')}>
         <div className="flex items-center gap-2 mb-2">
            <select className="flex-1 bg-gray-50 border border-gray-200 focus:ring-1 focus:ring-blue-500 text-xs font-medium text-gray-700 rounded px-2 py-1 outline-none">
              <option>common_actions.json</option>
              <option>backgrounds.json</option>
            </select>
         </div>
         <button className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-[10px] font-bold uppercase tracking-wide py-1.5 rounded text-gray-500 transition-colors shadow-sm">Edit JSON Data</button>
      </ModuleAccordion>

      <ModuleAccordion title="Ollama Processing" id="ollama" active={activePanels.includes('ollama')} onToggle={() => togglePanel('ollama')}>
        <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></span> Server Ready</span>
            <button className="text-[11px] font-bold text-blue-500 hover:text-blue-600">Restart</button>
        </div>
        <button className="w-full bg-gray-900 border border-gray-800 hover:bg-gray-800 text-[10px] font-bold uppercase tracking-wide py-2 rounded text-white transition-colors flex items-center justify-center gap-2 shadow-md">
          <MessageSquare size={12} /> Natural Lang to Tags
        </button>
      </ModuleAccordion>

      <ModuleAccordion title="Automation & Queue" id="automation" active={activePanels.includes('automation')} onToggle={() => togglePanel('automation')}>
        <div className="flex flex-col gap-3">
           <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-gray-500">Mode</span>
              <select className="bg-gray-50 border border-gray-200 text-[11px] font-medium text-gray-700 rounded px-1.5 py-0.5 outline-none focus:ring-1 focus:ring-blue-500">
                 <option>Timer Based</option>
                 <option>Count Based</option>
                 <option>Unlimited</option>
              </select>
           </div>
           <button className="w-full bg-white border border-gray-200 hover:bg-blue-50 text-[10px] font-bold uppercase tracking-wide text-gray-600 hover:text-blue-600 transition-colors flex items-center justify-center gap-1.5 py-2 rounded shadow-sm">
             <List size={12} /> Open Queue Manager
           </button>
        </div>
      </ModuleAccordion>
      
    </div>
  );
}

function ModuleAccordion({ title, id, children, active, onToggle }: { title: string, id: string, children: React.ReactNode, active: boolean, onToggle: () => void }) {
  return (
    <div className="bg-white border border-gray-100 rounded shadow-sm">
      <button 
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-3 py-2.5 transition-colors group ${active ? 'border-b border-gray-100' : ''} hover:bg-gray-50`}
      >
        <span className="text-[10px] font-bold text-gray-500 group-hover:text-blue-600 uppercase tracking-widest">{title}</span>
        <Settings2 size={12} className={`text-gray-400 group-hover:text-blue-500 transition-transform ${active ? 'rotate-90 text-blue-500' : ''}`} />
      </button>
      {active && (
        <div className="px-3 pb-3 pt-2">
          {children}
        </div>
      )}
    </div>
  );
}
