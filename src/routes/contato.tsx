import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Loader2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { btn } from "@/components/ui/btn";
import { Reveal } from "@/components/layout/Reveal";
import { WhatsAppIcon } from "@/components/layout/WhatsAppButton";
import { HOTEL } from "@/lib/site";
import { EMAIL_RE, getContactApiUrl, sendContact } from "@/lib/contact-api";
import { cn } from "@/lib/utils";

const TITLE = "Contato e Localização | Hotel Moreno - Itajobi SP";
const DESC =
  "Entre em contato com o Hotel Moreno em Itajobi - SP. Consulte disponibilidade pelo WhatsApp (17) 99715-1608 ou telefone (17) 3546-1608.";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contato,
});

const CONTACTS = [
  { icon: MapPin, label: "Endereço", value: `${HOTEL.street}\n${HOTEL.cityLine}`, href: HOTEL.mapsHref, ext: true },
  { icon: MessageCircle, label: "WhatsApp", value: HOTEL.whatsappDisplay, href: HOTEL.whatsappHref, ext: true },
  { icon: Phone, label: "Telefone", value: HOTEL.phoneDisplay, href: HOTEL.phoneHref },
  { icon: Mail, label: "E-mail", value: HOTEL.email, href: `mailto:${HOTEL.email}` },
];

function Contato() {
  return (
    <>
      <section className="bg-surface pb-16 pt-36 md:pt-44">
        <div className="container-site">
          <p className="eyebrow">Fale conosco</p>
          <h1 className="mt-4 text-5xl md:text-6xl">Entre em contato</h1>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Estamos à disposição para esclarecer suas dúvidas e ajudar você a planejar sua estadia.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <ul className="divide-y divide-border">
              {CONTACTS.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex gap-4 py-6"
                  >
                    <c.icon className="mt-1 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.label}</span>
                      <span className="mt-1 block whitespace-pre-line break-words text-lg group-hover:text-accent">
                        {c.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <MapSection />
    </>
  );
}

type Fields = { name: string; email: string; phone: string; subject: string; message: string };
const EMPTY: Fields = { name: "", email: "", phone: "", subject: "Informações gerais", message: "" };

function validate(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (!f.name.trim()) e.name = "Informe seu nome completo.";
  if (!f.email.trim()) e.email = "Informe seu e-mail.";
  else if (!EMAIL_RE.test(f.email.trim())) e.email = "Informe um e-mail válido.";
  if (!f.message.trim()) e.message = "Escreva sua mensagem.";
  return e;
}

const inputCls =
  "mt-2 block w-full rounded-md border border-input bg-surface px-4 py-3 text-base outline-none transition-colors focus:border-foreground focus:ring-2 focus:ring-ring/20";

function ContactForm() {
  const [f, setF] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [configured, setConfigured] = useState(true);
  useEffect(() => setConfigured(getContactApiUrl() !== null), []);

  const set = (k: keyof Fields) => (e: { target: { value: string } }) => setF((p) => ({ ...p, [k]: e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    const errs = validate(f);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    const res = await sendContact({
      name: f.name.trim(),
      email: f.email.trim(),
      phone: f.phone.trim(),
      subject: f.subject,
      message: f.message.trim(),
    });
    if (res.ok) {
      setStatus("success");
      setF(EMPTY);
    } else {
      if (res.reason === "not_configured") setConfigured(false);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-lg bg-surface p-10 shadow-soft">
        <h2 className="text-3xl">Mensagem enviada</h2>
        <p className="mt-3 text-muted-foreground">Obrigado pelo contato! Nossa equipe responderá em breve.</p>
        <button type="button" onClick={() => setStatus("idle")} className={cn(btn({ variant: "outline" }), "mt-6")}>
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="rounded-lg bg-surface p-6 shadow-soft md:p-10">
      <h2 className="text-3xl">Envie uma mensagem</h2>

      {!configured && (
        <div role="alert" className="mt-6 rounded-md border border-accent/30 bg-accent/5 p-4 text-sm">
          O envio online ainda não está disponível. Fale com a gente pelo WhatsApp para uma resposta rápida.
          <a
            href={HOTEL.whatsappMessageHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-2 font-medium text-accent"
          >
            <WhatsAppIcon className="h-4 w-4" /> Conversar pelo WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}
      {configured && status === "error" && (
        <div role="alert" className="mt-6 rounded-md border border-accent/30 bg-accent/5 p-4 text-sm">
          Não foi possível enviar sua mensagem agora. Tente novamente ou fale conosco pelo{" "}
          <a href={HOTEL.whatsappMessageHref} target="_blank" rel="noopener noreferrer" className="font-medium text-accent underline">
            WhatsApp
          </a>
          .
        </div>
      )}

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Nome completo" required error={errors.name} className="sm:col-span-2">
          <input id="name" autoComplete="name" value={f.name} onChange={set("name")} className={inputCls} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
        </Field>
        <Field label="E-mail" required error={errors.email} id="email">
          <input id="email" type="email" autoComplete="email" value={f.email} onChange={set("email")} className={inputCls} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
        </Field>
        <Field label="Telefone / WhatsApp" id="phone">
          <input id="phone" type="tel" autoComplete="tel" value={f.phone} onChange={set("phone")} className={inputCls} />
        </Field>
        <Field label="Assunto" id="subject" className="sm:col-span-2">
          <select id="subject" value={f.subject} onChange={set("subject")} className={inputCls}>
            <option>Informações gerais</option>
            <option>Consultar disponibilidade</option>
            <option>Outros</option>
          </select>
        </Field>
        <Field label="Mensagem" required error={errors.message} id="message" className="sm:col-span-2">
          <textarea id="message" rows={5} value={f.message} onChange={set("message")} className={inputCls} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
        </Field>
      </div>
      <button type="submit" disabled={status === "sending"} className={cn(btn(), "mt-8 w-full sm:w-auto")}>
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Enviando…
          </>
        ) : (
          "Enviar mensagem"
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  error,
  id = "name",
  className,
  children,
}: {
  label: string;
  required?: boolean | undefined;
  error?: string | undefined;
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-medium">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} className="mt-1.5 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function MapSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && (setShow(true), io.disconnect()), {
      rootMargin: "200px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section className="bg-surface py-20">
      <div className="container-site">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Localização</p>
            <h2 className="mt-4 text-4xl">Como chegar</h2>
            <p className="mt-3 text-muted-foreground">{HOTEL.fullAddress}</p>
          </div>
          <a href={HOTEL.mapsHref} target="_blank" rel="noopener noreferrer" className={btn({ variant: "outline" })}>
            Abrir no Google Maps <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div ref={ref} className="aspect-[4/3] overflow-hidden rounded-lg bg-muted md:aspect-[21/9]">
          {show && (
            <iframe
              title="Mapa com a localização do Hotel Moreno"
              src={HOTEL.mapsEmbed}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          )}
        </div>
      </div>
    </section>
  );
}
