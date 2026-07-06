"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { plans } from "@/lib/data";

export function Pricing() {
  return (
    <section id="planes" className="border-t border-border bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Planes"
          title="Precios claros, sin sorpresas"
          description="Elige el plan que mejor se ajuste a la etapa de tu producto. Todos incluyen soporte post-lanzamiento."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-accent bg-background shadow-xl shadow-accent/10"
                  : "border-border bg-background"
              }`}
            >
              {plan.highlighted && (
                <span className="mb-4 inline-flex w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  Más elegido
                </span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted">{plan.description}</p>
              <p className="mt-6 text-3xl font-semibold">
                {plan.price}
                <span className="text-base font-normal text-muted">{plan.period}</span>
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  plan.highlighted
                    ? "bg-foreground text-background hover:opacity-85"
                    : "border border-border hover:border-foreground/40"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
