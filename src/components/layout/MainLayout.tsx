import { PrimarySidebar } from "./PrimarySidebar";
import { SearchPanel } from "./SearchPanel";
import { PromptPanel } from "./PromptPanel";
import { ModulesPanel } from "./ModulesPanel";
import { GenerationControls } from "./GenerationControls";
import { RightWorkspace } from "./RightWorkspace";

export function MainLayout() {
  return (
    <div className="flex h-screen w-full bg-[#f0f2f5] overflow-hidden font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <PrimarySidebar />

      {/* Left Secondary Panel (Modules & Config) */}
      <div className="w-[360px] flex flex-col border-r border-[#e5e7eb] bg-white shrink-0 shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10 relative">
        <SearchPanel />
        <ModulesPanel />
        <PromptPanel />
        <GenerationControls />
      </div>

      {/* Main Workspace Area (Tabs + Viewer) */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#f0f2f5] z-0">
        <RightWorkspace />
      </div>
    </div>
  );
}
