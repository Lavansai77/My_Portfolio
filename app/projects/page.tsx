import projects from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-extrabold tracking-tight">Projects</h1>
      <p className="mt-2 text-slate-300">Selected work focused on MERN development and real integrations.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p as any} />
        ))}
      </div>
    </div>
  );
}