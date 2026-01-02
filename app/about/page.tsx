"use client";

import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      {/* Navbar stays on top */}
      <Navbar />

      {/* Main SPA content */}
      <main className="bg-[#020617] text-white">

        {/* 1️⃣ HERO */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto"
        >
          <h1 className="text-5xl font-extrabold">
            Hi, I’m Lavan 👋
          </h1>

          <p className="mt-4 text-xl text-slate-300">
            MERN Stack Developer | React | Node | MongoDB
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-xl bg-white text-black font-semibold"
            >
              View Projects
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-xl border border-slate-600"
            >
              Contact Me
            </button>
          </div>
        </section>

        {/* 2️⃣ ABOUT */}
        <section
          id="about"
          className="min-h-screen px-6 py-24 max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
            I’m a passionate Full Stack Developer specializing in the MERN stack.
            I enjoy building clean, scalable, and user-friendly web applications.
            Currently focusing on real-world projects and system design.
          </p>

          <ul className="mt-6 space-y-2 text-slate-300">
            <li>✅ Strong in React & Next.js</li>
            <li>✅ REST APIs & Backend Architecture</li>
            <li>✅ MongoDB & SQL Databases</li>
            <li>✅ Clean UI with Tailwind CSS</li>
          </ul>
        </section>

        {/* 3️⃣ SKILLS */}
        <section
          id="skills"
          className="min-h-screen px-6 py-24 max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "React",
              "Next.js",
              "Node.js",
              "Express",
              "MongoDB",
              "SQL",
              "Tailwind CSS",
              "Git & GitHub",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-slate-700 p-6 text-center hover:bg-slate-900 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* 4️⃣ PROJECTS */}
        <section
          id="projects"
          className="min-h-screen px-6 py-24 max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-slate-700 rounded-xl p-6">
              <h3 className="text-2xl font-semibold">
                FITMAX – Fitness Management System
              </h3>
              <p className="mt-2 text-slate-300">
                MERN stack fitness platform with diet plans, workout animations,
                authentication, and dashboards.
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Tech: React, Node, Express, MongoDB, Tailwind
              </p>
            </div>

            <div className="border border-slate-700 rounded-xl p-6">
              <h3 className="text-2xl font-semibold">Spotify Clone</h3>
              <p className="mt-2 text-slate-300">
                Music streaming UI clone with playlists and responsive layout.
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Tech: React, Tailwind CSS
              </p>
            </div>
          </div>
        </section>

        {/* 5️⃣ CONTACT */}
        <section
          id="contact"
          className="min-h-screen px-6 py-24 max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">Contact</h2>

          <p className="text-lg text-slate-300 mb-6">
            Feel free to reach out for collaborations or opportunities.
          </p>

          <p className="text-slate-300">
            📧 Email: bandarilavansai@gmail.com
          </p>

          <p className="text-slate-300 mt-2">
            🔗 GitHub: github.com/your-username
          </p>
        </section>

      </main>
    </>
  );
}
