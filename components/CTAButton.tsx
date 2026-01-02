type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  target?: "_blank" | "_self";
  rel?: string;
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  target = "_self",
  rel,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-accent text-slate-900 hover:opacity-90"
      : "border border-slate-700 text-slate-100 hover:bg-slate-900";

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : rel}
      className={`${base} ${styles}`}
    >
      {children}
    </a>
  );
}
