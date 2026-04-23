import React, { useState } from "react";
import { X, Maximize2, Move, Download, MoreHorizontal, Image as ImageIcon, LayoutDashboard, History, Settings, Info, Users, Plus } from "lucide-react";

type TabData = { id: string, label: string, icon: React.ReactNode, closable?: boolean };

export function RightWorkspace() {
  const [activeTab, setActiveTab] = useState("core");
  const [tabs, setTabs] = useState<TabData[]>([
    { id: 'core', label: 'Image Viewer', icon: <ImageIcon size={14} />, closable: false },
    { id: 'pnginfo', label: 'PNG Info', icon: <Info size={14} />, closable: false },
    { id: 'studio', label: 'Studio', icon: <LayoutDashboard size={14} />, closable: false },
    { id: 'turbo', label: 'Event Sequence', icon: <History size={14} />, closable: false },
    { id: 'settings', label: 'Settings', icon: <Settings size={14} />, closable: false },
  ]);

  const addTab = (tab: TabData) => {
    if (!tabs.find(t => t.id === tab.id)) {
      setTabs([...tabs, tab]);
    }
    setActiveTab(tab.id);
  };

  const closeTab = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newTabs = tabs.filter(t => t.id !== id);
    setTabs(newTabs);
    if (activeTab === id) {
      setActiveTab(newTabs[0].id);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden p-2 lg:p-6 bg-[#f0f2f5] z-0 relative">
      <div className="flex-1 flex flex-col bg-white rounded-3xl shadow-sm border border-[#e5e7eb] overflow-hidden">
        {/* Top Tabs */}
        <div className="flex items-end h-14 border-b border-gray-100 bg-white px-2 shrink-0 overflow-x-auto custom-scroll-x pt-2 z-10">
          {tabs.map(tab => (
            <Tab 
              key={tab.id}
              icon={tab.icon} 
              label={tab.label} 
              active={activeTab === tab.id} 
              closable={tab.closable}
              onClick={() => setActiveTab(tab.id)} 
              onClose={(e) => closeTab(tab.id, e)}
            />
          ))}
          
          {/* Dynamic add tab dropdown trigger for demo */}
          <div className="flex items-center ml-2 space-x-1 pl-2 border-l border-gray-100 mb-2 relative z-10">
            <button 
               onClick={() => addTab({ id: 'assets', label: 'Assets', icon: <ImageIcon size={14} />, closable: true })}
               className="h-8 w-8 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors" title="Open Assets Tab">
               <Plus size={16} />
            </button>
            <button 
               onClick={() => addTab({ id: 'artists', label: 'Artist Thumbs', icon: <Users size={14} />, closable: true })}
               className="h-8 w-8 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors" title="Open Artist Thumbs">
               <Users size={16} />
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex overflow-hidden relative bg-white shadow-[inset_0_4px_12px_rgba(0,0,0,0.02)]">
          {activeTab === 'core' && <CoreImageViewer />}
          {activeTab === 'pnginfo' && <PngInfoWorkspace />}
          {activeTab === 'studio' && <StudioWorkspace />}
          {activeTab === 'turbo' && <div className="flex-1 flex items-center justify-center p-8 text-gray-400 font-medium">Turbo Event Sequence Editor Canvas...</div>}
          {activeTab === 'settings' && <SettingsWorkspace />}
          {activeTab === 'assets' && <div className="flex-1 flex items-center justify-center p-8 text-gray-400 font-medium">Assets Storage...</div>}
          {activeTab === 'artists' && <div className="flex-1 flex items-center justify-center p-8 text-gray-400 font-medium">Artist Thumb Gallery...</div>}
        </div>
      </div>
    </div>
  );
}

function Tab({ icon, label, active, closable, onClick, onClose }: { key?: React.Key, icon: React.ReactNode, label: string, active?: boolean, closable?: boolean, onClick: () => void, onClose: (e:React.MouseEvent) => void }) {
  return (
    <button 
      onClick={onClick}
      className={`h-full px-4 flex items-center gap-2 border-b-2 transition-colors min-w-max group ${
        active 
          ? 'border-blue-600 text-blue-600 relative bg-white shadow-[0_-8px_10px_-10px_rgba(0,0,0,0.05)_inset]' 
          : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-200 hover:bg-gray-50/50'
      }`}
    >
      <span className={`shrink-0 ${active ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`}>{icon}</span>
      <span className={`text-[11px] font-bold tracking-wide uppercase ${active ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-800'}`}>{label}</span>
      {closable && (
        <div 
          onClick={onClose}
          className={`ml-auto shrink-0 p-1 rounded-sm hover:bg-gray-100 transition-colors ${active ? 'text-blue-400 hover:text-blue-600' : 'text-gray-300 hover:text-gray-600'}`}
        >
          <X size={12} />
        </div>
      )}
    </button>
  );
}

function CoreImageViewer() {
  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Main Image Canvas Area */}
      <div className="flex-1 relative flex items-center justify-center p-8 bg-gray-50 pattern-grid">
        
        {/* Rendered Image Mock */}
        <div className="relative z-10 max-h-full max-w-full aspect-[4/5] bg-white rounded-xl shadow-2xl border-4 border-white overflow-hidden flex items-center justify-center group flex-shrink transition-all duration-300 hover:shadow-3xl">
          <img src="https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=1024&auto=format&fit=crop" alt="Generated preview" className="w-full h-full object-contain" />
          
          {/* Overlay Controls */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <IconButton icon={<Maximize2 size={14} />} tooltip="Fullscreen" />
            <IconButton icon={<Move size={14} />} tooltip="Send to Img2Img / Inpaint" />
            <IconButton icon={<Info size={14} />} tooltip="View Metadata" />
            <IconButton icon={<Download size={14} />} tooltip="Save" />
          </div>
        </div>
      </div>

      {/* History Ribbon (Bottom) */}
      <div className="h-[104px] border-t border-gray-100 bg-white p-2 flex gap-3 overflow-x-auto shrink-0 custom-scroll-x items-center px-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div key={i} className={`w-16 h-16 shrink-0 rounded-lg bg-gray-100 border-2 cursor-pointer box-content overflow-hidden transition-all duration-200 ${i === 1 ? 'border-blue-500 shadow-sm scale-110 ml-1 mr-1' : 'border-transparent hover:border-gray-300 opacity-70 hover:opacity-100'}`}>
             <img src={`https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=200&auto=format&fit=crop&sig=${i}`} alt={`History ${i}`} className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="ml-auto w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 border border-gray-200 text-gray-400 hover:text-blue-500 hover:bg-blue-50 cursor-pointer shadow-sm min-w-12 transition-colors">
          <MoreHorizontal size={20} />
        </div>
      </div>
    </div>
  );
}

function PngInfoWorkspace() {
  return (
    <div className="flex-1 flex flex-col h-full p-6 lg:p-12 overflow-hidden bg-gray-50/30">
      <div className="flex-1 border-2 border-dashed border-gray-300 rounded-3xl flex items-center justify-center bg-gray-50/50 text-gray-500 transition-colors hover:border-blue-400 hover:bg-blue-50/50 cursor-pointer shadow-sm">
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center text-blue-500 mb-4">
            <Info size={40} />
          </div>
          <p className="text-base font-semibold text-gray-700">Drag & Drop image here to parse metadata</p>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Supports NAI, WebUI, and ComfyUI formats</p>
        </div>
      </div>
    </div>
  );
}

function SettingsWorkspace() {
  return (
    <div className="flex-1 p-8 overflow-y-auto bg-gray-50/30">
       <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
            <h2 className="text-2xl font-black tracking-tight text-gray-900">Global Settings</h2>
          </div>
          <SettingsSection title="General">
             <SettingsToggle label="Enable Autocomplete" defaultChecked />
             <SettingsToggle label="UI Scaling Enabled" />
          </SettingsSection>
          <SettingsSection title="Directories">
             <SettingsInput label="Save Path" defaultValue="C:/Outputs/NAIA" />
          </SettingsSection>
          <SettingsSection title="API Configuration">
             <SettingsInput label="Cloudflared Tunnel URL" placeholder="https://..." />
          </SettingsSection>
       </div>
    </div>
  );
}

function SettingsSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-6">{title}</h3>
      <div className="space-y-4">
         {children}
      </div>
    </div>
  );
}

function SettingsToggle({ label, defaultChecked }: { label: string, defaultChecked?: boolean }) {
  return (
    <label className="flex items-center justify-between cursor-pointer group">
      <span className="text-sm font-semibold text-gray-600 group-hover:text-gray-900">{label}</span>
      <input type="checkbox" defaultChecked={defaultChecked} className="accent-blue-600 scale-110 w-4 h-4 cursor-pointer" />
    </label>
  );
}

function SettingsInput({ label, defaultValue, placeholder }: { label: string, defaultValue?: string, placeholder?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] font-bold uppercase tracking-wide text-gray-500">{label}</label>
      <input type="text" defaultValue={defaultValue} placeholder={placeholder} className="bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-mono shadow-inner" />
    </div>
  );
}

function StudioWorkspace() {
  return (
    <div className="flex-1 p-8 overflow-y-auto bg-gray-50/50">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200 max-w-6xl mx-auto">
        <h2 className="text-2xl font-black tracking-tight text-gray-900">Studio Editor</h2>
        <button className="bg-gray-900 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wide text-white shadow-md hover:bg-gray-800 transition-colors">Add Frame Node</button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[1, 2, 3].map((f) => (
          <div key={f} className="bg-white border border-gray-200 rounded-xl p-5 h-56 flex flex-col group hover:border-gray-300 hover:shadow-md transition-all">
            <div className="flex justify-between items-center mb-3">
               <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-50 px-2 py-1 rounded">Frame {f}</div>
               <button className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-1 rounded transition-colors"><X size={14}/></button>
            </div>
            <textarea className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs text-gray-800 resize-none outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-inner font-mono" placeholder="Specific frame prompts..." />
          </div>
        ))}
      </div>
    </div>
  );
}

function IconButton({ icon, tooltip }: { icon: React.ReactNode, tooltip: string }) {
  return (
    <button className="w-10 h-10 flex items-center justify-center bg-white hover:bg-blue-50 text-gray-600 hover:text-blue-600 rounded-full shadow-lg transition-colors border border-gray-100" title={tooltip}>
      {icon}
    </button>
  );
}
