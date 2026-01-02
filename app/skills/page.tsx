import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";

const skills = {
  "Programming": ["Java", "Python", "SQL"],
  "Frontend": ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"],
  "Backend": ["Node.js", "Express.js"],
  "Databases": ["MongoDB", "MySQL"],
  "Tools": ["Git", "GitHub", "Postman", "VS Code", "Docker"],
  "Soft skills": [
    "Problem-solving",
    "Team collaboration",
    "Time management",
    "Critical thinking",
    "Adaptability",
    "Leadership",
    "Multilingual communication"
  ]
};

export default function Skills() {
  return (
    <div>
      <h1 className="text-3xl font-extrabold tracking-tight">Skills</h1>
      <p className="mt-2 text-slate-300">Tools and strengths I use to build and ship projects.</p>

      <div className="mt-8 space-y-6">
        {Object.entries(skills).map(([group, items]) => (
          <Section key={group} title={group}>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </Section>
        ))}
      </div>
    </div>
  );
}