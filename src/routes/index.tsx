import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  Home,
  Truck,
  Package,
  ShieldCheck,
  Clock,
  HeartHandshake,
  BadgeCheck,
  Zap,
  Sparkles,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

import heroTruck from "@/assets/hero-truck.jpg";
import logoAsset from "@/assets/monteiro.png";
import {
  FloatingWhatsApp,
  PHONE_DISPLAY,
  Reveal,
  SectionTitle,
  WHATSAPP_URL,
  WhatsAppButton,
} from "@/components/site";

const TITLE = "Monteiro Transportes e Mudanças | Mudanças em São Paulo e Região";
const DESCRIPTION =
  "Empresa de mudanças em São Paulo e região: mudanças residenciais, comerciais, pequenas mudanças e transporte de móveis com segurança. Orçamento rápido pelo WhatsApp.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "mudança em São Paulo, empresa de mudanças, transporte de mudanças, mudanças residenciais, mudanças comerciais, transporte de móveis, mudanças em São Paulo e região",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          name: "Monteiro Transportes e Mudanças",
          description: DESCRIPTION,
          telephone: "+5511963406707",
          areaServed: "São Paulo e região",
          address: {
            "@type": "PostalAddress",
            addressRegion: "SP",
            addressCountry: "BR",
          },
        }),
      },
    ],
  }),
});

const services = [
  {
    icon: Home,
    title: "Mudanças Residenciais",
    text: "Transporte seguro para casas e apartamentos.",
  },
  {
    icon: Building2,
    title: "Mudanças Comerciais",
    text: "Transporte de móveis, equipamentos e objetos de empresas.",
  },
  {
    icon: Truck,
    title: "Transportes",
    text: "Transporte de móveis e cargas com segurança e responsabilidade.",
  },
  {
    icon: Package,
    title: "Pequenas Mudanças",
    text: "Soluções para quem precisa transportar poucos itens ou volumes menores.",
  },
];

const reasons = [
  { icon: HeartHandshake, title: "Atendimento personalizado", text: "Cada mudança é planejada de acordo com a sua necessidade." },
  { icon: ShieldCheck, title: "Segurança no transporte", text: "Cargas acomodadas e fixadas com critério do início ao fim." },
  { icon: Sparkles, title: "Cuidado com seus pertences", text: "Móveis e objetos manuseados com atenção em cada etapa." },
  { icon: Clock, title: "Pontualidade", text: "Horários combinados e cumpridos para você se organizar." },
  { icon: Zap, title: "Orçamento rápido", text: "Você fala pelo WhatsApp e recebe um retorno ágil." },
  { icon: BadgeCheck, title: "Profissionalismo", text: "Equipe séria, respeitosa e comprometida com o serviço." },
];

const steps = [
  { n: "01", title: "Solicite seu orçamento", text: "Entre em contato pelo WhatsApp." },
  { n: "02", title: "Informe os detalhes", text: "Conte de onde será a mudança, destino e o que precisa transportar." },
  { n: "03", title: "Nós cuidamos do transporte", text: "A equipe realiza o serviço com cuidado e segurança." },
];

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <FloatingWhatsApp />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-deep/95 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3">
          <a href="#inicio" className="flex min-w-0 items-center gap-3">
            <img
              src={logoAsset}
              alt="Logo Monteiro Transportes e Mudanças"
              width={56}
              height={56}
              className="size-12 shrink-0 rounded-lg bg-white object-contain p-0.5 sm:size-14"
            />
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-lg font-extrabold uppercase text-white sm:text-xl">
                Monteiro
              </span>
              <span className="block truncate font-display text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-gold sm:text-xs">
                Transportes e Mudanças
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-display text-sm font-semibold uppercase tracking-wide text-white/80 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <WhatsAppButton size="md">Orçamento</WhatsAppButton>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar orçamento pelo WhatsApp"
            className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold text-navy-deep md:hidden"
          >
            <MessageCircle className="size-5" strokeWidth={2.5} />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative isolate overflow-hidden bg-navy-deep">
        <img
          src={heroTruck}
          alt="Caminhão de mudanças em avenida urbana de São Paulo"
          width={1600}
          height={1104}
          className="absolute inset-0 size-full object-cover opacity-60"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <span className="rise inline-flex items-center gap-2 rounded-full border border-gold/40 bg-navy/40 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-gold">
              <MapPin className="size-3.5" /> São Paulo e região
            </span>
            <h1 className="rise mt-6 text-4xl font-extrabold uppercase leading-[1.02] text-white sm:text-5xl lg:text-6xl">
              Sua mudança com <span className="text-gold">segurança</span>, cuidado e confiança.
            </h1>
            <p className="rise mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Transportamos seus móveis e pertences com responsabilidade, do seu endereço até o novo
              destino.
            </p>
            <div className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton size="lg" variant="green">
                Solicitar orçamento pelo WhatsApp
              </WhatsAppButton>
              <span className="flex items-center justify-center gap-2 font-display text-base font-bold uppercase tracking-wide text-white/85 sm:justify-start">
                <Phone className="size-4 text-gold" /> {PHONE_DISPLAY}
              </span>
            </div>
          </div>
        </div>
        <div className="relative border-t border-white/10 bg-navy/60">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/10 px-4 text-center md:grid-cols-4">
            {["Residenciais", "Comerciais", "Transportes", "Pequenas mudanças"].map((t) => (
              <span
                key={t}
                className="px-2 py-4 font-display text-xs font-bold uppercase tracking-[0.15em] text-white/70 sm:text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <SectionTitle
              eyebrow="Nossos serviços"
              title="Mudanças e transportes para cada necessidade"
              subtitle="Da mudança completa de uma casa ao transporte de poucos volumes, cuidamos de tudo com o mesmo padrão."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <article className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_24px_50px_-30px_var(--navy)]">
                  <span className="inline-flex size-14 items-center justify-center rounded-xl bg-navy text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy-deep">
                    <s.icon className="size-7" strokeWidth={2} />
                  </span>
                  <h3 className="mt-6 text-xl font-extrabold uppercase text-navy-deep">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <p className="mt-12 text-center font-display text-lg font-bold uppercase tracking-wide text-navy">
              Sua mudança começa aqui.
            </p>
            <div className="mt-5 flex justify-center">
              <WhatsAppButton>Solicite seu orçamento</WhatsAppButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Por que escolher */}
      <section id="sobre" className="relative bg-navy-deep py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <SectionTitle
              light
              eyebrow="Por que escolher"
              title="Por que escolher a Monteiro?"
              subtitle="Uma empresa séria e familiar, focada em fazer sua mudança acontecer sem dor de cabeça."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 70}>
                <div className="flex h-full gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-gold/50 hover:bg-white/[0.07]">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <r.icon className="size-6" strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold uppercase text-white">{r.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/65">{r.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <SectionTitle
              eyebrow="Como funciona"
              title="Três passos para a sua mudança"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 110}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8">
                  <span className="font-display text-5xl font-extrabold text-gold/35">{s.n}</span>
                  <h3 className="mt-3 text-xl font-extrabold uppercase text-navy-deep">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <div className="gold-rule absolute inset-x-0 bottom-0 h-1" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Área de atuação */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
          <Reveal>
            <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-gold">
              Área de atuação
            </span>
            <h2 className="mt-3 text-3xl font-extrabold uppercase leading-[1.05] text-navy-deep sm:text-4xl">
              Atendemos São Paulo e região
            </h2>
            <div className="mt-5 h-1 w-20 rounded-full bg-gold" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Realizamos mudanças residenciais, comerciais e transporte de móveis em São Paulo e
              região. Não encontrou a sua cidade? Fale conosco pelo WhatsApp e confirmamos o
              atendimento.
            </p>
            <ul className="mt-7 flex flex-wrap gap-3">
              {["São Paulo", "Região metropolitana"].map((c) => (
                <li
                  key={c}
                  className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-secondary px-4 py-2 font-display text-sm font-bold uppercase tracking-wide text-navy"
                >
                  <MapPin className="size-4 text-gold" /> {c}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <WhatsAppButton>Fale conosco pelo WhatsApp</WhatsAppButton>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-navy-deep p-8">
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
                  backgroundSize: "42px 42px",
                }}
              />
              <div className="relative flex aspect-square items-center justify-center">
                <span className="absolute size-56 rounded-full border border-gold/30 sm:size-72" />
                <span className="absolute size-36 rounded-full border border-gold/50 sm:size-48" />
                <span className="absolute size-20 animate-pulse rounded-full bg-gold/20 sm:size-24" />
                <div className="relative flex flex-col items-center text-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-gold text-navy-deep">
                    <MapPin className="size-7" strokeWidth={2.5} />
                  </span>
                  <span className="mt-4 font-display text-2xl font-extrabold uppercase text-white">
                    São Paulo
                  </span>
                  <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                    e região
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="relative isolate overflow-hidden bg-navy py-20 sm:py-28">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, var(--gold) 0 2px, transparent 2px 26px)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold uppercase leading-[1.05] text-white sm:text-4xl md:text-5xl">
              Vai se mudar? Deixe o transporte com quem entende.
            </h2>
            <p className="mt-6 text-base text-white/75 sm:text-lg">
              Fale com a Monteiro Transportes e Mudanças e solicite seu orçamento.
            </p>
            <div className="mt-10 flex justify-center">
              <WhatsAppButton size="lg" variant="green" className="w-full sm:w-auto">
                Fazer orçamento no WhatsApp
              </WhatsAppButton>
            </div>
            <p className="mt-6 font-display text-lg font-bold uppercase tracking-wide text-gold">
              {PHONE_DISPLAY}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-deep pb-24 pt-16 text-white/70 sm:pb-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3">
          <div>
            <img
              src={logoAsset.url}
              alt="Monteiro Transportes e Mudanças"
              width={160}
              height={160}
              loading="lazy"
              className="h-24 w-auto rounded-xl bg-white object-contain p-1.5"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Mudanças residenciais, comerciais, pequenas mudanças e transporte de móveis com
              segurança e responsabilidade.
            </p>
          </div>
          <div>
            <h3 className="font-display text-base font-bold uppercase tracking-[0.2em] text-gold">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-base font-bold uppercase tracking-[0.2em] text-gold">
              Contato
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <MessageCircle className="size-4 text-gold" /> WhatsApp {PHONE_DISPLAY}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-gold" /> São Paulo e região
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-4 pt-6">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-white/45">
            Monteiro Transportes e Mudanças
          </p>
        </div>
      </footer>
    </div>
  );
}
