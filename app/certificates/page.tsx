import certificates from "@/data/certificates.json";

export default function Certificates() {
  return (
    <div>
      <h1 className="text-3xl font-extrabold tracking-tight">Certificates</h1>
      <p className="mt-2 text-slate-300">Stored in JSON for easy updates (and usable via API route).</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {(certificates as any[]).map((c) => (
          <div key={c.title} className="rounded-2xl border border-slate-800 bg-surface/60 p-6">
            <div className="text-lg font-bold">{c.title}</div>
            <div className="mt-1 text-sm text-slate-300">{c.issuer}</div>
            <div className="mt-2 text-xs text-slate-400">{String(c.date)}</div>

            {c.skills?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {c.skills.map((s: string) => (
                  <span key={s} className="rounded-full border border-slate-700 px-3 py-1 text-xs">{s}</span>
                ))}
              </div>
            ) : null}

            {c.highlights?.length ? (
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-200">
                {c.highlights.map((h: string) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}

            {c.verifyUrl ? (
              <a className="mt-4 inline-block text-sm font-semibold text-accent hover:underline" href={c.verifyUrl} target="_blank" rel="noreferrer">
                Verify certificate
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}