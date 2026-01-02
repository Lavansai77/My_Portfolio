export default function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold tracking-tight mb-4">{title}</h2>
      <div className="rounded-2xl border border-slate-800 bg-surface/60 p-6">{children}</div>
    </section>
  );
}