import Timeline from "@/components/Timeline";

export default function TimelinePage() {
  const items = [
    { date: "May 31, 2024", title: "Programming Essentials in Python", detail: "Cisco Networking Academy" },
    { date: "Nov 30, 2024", title: "Cybersecurity Essentials", detail: "Cisco Networking Academy" },
    { date: "Dec 9, 2024 – Jan 20, 2025", title: "MERN Internship", detail: "Edunet + AICTE + EY GDS" },
    { date: "Feb 9, 2025", title: "Data Analysis with Python", detail: "IBM (Cognitive Class)" },
    { date: "Jul 5, 2025", title: "AWS Solutions Architecture Job Simulation", detail: "Forage" },
    { date: "Sep 13, 2025", title: "GenAI Powered Data Analytics Job Simulation", detail: "Forage" },
    { date: "Dec 9, 2025", title: "What Is Generative AI?", detail: "LinkedIn Learning (CPE 2.00)" }
  ];

  return (
    <div>
      <h1 className="text-3xl font-extrabold tracking-tight">Timeline</h1>
      <p className="mt-2 text-slate-300">Learning milestones, certifications, and internships.</p>

      <div className="mt-8 rounded-2xl border border-slate-800 bg-surface/60 p-6">
        <Timeline items={items} />
      </div>
    </div>
  );
}