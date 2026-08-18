import { createFileRoute } from "@tanstack/react-router";

import resumeAsset from "@/assets/resume.pdf.asset.json";
import workLoyalty from "@/assets/work-loyalty.jpg";
import workQr from "@/assets/work-qr.jpg";
import workOrdering from "@/assets/work-ordering.png";
import workCustomer from "@/assets/work-customer360.jpg";
import workRoomy from "@/assets/work-roomy.jpg";
import workRewards from "@/assets/work-rewards.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hashim Saleem — UX/UI Product Designer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Hashim Saleem, UX/UI Product Designer in Islamabad with 3+ years designing restaurant, property, payments and loyalty products.",
      },
      { property: "og:title", content: "Hashim Saleem — UX/UI Product Designer" },
      {
        property: "og:description",
        content:
          "End-to-end product design across RMS, PMS, online ordering, QR payments and loyalty platforms.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "+923095307264";

const work = [
  {
    title: "Points & Gifts Loyalty Program",
    client: "Boomingo · Web & Mobile",
    image: workLoyalty,
    description:
      "Designed and optimized the points and gifts programs across Boomingo's web and mobile loyalty platform. The reworked earning and redemption journey lifted user engagement by 20% and improved rewards efficiency by 30%.",
  },
  {
    title: "QR Payment & Digital Ordering",
    client: "Roomy · Mobile Web",
    image: workQr,
    description:
      "Unified payments and menu ordering into one experience so guests can order from their table, split bills, pay for individual items or a custom amount from their phone. Result: an 80% faster, more seamless dining experience.",
  },
  {
    title: "Online Ordering System",
    client: "Roomy · Web Platform",
    image: workOrdering,
    description:
      "An end-to-end online ordering and order-monitoring system for restaurants. Streamlined workflows cut operational effort by 70% and improved order monitoring efficiency by 30% with far better system visibility.",
  },
  {
    title: "Customer Profile & Details",
    client: "ChowPOS RMS · Web",
    image: workCustomer,
    description:
      "A centralized customer view combining profile data, visit frequency, spending insights, ordering behavior, notes, feedback and full order history. Structured and data-driven, optimized for quick scanning by restaurant staff.",
  },
  {
    title: "Roomy Mobile App Revamp",
    client: "Roomy · iOS & Android",
    image: workRoomy,
    description:
      "Redesigned the end-to-end room booking experience with intuitive flows and a user-focused interface, and am currently designing the loyalty rewards experience to drive engagement and repeat bookings.",
  },
  {
    title: "Loyalty Rewards Experience",
    client: "ChowPOS RMS · Web & Mobile",
    image: workRewards,
    description:
      "A customer-centric rewards journey that encourages repeat purchases and redemption, with the potential to drive 30–40% growth in repeat orders and restaurant sales through stronger retention.",
  },
];

const experience = [
  {
    role: "Product UX/UI Designer",
    company: "Roomy Pvt Ltd.",
    period: "June 2025 — Present",
    body: "UX/Product Designer across Roomy's digital product ecosystem — RMS, PMS, Online Ordering, QR Payments, Loyalty and web/mobile apps. Translate complex business and user requirements into intuitive, scalable, user-centered product experiences, collaborating across multiple products to solve operational and customer-facing challenges.",
  
  },
  {
    role: "UI/UX Designer",
    company: "MaxRemind Inc",
    period: "September 2024 — June 2025",
    body: "Delivered websites, landing pages, digital campaigns, banners and social content across client projects. Key accomplishment: the end-to-end web design for Union Health Solutions, a US-based allergy & immunotherapy provider, aligned with their brand and services.",
  },
  {
    role: "UI/UX Designer",
    company: "AffordIT Ltd. (remote)",
    period: "October 2023 — July 2024",
    body: "Rejoined as a remote designer after Lala Group, contributing to a diverse range of client projects: social creatives, responsive websites, landing pages and mobile applications with visually consistent, user-focused experiences.",
  },
  {
    role: "UI/UX Designer",
    company: "Lala Group of Companies",
    period: "March 2023 — August 2023",
    body: "Worked across the group's four main domains and designed an Umrah-based website, covering web experiences end to end during a five-month tenure.",
  },
  {
    role: "UI/UX Designer",
    company: "Afford-IT Ltd.",
    period: "December 2022 — June 2023",
    body: "Designed social media posts, web experiences and mobile apps for multiple clients as part of the in-house design team.",
  },
];

const skills = [
  { name: "Product Thinking", level: "Expert" },
  { name: "Product Design", level: "Expert" },
  { name: "Figma", level: "Expert" },
  { name: "Adobe XD", level: "Expert" },
  { name: "UX Research", level: "Advanced" },
  { name: "Adobe Creative Suite", level: "Advanced" },
];

const languages = [
  { name: "Punjabi", level: "Native" },
  { name: "Urdu", level: "Native" },
  { name: "English", level: "Intermediate" },
];

const metrics = [
  { value: "20%", label: "Higher user engagement" },
  { value: "30%", label: "Better rewards efficiency" },
  { value: "70%", label: "Less operational effort" },
  { value: "80%", label: "Faster dining experience" },
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="hero-glow relative overflow-hidden border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-28 text-center sm:py-36">
          <p className="eyebrow">Islamabad, Pakistan · 3+ years</p>
          <h1 className="mt-6 text-5xl leading-[0.95] font-bold sm:text-7xl lg:text-8xl">
            Hashim <span className="text-gradient-warm">Saleem</span>
          </h1>
          <p className="mt-5 font-display text-lg tracking-wide text-muted-foreground sm:text-2xl">
            UX/UI Product Designer
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={`tel:${PHONE}`} className="btn-base btn-primary hover:btn-primary-hover">
              Call Now
            </a>
            <a
              href={resumeAsset.url}
              download="Hashim-Saleem-Resume.pdf"
              className="btn-base btn-outline hover:btn-primary-hover"
            >
              Download Resume
            </a>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="surface-card px-4 py-6">
                <p className="font-display text-3xl font-bold text-gradient-warm">{m.value}</p>
                <p className="mt-2 text-xs text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading eyebrow="Summary" title="Designing products that move numbers" />
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            UX/Product Designer with 3+ years of experience designing and optimizing digital
            products across Restaurant Management, Property Management, Online Ordering, Payments,
            Loyalty and mobile applications — turning complex business and user requirements into
            intuitive, scalable, data-driven experiences on web and mobile.
          </p>
          <p>
            I specialize in end-to-end product design: understanding user needs, defining workflows,
            wireframing, prototyping, UI design, and refining experiences against business goals and
            usability.
          </p>
          <p>
            Proficient in Figma, Adobe Creative Suite, design systems, prototyping, user flows and
            interaction design, with a strong focus on products that are both user-centric and
            commercially impactful.
          </p>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading eyebrow="Work" title="Selected product work" />
          <div className="grid gap-8 sm:grid-cols-2">
            {work.map((project) => (
              <article key={project.title} className="surface-card overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} interface design`}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-6">
                  <p className="eyebrow">{project.client}</p>
                  <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-4xl px-6 py-24">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <ol className="relative space-y-10 border-l border-border pl-8">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative">
              <span
                aria-hidden
                className="absolute -left-[38px] top-2 size-3 rounded-full bg-primary"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {job.role} <span className="text-muted-foreground">· {job.company}</span>
                </h3>
                <p className="text-xs text-accent-foreground">{job.period}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{job.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Education, skills, languages */}
      <section id="skills" className="border-t border-border bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-24 lg:grid-cols-3">
          <div className="surface-card p-7">
            <p className="eyebrow">Education</p>
            <h3 className="mt-4 text-lg font-semibold">BS Software Engineering</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Capital University of Science &amp; Technology
            </p>
            <p className="mt-1 text-xs text-accent-foreground">February 2016 — July 2022</p>
          </div>
          <div className="surface-card p-7">
            <p className="eyebrow">Skills</p>
            <ul className="mt-4 space-y-3">
              {skills.map((s) => (
                <li key={s.name} className="flex items-center justify-between text-sm">
                  <span>{s.name}</span>
                  <span className="text-xs text-accent-foreground">{s.level}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-card p-7">
            <p className="eyebrow">Languages</p>
            <ul className="mt-4 space-y-3">
              {languages.map((l) => (
                <li key={l.name} className="flex items-center justify-between text-sm">
                  <span>{l.name}</span>
                  <span className="text-xs text-accent-foreground">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="hero-glow border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Let's build something useful</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <a className="hover:text-foreground" href={`tel:${PHONE}`}>
              +92 309-5307264
            </a>
            <a className="hover:text-foreground" href="mailto:hashimsaleem1998@gmail.com">
              hashimsaleem1998@gmail.com
            </a>
            <a
              className="hover:text-foreground"
              href="https://hashimsaleem1998.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              hashimsaleem1998.vercel.app
            </a>
            <span>Islamabad, Pakistan</span>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={`tel:${PHONE}`} className="btn-base btn-primary hover:btn-primary-hover">
              Call Now
            </a>
            <a
              href={resumeAsset.url}
              download="Hashim-Saleem-Resume.pdf"
              className="btn-base btn-outline hover:btn-primary-hover"
            >
              Download Resume
            </a>
          </div>
          <p className="mt-12 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Hashim Saleem
          </p>
        </div>
      </footer>
    </main>
  );
}
