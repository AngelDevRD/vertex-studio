import {
  Code2,
  Smartphone,
  Palette,
  Workflow,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Vertex Studio",
  tagline: "Software que impulsa negocios internacionales",
  description:
    "Vertex Studio es una agencia de desarrollo de software que diseña, construye y escala productos digitales para empresas en todo el mundo.",
  url: "https://vertexstudio.dev",
  email: "hola@vertexstudio.dev",
  phone: "+1 (809) 555-0142",
  whatsapp: "18095550142",
  address: "Torre Vertex, Piso 12, Av. Winston Churchill, Santo Domingo, Rep. Dominicana",
  hours: "Lun - Vie · 9:00 AM - 6:00 PM (GMT-4)",
  calendlyUrl: "https://calendly.com/vertex-studio/consulta",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15122.87!2d-69.9312!3d18.4861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI5JzEwLjAiTiA2OcKwNTUnNTIuMyJX!5e0!3m2!1ses!2sdo!4v1700000000000",
  social: {
    instagram: "https://instagram.com/vertexstudio",
    facebook: "https://facebook.com/vertexstudio",
    tiktok: "https://tiktok.com/@vertexstudio",
    linkedin: "https://linkedin.com/company/vertexstudio",
  },
};

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    description:
      "Sitios y plataformas de alto rendimiento construidos con stacks modernos, listos para escalar.",
    features: ["Next.js / React", "E-commerce", "APIs y backend", "Core Web Vitals"],
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Apps nativas y multiplataforma con experiencia fluida en iOS y Android.",
    features: ["Flutter / React Native", "Publicación en stores", "Push notifications", "Offline-first"],
  },
  {
    icon: Palette,
    title: "Diseño UI/UX",
    description: "Interfaces claras y persuasivas basadas en research real, no en suposiciones.",
    features: ["Design systems", "Prototipado", "User research", "Accesibilidad"],
  },
  {
    icon: Workflow,
    title: "Automatización",
    description: "Flujos que eliminan trabajo manual y conectan tus herramientas entre sí.",
    features: ["Integraciones API", "RPA", "Workflows internos", "Reportes automáticos"],
  },
  {
    icon: BrainCircuit,
    title: "Inteligencia Artificial",
    description: "Modelos y agentes de IA aplicados a problemas reales de negocio.",
    features: ["Agentes con LLMs", "Automatización con IA", "Análisis predictivo", "RAG / chatbots"],
  },
];

export const process = [
  {
    step: "01",
    title: "Descubrimiento",
    description: "Entendemos tu negocio, objetivos y restricciones técnicas antes de proponer nada.",
  },
  {
    step: "02",
    title: "Estrategia & Diseño",
    description: "Definimos arquitectura, alcance y experiencia de usuario con prototipos validables.",
  },
  {
    step: "03",
    title: "Desarrollo",
    description: "Construimos en sprints cortos, con entregas visibles y feedback continuo.",
  },
  {
    step: "04",
    title: "QA & Lanzamiento",
    description: "Pruebas rigurosas, performance y seguridad antes de salir a producción.",
  },
  {
    step: "05",
    title: "Soporte & Escalado",
    description: "Monitoreo, mejoras iterativas y escalado según el crecimiento real del producto.",
  },
];

export type PortfolioItem = {
  title: string;
  category: string;
  description: string;
  metric: string;
};

export const portfolio: PortfolioItem[] = [
  {
    title: "Nimbus Finance",
    category: "Fintech · Web App",
    description: "Plataforma de gestión financiera para pymes con dashboards en tiempo real.",
    metric: "+38% retención mensual",
  },
  {
    title: "Loop Health",
    category: "Healthtech · App Móvil",
    description: "App de telemedicina con agendamiento inteligente y recordatorios automáticos.",
    metric: "120K+ descargas",
  },
  {
    title: "Aster Retail",
    category: "E-commerce · IA",
    description: "Motor de recomendaciones con IA que personaliza el catálogo en tiempo real.",
    metric: "+24% ticket promedio",
  },
  {
    title: "Flowbase",
    category: "SaaS · Automatización",
    description: "Automatización de operaciones internas para un equipo de 200+ personas.",
    metric: "-65% horas manuales",
  },
];

export const caseStudies = [
  {
    quote:
      "Vertex Studio rediseñó nuestra plataforma en 10 semanas y duplicamos la conversión del onboarding.",
    author: "Directora de Producto",
    company: "Nimbus Finance",
  },
  {
    quote:
      "El equipo entendió nuestro problema de negocio, no solo el técnico. El resultado habla por sí solo.",
    author: "CEO",
    company: "Flowbase",
  },
  {
    quote: "Lanzamos la app en tiempo récord sin sacrificar calidad ni performance.",
    author: "CTO",
    company: "Loop Health",
  },
];

export const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Flutter",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Tailwind CSS",
  "GraphQL",
  "OpenAI",
];

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
};

export const team: TeamMember[] = [
  { name: "Alejandro Reyes", role: "CEO & Arquitecto de Software", initials: "AR" },
  { name: "Camila Torres", role: "Directora de Diseño", initials: "CT" },
  { name: "Diego Fernández", role: "Lead Mobile Engineer", initials: "DF" },
  { name: "Sofía Martínez", role: "Head of AI", initials: "SM" },
];

export type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    price: "$2,500",
    period: "/ proyecto",
    description: "Ideal para landing pages o MVPs simples.",
    features: ["1 producto digital", "Diseño UI/UX incluido", "Hasta 5 páginas", "Soporte 30 días"],
    cta: "Empezar proyecto",
  },
  {
    name: "Growth",
    price: "$7,900",
    period: "/ proyecto",
    description: "Para productos web o móviles completos.",
    features: [
      "Web app o app móvil completa",
      "Design system a medida",
      "Integraciones API",
      "Soporte 90 días",
      "1 iteración post-lanzamiento",
    ],
    highlighted: true,
    cta: "Solicitar propuesta",
  },
  {
    name: "Scale",
    price: "A medida",
    period: "",
    description: "Para empresas con necesidades complejas o multi-producto.",
    features: [
      "Equipo dedicado",
      "Arquitectura escalable",
      "IA y automatización avanzada",
      "SLA y soporte prioritario",
      "Roadmap trimestral",
    ],
    cta: "Hablar con ventas",
  },
];

export const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar un proyecto?",
    answer:
      "Depende del alcance: una landing page toma 2-3 semanas, un MVP 6-10 semanas y un producto completo de 3 a 6 meses. Definimos el cronograma exacto en la fase de descubrimiento.",
  },
  {
    question: "¿Trabajan con empresas fuera de Latinoamérica?",
    answer:
      "Sí, trabajamos con clientes en Norteamérica, Europa y Latinoamérica, con equipos acostumbrados a colaboración remota y husos horarios distintos.",
  },
  {
    question: "¿Qué pasa después del lanzamiento?",
    answer:
      "Todos los planes incluyen soporte post-lanzamiento. También ofrecemos contratos de mantenimiento continuo y escalado según el crecimiento del producto.",
  },
  {
    question: "¿Puedo pedir solo una parte del servicio, como diseño UI/UX?",
    answer:
      "Sí, cada servicio (desarrollo, diseño, automatización, IA) puede contratarse de forma independiente o combinada.",
  },
  {
    question: "¿Cómo empiezo a trabajar con Vertex Studio?",
    answer:
      "Agenda una llamada de descubrimiento gratuita desde el botón de reserva o escríbenos por WhatsApp. En 48 horas te enviamos una propuesta inicial.",
  },
];
