import { Container } from "@/components/container";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TikTokIcon } from "@/components/social-icons";
import { site } from "@/lib/data";

const columns = [
  {
    title: "Servicios",
    links: [
      { label: "Desarrollo Web", href: "#servicios" },
      { label: "Apps Móviles", href: "#servicios" },
      { label: "Diseño UI/UX", href: "#servicios" },
      { label: "Automatización", href: "#servicios" },
      { label: "Inteligencia Artificial", href: "#servicios" },
    ],
  },
  {
    title: "Compañía",
    links: [
      { label: "Proceso de trabajo", href: "#proceso" },
      { label: "Portafolio", href: "#portafolio" },
      { label: "Equipo", href: "#equipo" },
      { label: "Planes", href: "#planes" },
    ],
  },
  {
    title: "Soporte",
    links: [
      { label: "Preguntas frecuentes", href: "#faq" },
      { label: "Contáctanos", href: "#contacto" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="text-sm font-semibold tracking-tight">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm text-muted">{site.description}</p>
          <div className="mt-5 flex gap-3">
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
              href={site.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:text-foreground"
            >
              <TikTokIcon size={16} />
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

        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">{col.title}</p>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-foreground/80 transition hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted md:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
          <p>{site.address}</p>
        </Container>
      </div>
    </footer>
  );
}
