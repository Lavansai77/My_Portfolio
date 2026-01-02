import Section from "@/components/Section";

export default function Experience() {
  return (
    <div>
      <h1 className="text-3xl font-extrabold tracking-tight">Experience</h1>
      <p className="mt-2 text-slate-300">Hands-on learning and practical delivery.</p>

      <div className="mt-8">
        <Section title="Web Development Intern — EY Global Delivery Services & AICTE">
          <div className="text-sm text-slate-300">Dec 2024 – Jan 2025</div>
          <ul className="mt-4 list-disc pl-5 text-sm text-slate-200">
            <li>Completed a MERN-focused internship program on building modern web applications.</li>
            <li>Strengthened React front-end skills and Express-based backend fundamentals.</li>
            <li>Improved understanding of database management for real-world applications.</li>
          </ul>
        </Section>
      </div>
    </div>
  );
}