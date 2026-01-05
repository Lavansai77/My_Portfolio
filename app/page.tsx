"use client";

import { motion } from "framer-motion";
import profile from "@/data/profile.json";
import certificates from "@/data/certificates.json";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="bg-bg text-slate-100 scroll-smooth">

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
      >
        {/* glow */}
        <div className="absolute -top-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-2xl text-lg md:text-xl text-slate-300"
        >
          MERN Stack Developer crafting scalable full-stack applications
          with modern UI and reliable backend systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex gap-4 flex-wrap justify-center"
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-xl bg-accent px-7 py-3 font-semibold text-slate-900 hover:opacity-90"
          >
            View Projects
          </button>

          <a 
  href="./resume.pdf" 
  download="Bandari_Lavan_Sai_Resume.pdf"
  className="bg-accent text-slate-900 px-6 py-3 rounded-lg font-bold"
>
  Download Resume
</a>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      
      <motion.section
        id="about"
        className="max-w-5xl mx-auto px-6 py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 mb-10">
        
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="h-[1px] flex-1 bg-slate-800"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              Hello! I&apos;m a <span className="text-accent font-medium">Full Stack Developer</span> specialized in the MERN stack. My journey in tech is driven by a fascination for how complex systems can be simplified into elegant, user-friendly interfaces.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              Currently, I focus on building <span className="text-slate-100 font-medium border-b border-accent/30">scalable web applications</span> that don&apos;t just look good but perform reliably under the hood. From designing schema in MongoDB to crafting interactive UIs in React, I enjoy the full lifecycle of development.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              I am actively seeking <span className="text-accent font-medium">Entry-level or Internship roles</span> where I can contribute to high-impact projects and grow alongside a team of experienced engineers.
            </p>
          </div>

          {/* Core Focus Cards */}
          <div className="md:col-span-2 grid gap-4">
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:bg-slate-900/40 transition-colors">
              <h4 className="text-accent font-bold text-sm uppercase tracking-widest mb-2">Main Focus</h4>
              <p className="text-slate-300 text-sm">Full-stack MERN Development & API Orchestration</p>
            </div>
            
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:bg-slate-900/40 transition-colors">
              <h4 className="text-accent font-bold text-sm uppercase tracking-widest mb-2">Interests</h4>
              <p className="text-slate-300 text-sm">System Architecture, Responsive UI Design, & Performance Optimization</p>
            </div>

            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:bg-slate-900/40 transition-colors">
              <h4 className="text-accent font-bold text-sm uppercase tracking-widest mb-2">Approach</h4>
              <p className="text-slate-300 text-sm">Writing clean, maintainable code and solving real-world problems.</p>
            </div>
          </div>
        </div>
      </motion.section>
      {/* ================= EDUCATION ================= */}

      <motion.section
        id="education"
        className="max-w-5xl mx-auto px-6 py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 mb-12">
          
          <h2 className="text-3xl font-bold">Education</h2>
          <div className="h-[1px] flex-1 bg-slate-800"></div>
        </div>

        <div className="relative border-l border-slate-800 ml-4 pl-8 space-y-12">
          {/* B.Tech */}
          <div className="relative group">
            {/* Timeline Indicator */}
            <span className="absolute -left-[41px] top-1.5 h-5 w-5 rounded-full bg-slate-950 border-2 border-accent group-hover:bg-accent transition-colors duration-300 shadow-[0_0_10px_rgba(var(--accent-rgb),0.3)]" />
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div>
                <h3 className="text-xl font-bold text-slate-100">
                  Bachelors of Technology (B.Tech)
                </h3>
                <p className="text-accent font-medium mt-1">
                  Computer Science and Engineering
                </p>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-sm font-mono text-slate-300">
                  2023 – 2026
                </span>
                <p className="text-xs text-accent mt-2 font-bold tracking-widest uppercase">CGPA: 8.69</p>
              </div>
            </div>

            <p className="text-slate-100 font-semibold mt-3">
              Vaagdevi College of Engineering, Warangal
            </p>
            
            <p className="mt-4 text-slate-400 leading-relaxed max-w-3xl">
              Specializing in full-stack development and software architecture. Gaining hands-on experience in 
              <span className="text-slate-200"> designing responsive web applications </span> 
              and mastering data structures, modern APIs, and engineering best practices.
            </p>
          </div>

          {/* Diploma */}
          <div className="relative group">
            <span className="absolute -left-[41px] top-1.5 h-5 w-5 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-accent transition-colors duration-300" />
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div>
                <h3 className="text-xl font-bold text-slate-100">
                  Diploma in Engineering
                </h3>
                <p className="text-slate-400 font-medium mt-1">
                  Electronics and Communication Engineering
                </p>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-sm font-mono text-slate-400">
                  2020 – 2023
                </span>
                <p className="text-xs text-slate-500 mt-2 font-bold tracking-widest uppercase">CGPA: 9.38</p>
              </div>
            </div>

            <p className="text-slate-300 font-semibold mt-3">
              VMR Polytechnic College, Warangal
            </p>
            
            <p className="mt-4 text-slate-400 leading-relaxed max-w-3xl">
              Achieved a high academic standing while building a robust foundation in 
              <span className="text-slate-200"> technical problem-solving </span> 
              and core engineering principles.
            </p>
          </div>
        </div>
      </motion.section>


      {/* ================= SKILLS ================= */}
      
      <motion.section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 mb-12">
          
          <h2 className="text-3xl font-bold">Skills & Expertise</h2>
          <div className="h-[1px] flex-1 bg-slate-800"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Technical Stack */}
          <div className="group rounded-2xl border border-slate-800 p-6 bg-slate-900/20 hover:border-accent/50 transition-all duration-300">
            <h3 className="text-accent font-bold text-xs uppercase tracking-widest mb-6">Technical Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Node.js", "Express", "MongoDB", "SQL", "Tailwind CSS", "Python", "JavaScript"].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-xs rounded-md border border-slate-700 bg-slate-950 text-slate-300 group-hover:border-slate-500 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="group rounded-2xl border border-slate-800 p-6 bg-slate-900/20 hover:border-accent/50 transition-all duration-300">
            <h3 className="text-accent font-bold text-xs uppercase tracking-widest mb-6">Soft Skills</h3>
            <ul className="space-y-3">
              {["Analytical Problem Solving", "Cross-team Collaboration", "Time Management", "Adaptability"].map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-sm text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Dev Ops */}
          <div className="group rounded-2xl border border-slate-800 p-6 bg-slate-900/20 hover:border-accent/50 transition-all duration-300">
            <h3 className="text-accent font-bold text-xs uppercase tracking-widest mb-6">Tools</h3>
            <ul className="space-y-3">
              {["GitHub", "VS Code", "Postman", "Docker", "Vercel"].map((tool) => (
                <li key={tool} className="flex items-center gap-3 text-sm text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-700 group-hover:bg-accent transition-colors" />
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          {/* Communication */}
          <div className="group rounded-2xl border border-slate-800 p-6 bg-slate-900/20 hover:border-accent/50 transition-all duration-300">
            <h3 className="text-accent font-bold text-xs uppercase tracking-widest mb-6">Languages</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-200 font-medium">English</p>
                <p className="text-xs text-slate-500">Professional Working Proficiency</p>
              </div>
              <div>
                <p className="text-sm text-slate-200 font-medium">Telugu</p>
                <p className="text-xs text-slate-500">Native / Bilingual</p>
              </div>
              <div>
                <p className="text-sm text-slate-200 font-medium">Hindi</p>
                <p className="text-xs text-slate-500">Conversational</p>
              </div>
            </div>
          </div>

        </div>
      </motion.section>

      {/* ================= PROJECTS ================= */}
      <motion.section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "FITMAX – Fitness Management System",
              desc:
                "A complete MERN-based fitness platform featuring budget-based diet plans, workout scheduling, calorie calculation, authentication, and dashboards.",
              tech: "React, Node.js, Express, MongoDB, Tailwind CSS",
              link: "https://lavansai77.github.io/Min_Proj/",
            },
            {
              title: "Spotify Clone",
              desc:
                "A modern, responsive Spotify-inspired UI with playlists, search, and playback-style interactions.",
              tech: "React, Tailwind CSS,Express, Node.js",
              link: " https://lavansai77.github.io/Potify-mini/",
            },
          ].map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              className="group rounded-2xl border border-slate-800 p-7 bg-slate-900/40 transition hover:-translate-y-1 hover:border-accent"
            >
              <h3 className="text-xl font-semibold group-hover:text-accent">
                {p.title}
              </h3>
              <p className="mt-3 text-slate-300">{p.desc}</p>
              <p className="mt-3 text-sm text-slate-400">Tech: {p.tech}</p>
              <p className="mt-4 text-sm font-semibold text-accent">
                View on GitHub →
              </p>
            </a>
          ))}
        </div>
      </motion.section>

      {/* ================= EXPERIENCE ================= */}
      
      <motion.section
        id="experience"
        className="max-w-5xl mx-auto px-6 py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="relative border-l border-slate-800 pl-8 space-y-12">
          {/* EY GDS Internship */}
          <div className="relative group">
            {/* Pulsing Timeline Dot */}
            <span className="absolute -left-[38px] mt-1.5 h-4 w-4 rounded-full bg-slate-900 border-2 border-accent shadow-[0_0_10px_rgba(var(--accent-rgb),0.5)] group-hover:scale-125 transition-transform duration-300" />
            
            <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-accent transition-colors">
                MERN Stack Developer Intern
              </h3>
              <span className="text-sm font-mono text-slate-400 bg-slate-900/50 px-3 py-1 rounded-full border border-slate-800">
                Dec 2024 – Jan 2025
              </span>
            </div>

            <p className="text-lg font-semibold text-accent/90 mb-4">
              EY GDS & AICTE
            </p>

            <ul className="space-y-3 text-slate-300">
              <li className="flex gap-3 leading-relaxed">
                <span className="text-accent mt-1.5 text-xs">▹</span>
                <span>Architected scalable <strong>MERN-stack modules</strong> and implemented high-performance reusable UI components using Tailwind CSS.</span>
              </li>
              <li className="flex gap-3 leading-relaxed">
                <span className="text-accent mt-1.5 text-xs">▹</span>
                <span>Engineered seamless frontend-backend integration using <strong>RESTful APIs</strong> and optimized MongoDB data fetching.</span>
              </li>
              <li className="flex gap-3 leading-relaxed">
                <span className="text-accent mt-1.5 text-xs">▹</span>
                <span>Gained exposure to industry-standard development practices, including Agile workflows and professional Git version control.</span>
              </li>
            </ul>

            {/* Tech Stack for Internship */}
            <div className="flex flex-wrap gap-2 mt-6">
              {["MongoDB", "Express.js", "React", "Node.js", "REST APIs", "Tailwind CSS"].map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 text-[11px] uppercase tracking-wider font-medium rounded-md bg-slate-900 border border-slate-800 text-slate-400 group-hover:border-accent/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================= CERTIFICATIONS ================= */}
      <motion.section
        id="certificates"
        className="max-w-6xl mx-auto px-6 py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 mb-12">
          
          <h2 className="text-3xl font-bold">Certifications</h2>
          <div className="h-[1px] flex-1 bg-slate-800"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "MERN Stack Web Development",
              issuer: "EY GDS & AICTE",
              date: "Jan 2025",
              fileUrl: "/certificates/MERN Stack.pdf", // Path to file in public folder
            },
            {
              title: "AWS Solutions Architect",
              issuer: "Amazon Web Services (Forage)",
              date: "July 2025",
              fileUrl: "/certificates/AWS solution Architect.pdf",
            },
            {
              title: "Data Analysis with Python",
              issuer: "IBM",
              date: "Feb 2025",
              fileUrl: "/certificates/Data Analysis with Python.pdf",
            },
            {
              title: "Cybersecurity Essentials",
              issuer: "Cisco Networking Academy",
              date: "Nov 2024",
              fileUrl: "/certificates/Cybersecurity_Essentials.pdf",
            },
            {
              title: "Python Programming Essentials",
              issuer: "Cisco Networking Academy",
              date: "May 2024",
              fileUrl: "/certificates/Python_Essentials.pdf",
            },
            {
              title: "GenAI Powered Data Analytics",
              issuer: "TATA (Forage)",
              date: "Sept 2025",
              fileUrl: "/certificates/Gen AI cert.pdf",
            }
          ].map((c, index) => (
            <a
              key={index}
              href={c.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl border border-slate-800 p-6 bg-slate-900/20 hover:bg-slate-900/40 hover:border-accent transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-slate-800/50 rounded-lg group-hover:text-accent transition-colors">
                  {/* Certificate Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{c.date}</span>
              </div>
              
              <h3 className="font-bold text-slate-100 group-hover:text-accent transition-colors mb-2 leading-tight">
                {c.title}
              </h3>
              <p className="text-sm text-slate-400 mb-4">{c.issuer}</p>
              
              <div className="flex items-center text-xs font-semibold text-accent gap-2">
                <span>VIEW DOCUMENT</span>
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      {/* ================= CONTACT ================= */}
<motion.section
  id="contact"
  className="max-w-6xl mx-auto px-6 py-28"
  variants={sectionVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <h2 className="text-3xl font-bold text-center mb-12">
    Get In Touch
  </h2>

  <div className="grid md:grid-cols-2 gap-12">

    {/* LEFT – CONTACT INFO */}
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">
        Let’s talk about opportunities
      </h3>

      <p className="text-slate-300 leading-relaxed">
        I’m open to internships, entry-level full-stack roles, freelance
        projects, and collaborations. Feel free to reach out if you’d
        like to work together or discuss opportunities.
      </p>

      <div className="space-y-3 text-slate-300">
        <p>
          <span className="font-semibold text-slate-100">Email:</span>{" "}
          <a
            href={`mailto:${profile.email}`}
            className="text-accent hover:underline"
          >
            {profile.email}
          </a>
        </p>
          <p>
    <span className="font-semibold text-slate-100">Phone:</span>{" "}
    <a href={`tel:${profile.phone}`} className="text-accent hover:underline">
      {profile.phone}
    </a>
  </p>
        <p>
          <span className="font-semibold text-slate-100">Location:</span>{" "}
          Sircilla
        </p>
      </div>

      <div className="flex gap-6 mt-4">
        <a
          href={profile.linkedin}
          target="_blank"
          className="hover:text-accent"
        >
          LinkedIn
        </a>
        <a
          href={profile.github}
          target="_blank"
          className="hover:text-accent"
        >
          GitHub
        </a>
      </div>
    </div>

    {/* RIGHT – CONTACT FORM */}
    <form
      onSubmit={(e) => e.preventDefault()}
      className="rounded-2xl border border-slate-800 p-8 bg-slate-900/40 space-y-5"
    >
      <div>
        <label className="block text-sm mb-1">Name</label>
        <input
          type="text"
          placeholder="Your full name"
          className="w-full rounded-lg bg-slate-950 border border-slate-700 px-4 py-3 outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-lg bg-slate-950 border border-slate-700 px-4 py-3 outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
          rows={4}
          placeholder="Write your message..."
          className="w-full rounded-lg bg-slate-950 border border-slate-700 px-4 py-3 outline-none focus:border-accent resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-accent py-3 font-semibold text-slate-900 hover:opacity-90"
      >
        Send Message
      </button>
    </form>

  </div>
</motion.section>

    </main>
  );
}
