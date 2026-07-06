"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { portfolio, caseStudies } from "@/lib/data";

export function Portfolio() {
  return (
    <section id="portafolio" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Portafolio"
          title="Productos que ya están generando resultados"
          description="Una muestra de los proyectos que hemos construido para clientes internacionales."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {portfolio.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-accent/15 to-accent-2/10">
                <span className="text-xl font-semibold text-foreground/30">{item.title}</span>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">{item.category}</p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
                <p className="mt-4 text-sm font-medium text-foreground">{item.metric}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading eyebrow="Casos de éxito" title="Lo que dicen quienes ya trabajaron con nosotros" />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <motion.figure
                key={cs.author}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-surface p-7"
              >
                <Quote size={20} className="text-accent" />
                <blockquote className="mt-4 text-sm text-foreground/85">“{cs.quote}”</blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-medium">{cs.author}</span>
                  <span className="text-muted"> · {cs.company}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
