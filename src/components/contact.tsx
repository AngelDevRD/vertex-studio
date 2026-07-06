import { Calendar, Mail, MapPin, Phone, Clock } from "lucide-react";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/social-icons";
import { site } from "@/lib/data";

export function Contact() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hola ${site.name}, quiero más información sobre sus servicios.`
  )}`;

  return (
    <section id="contacto" className="border-t border-border py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="mt-4 text-balance text-muted">
            Cuéntanos sobre tu proyecto y te contactaremos en menos de 24 horas con una propuesta
            inicial. Estamos listos para ayudarte.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            📱 Escríbenos por WhatsApp
          </a>
          <a
            href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition hover:border-foreground/40"
          >
            📞 Llamar ahora
          </a>
          <a
            href={site.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition hover:border-foreground/40"
          >
            📅 Reservar una cita
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition hover:border-foreground/40"
          >
            📧 Enviar correo
          </a>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold">Envíanos un mensaje</h3>
            <p className="mt-1 text-sm text-muted">Respondemos en menos de 24 horas hábiles.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h3 className="text-lg font-semibold">Información de contacto</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-foreground/80">{site.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-foreground/80">{site.hours}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-accent" />
                  <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="text-foreground/80 hover:text-foreground">
                    {site.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-accent" />
                  <a href={`mailto:${site.email}`} className="text-foreground/80 hover:text-foreground">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar size={18} className="mt-0.5 shrink-0 text-accent" />
                  <a
                    href={site.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-foreground"
                  >
                    Agenda una llamada vía Calendly
                  </a>
                </li>
              </ul>

              <div className="mt-6 flex gap-3 border-t border-border pt-6">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:text-foreground"
                >
                  <InstagramIcon size={16} />
                </a>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:text-foreground"
                >
                  <FacebookIcon size={16} />
                </a>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:text-foreground"
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                src={site.mapEmbedUrl}
                title="Ubicación de Vertex Studio"
                width="100%"
                height="240"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 dark:invert dark:hue-rotate-180"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
