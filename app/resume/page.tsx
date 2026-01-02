import profile from "@/data/profile.json";
import Section from "@/components/Section";

export default function Resume() {
  return (
    <div>
      <h1 className="text-3xl font-extrabold tracking-tight">Resume</h1>
      <p className="mt-2 text-slate-300">View online or download as PDF.</p>

      <div className="mt-6 flex gap-3">
        <a className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-slate-900 hover:opacity-90" href="/resume.pdf" target="_blank" rel="noreferrer">
          Download PDF
        </a>
        <a className="rounded-xl border border-slate-700 px-4 py-2 text-sm hover:bg-slate-900" href={`mailto:${profile.email}`}>
          Contact
        </a>
      </div>

      <div className="mt-8">
        <Section title="Summary">
          <p className="text-slate-200">{profile.summary}</p>
        </Section>

        <Section title="Education">
          <ul className="list-disc pl-5 text-sm text-slate-200">
            <li><span className="font-semibold">B.Tech in CSE</span> — Vaagdevi College of Engineering, Warangal (2023–2026) — CGPA 8.69</li>
            <li><span className="font-semibold">Diploma in ECE</span> — VMR Polytechnic College, Warangal (2020–2023) — CGPA 9.38</li>
          </ul>
        </Section>

        <Section title="Skills">
          <ul className="list-disc pl-5 text-sm text-slate-200">
            <li>Java, Python, SQL</li>
            <li>React, Tailwind CSS, Bootstrap, HTML, CSS, JavaScript</li>
            <li>Node.js, Express.js, MongoDB, MySQL</li>
            <li>Git/GitHub, Postman, Docker, VS Code</li>
          </ul>
        </Section>

        <Section title="Experience">
          <div className="text-sm text-slate-200 font-semibold">Web Development Intern — EY Global Delivery Services & AICTE</div>
          <div className="text-sm text-slate-400">Dec 2024 – Jan 2025</div>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-200">
            <li>Completed MERN program for modern web application development.</li>
            <li>Strengthened knowledge of React, Express.js, and database management.</li>
          </ul>
        </Section>
      </div>
    </div>
  );
}