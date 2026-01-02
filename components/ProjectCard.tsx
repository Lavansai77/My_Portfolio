import CTAButton from "@/components/CTAButton";

type Project = {
  title: string;
  stack: string[];
  highlights: string[];
  repo: string;
};

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-surface/60 p-6">
      <h3 className="text-lg font-bold">{p.title}</h3>
      <div className="mt-2 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span key={s} className="rounded-full border border-slate-700 px-3 py-1 text-xs">
            {s}
          </span>
        ))}
      </div>
      <ul className="mt-4 list-disc pl-5 text-sm text-slate-200">
        {p.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <div className="mt-5">
        <CTAButton href={p.repo} variant="secondary">View Repo</CTAButton>
      </div>
    </div>
  );
}