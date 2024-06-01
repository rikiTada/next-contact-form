import { Folders, Home, Settings } from "lucide-react";
import ToolbarButton from "@/components/layout/toolbar-button";
import { ModeToggle } from "@/components/mode-toggle";

export default function Toolbar() {
  return (
    <div className="fixed max-w-[calc(100vw-32px)] bottom-8 flex gap-2 overflow-auto p-2 z-50 left-1/2 -translate-x-1/2 shadow-lg rounded-full bg-muted/70 backdrop-blur border">
      <ToolbarButton href="/" icon={<Home />} title="Home" />
      <ToolbarButton href="/folder" icon={<Folders />} title="Folders" />
      <ToolbarButton href="/settings" icon={<Settings />} title="Settings" />
      <ModeToggle />
    </div>
  );
}
