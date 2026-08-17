import { useEffect, useRef, useState, type ReactNode } from "react";
import { MessageCircle } from "lucide-react";

export const WHATSAPP_URL = "https://wa.me/5511963406707";
export const PHONE_DISPLAY = "(11) 96340-6707";

export function WhatsAppButton({
  children,
  size = "md",
  variant = "gold",
  className = "",
}: {
  children: ReactNode;
  size?: "md" | "lg";
  variant?: "gold" | "green" | "outline";
  className?: string;
}) {
  const sizes = {
    md: "px-6 py-3.5 text-sm",
    lg: "px-7 py-4.5 text-base sm:text-lg",
  } as const;
  const variants = {
    gold: "bg-gold text-navy-deep hover:bg-gold-soft shadow-[0_10px_30px_-12px_var(--gold)]",
    green: "bg-whatsapp text-white hover:brightness-110 shadow-[0_10px_30px_-12px_var(--whatsapp)]",
    outline: "border-2 border-navy/20 text-navy hover:border-gold hover:bg-gold/10",
  } as const;
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-xl font-display font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <MessageCircle className="size-5 shrink-0" strokeWidth={2.5} />
      <span className="text-center leading-tight">{children}</span>
    </a>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-block font-display text-sm font-bold uppercase tracking-[0.25em] text-gold">
        {eyebrow}
      </span>
      <h2
        className={`mt-3 text-3xl font-extrabold uppercase leading-[1.05] sm:text-4xl md:text-5xl ${light ? "text-white" : "text-navy-deep"}`}
      >
        {title}
      </h2>
      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gold" />
      {subtitle ? (
        <p className={`mt-5 text-base ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a Monteiro Transportes e Mudanças"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-whatsapp px-5 py-4 text-white shadow-[0_16px_40px_-12px_rgba(0,0,0,0.55)] transition-transform duration-300 hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="size-6" strokeWidth={2.5} />
      <span className="hidden font-display text-sm font-bold uppercase tracking-wide sm:inline">
        Fale conosco
      </span>
    </a>
  );
}
