const testimonials = [
  {
    quote: "Bandari communicates clearly, executes fast, and keeps the UI clean and consistent.",
    name: "Teammate",
    role: "Placeholder"
  },
  {
    quote: "Strong MERN fundamentals and a practical approach to solving problems.",
    name: "Mentor",
    role: "Placeholder"
  },
  {
    quote: "Reliable teammate who takes ownership and delivers on time.",
    name: "Manager",
    role: "Placeholder"
  }
];

export default function TestimonialCarousel() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {testimonials.map((t) => (
        <div key={t.quote} className="rounded-2xl border border-slate-800 bg-surface/60 p-6">
          <p className="text-sm text-slate-200">“{t.quote}”</p>
          <div className="mt-4 text-sm font-semibold">{t.name}</div>
          <div className="text-xs text-slate-400">{t.role}</div>
        </div>
      ))}
    </div>
  );
}