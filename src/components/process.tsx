"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { process } from "@/lib/data";

export function Process() {
  return (
    <section id="proceso" className="border-t border-border bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Proceso de trabajo"
          title="Un método claro, de la idea al lanzamiento"
          description="Sin cajas negras: sabes en qué etapa está tu proyecto en todo momento."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-5">
          {process.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative rounded-2xl border border-border bg-background p-6"
            >
              <p className="text-3xl font-semibold text-accent/40">{item.step}</p>
              <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
