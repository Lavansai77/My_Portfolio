type Item = { date: string; title: string; detail: string };

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-2 top-0 h-full w-px bg-slate-800" />
      <div className="space-y-6">
        {items.map((i) => (
          <div key={i.title} className="relative">
            <div className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-accent" />
            <div className="text-xs text-slate-400">{i.date}</div>
            <div className="font-semibold">{i.title}</div>
            <div className="text-sm text-slate-200">{i.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}