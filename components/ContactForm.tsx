"use client";

import { useState } from "react";
import profile from "@/data/profile.json";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject || "Portfolio Contact")}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  )}`;

  return (
    <form className="grid gap-3" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-3 md:grid-cols-2">
        <input className="rounded-xl border border-slate-700 bg-bg px-3 py-2" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="rounded-xl border border-slate-700 bg-bg px-3 py-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <input className="rounded-xl border border-slate-700 bg-bg px-3 py-2" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
      <textarea className="min-h-[140px] rounded-xl border border-slate-700 bg-bg px-3 py-2" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
      <a className="inline-flex w-fit rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-slate-900 hover:opacity-90" href={mailto}>
        Send Email
      </a>
    </form>
  );
}