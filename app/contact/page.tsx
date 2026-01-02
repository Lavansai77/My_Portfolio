import profile from "@/data/profile.json";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div>
      <h1 className="text-3xl font-extrabold tracking-tight">Contact</h1>
      <p className="mt-2 text-slate-300">Reach out for internships, collaborations, or project work.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-surface/60 p-6">
          <div className="font-semibold">Direct</div>
          <div className="mt-3 text-sm text-slate-200">Email: <a className="text-accent hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a></div>
          <div className="mt-2 text-sm text-slate-200">Phone: {profile.phone}</div>
          <div className="mt-2 text-sm text-slate-200">LinkedIn: <a className="text-accent hover:underline" href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedin}</a></div>
          <div className="mt-2 text-sm text-slate-200">GitHub: <a className="text-accent hover:underline" href={profile.github} target="_blank" rel="noreferrer">{profile.github}</a></div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-surface/60 p-6">
          <div className="font-semibold">Message</div>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}