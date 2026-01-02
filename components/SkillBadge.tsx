export default function SkillBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-slate-700 bg-slate-900/50 px-3 py-1 text-xs text-slate-100">
      {label}
    </span>
  );
}