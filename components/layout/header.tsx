import { ModeToggle } from "@/components/mode-toggle";

export default function Header({ title }: { title: string }) {
  return (
    <header className="container border-b border-zinc-400/10 mx-auto flex h-16 items-center justify-between">
      {/* <div className="h-10 w-10"></div> */}
      <h1 className="text-3xl font-bold">{title}</h1>
      <ModeToggle />
    </header>
  );
}
