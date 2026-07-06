"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { technologies, team } from "@/lib/data";

export function TechTeam() {
  return (
    <>
      <section id="tecnologias" className="border-t border-border bg-surface py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="Tecnologías" title="Un stack moderno, elegido por confiabilidad" />

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section id="equipo" className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Equipo"
            title="Personas que se especializan en llevar productos a producción"
          />

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-surface p-6 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-lg font-semibold text-accent">
                  {member.initials}
                </div>
                <h3 className="mt-4 text-sm font-semibold">{member.name}</h3>
                <p className="mt-1 text-xs text-muted">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
