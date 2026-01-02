import profile from "@/data/profile.json";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-300">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} {profile.name}</div>
          <div className="flex gap-4">
            <a className="hover:text-white" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:text-white" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:text-white" href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}