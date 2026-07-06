import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheck,
  FaCode,
  FaGlobe,
  FaLaptopCode,
  FaLayerGroup,
  FaLock,
  FaRocket,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";

import Carousel from "../components/Carousel";
import Choose from "../components/Choose";
import WhatsApp from "../components/Whatsapp";

const SERVICES = [
  {
    icon: FaLaptopCode,
    number: "01",
    category: "Digital Engineering",
    title: "Web Development",
    description:
      "We design and engineer modern websites and web applications that are fast, secure, responsive, and built to support real business growth.",
    features: [
      "Corporate websites",
      "Web applications",
      "Responsive interfaces",
      "Performance optimization",
    ],
  },
  {
    icon: FaServer,
    number: "02",
    category: "Technology Infrastructure",
    title: "IT Solutions",
    description:
      "We help organizations improve their technology operations with reliable systems, modern infrastructure, and practical digital solutions.",
    features: [
      "IT consulting",
      "Systems integration",
      "Infrastructure solutions",
      "Technical support",
    ],
  },
  {
    icon: FaShieldAlt,
    number: "03",
    category: "Digital Protection",
    title: "Cybersecurity",
    description:
      "We strengthen applications, APIs, systems, and digital assets with security-focused solutions designed for an evolving threat landscape.",
    features: [
      "Security assessments",
      "Application security",
      "API protection",
      "System hardening",
    ],
  },
];

const EXPERTISE = [
  {
    icon: FaCode,
    title: "Modern Engineering",
    description:
      "Clean, maintainable, and scalable solutions built with modern technologies.",
  },
  {
    icon: FaLock,
    title: "Security by Design",
    description:
      "Protection is integrated from the beginning instead of added after deployment.",
  },
  {
    icon: FaLayerGroup,
    title: "Scalable Architecture",
    description:
      "Technology foundations designed to support long-term growth and expansion.",
  },
  {
    icon: FaRocket,
    title: "Performance Focused",
    description:
      "Fast and reliable digital experiences engineered for real-world use.",
  },
];

const STATS = [
  ["Secure", "By design"],
  ["Modern", "By technology"],
  ["Scalable", "By architecture"],
  ["Focused", "On real outcomes"],
];

const PROCESS = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn about your organization, goals, users, challenges, and technical requirements.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We define the right architecture, technologies, user experience, and delivery roadmap.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We design, develop, test, and refine your solution with security and quality in mind.",
  },
  {
    number: "04",
    title: "Launch & Grow",
    description:
      "We deploy, optimize, and prepare your digital solution for sustainable growth.",
  },
];

function Eyebrow({ children, dark = false, pulse = false }) {
  return (
    <div
      className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 ${
        dark ? "border-white/10 bg-white/5" : "border-blue-100 bg-blue-50"
      }`}
    >
      <span className="relative flex h-2.5 w-2.5">
        {pulse && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-40" />
        )}
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
            dark ? "bg-blue-400" : "bg-blue-600"
          }`}
        />
      </span>

      <span
        className={`text-[11px] font-black uppercase tracking-[0.22em] ${
          dark ? "text-blue-300" : "text-blue-700"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

function SectionHeading({ label, title, description, align = "center" }) {
  const isLeft = align === "left";

  return (
    <div
      className={`flex flex-col ${
        isLeft ? "items-start text-left" : "items-center text-center"
      }`}
    >
      <Eyebrow>{label}</Eyebrow>

      <h2 className="mt-6 max-w-4xl text-3xl font-black leading-[1.08] text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function PrimaryButton({ to, children }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-black text-white shadow-[0_18px_40px_rgba(37,99,235,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
    >
      {children}
      <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

function SecondaryButton({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-7 py-4 font-black text-slate-900 transition duration-300 hover:-translate-y-1 hover:border-slate-950 hover:bg-slate-950 hover:text-white"
    >
      {children}
    </Link>
  );
}

function ServiceCard({
  icon: Icon,
  number,
  category,
  title,
  description,
  features,
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 transition duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)] sm:p-8">
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-xl text-white shadow-lg shadow-slate-950/15 transition duration-500 group-hover:bg-blue-600">
            <Icon />
          </div>

          <span className="text-sm font-black tracking-[0.2em] text-slate-300">
            {number}
          </span>
        </div>

        <p className="mt-8 text-[11px] font-black uppercase tracking-[0.2em] text-blue-600">
          {category}
        </p>

        <h3 className="mt-3 text-2xl font-black text-slate-950">{title}</h3>

        <p className="mt-4 leading-7 text-slate-600">{description}</p>

        <div className="mt-7 space-y-3 border-t border-slate-100 pt-6">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 text-sm font-semibold text-slate-700"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[10px] text-blue-600">
                <FaCheck />
              </span>

              <span>{feature}</span>
            </div>
          ))}
        </div>

        <Link
          to="/services"
          className="mt-8 inline-flex items-center gap-3 font-black text-slate-950 transition hover:text-blue-600"
        >
          Explore service
          <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

function IntroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20 lg:px-8">
        <div>
          <Eyebrow pulse>Nexoshield Technology Solutions</Eyebrow>

          <h1 className="mt-7 max-w-4xl text-4xl font-black leading-[1.02] text-slate-950 sm:text-5xl lg:text-6xl xl:text-[4.6rem]">
            Technology engineered to{" "}
            <span className="relative inline-block text-blue-600">
              perform.
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-blue-100" />
            </span>
            <br />
            Security designed to <span className="text-blue-600">protect.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            We design, build, and secure digital solutions that help
            organizations operate smarter, move faster, and grow with
            confidence.
          </p>

          <p className="mt-4 max-w-2xl leading-8 text-slate-500">
            From modern web platforms and technology infrastructure to
            cybersecurity, Nexoshield brings engineering, strategy, and
            protection together in one connected delivery approach.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton to="/services">Explore Our Services</PrimaryButton>
            <SecondaryButton to="/contact">Talk to Our Team</SecondaryButton>
          </div>
        </div>

        <ApproachPanel />
      </div>
    </section>
  );
}

function ApproachPanel() {
  return (
    <aside className="relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-950 p-7 text-white shadow-[0_35px_100px_rgba(15,23,42,0.35)] sm:p-9">
      <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-7">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-blue-400">
            Our Technology Approach
          </p>

          <h2 className="mt-3 max-w-md text-2xl font-black leading-tight sm:text-3xl">
            Built beyond the ordinary.
          </h2>
        </div>

        <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-xl text-blue-400 sm:flex">
          <FaGlobe />
        </div>
      </div>

      <div className="mt-7 space-y-3">
        {EXPERTISE.map(({ icon: Icon, title, description }, index) => (
          <div
            key={title}
            className="group/item flex gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4 transition duration-300 hover:border-blue-500/30 hover:bg-white/[0.07] sm:p-5"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition duration-300 group-hover/item:bg-blue-600 group-hover/item:text-white">
              <Icon />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black text-slate-600">
                  0{index + 1}
                </span>

                <h3 className="font-black text-white">{title}</h3>
              </div>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
        <div>
          <p className="text-sm font-black text-white">
            One technology partner.
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Development. Infrastructure. Security.
          </p>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm">
          <FaArrowRight />
        </div>
      </div>
    </aside>
  );
}

function StatsStrip() {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-5 sm:px-6 md:grid-cols-4 md:divide-x md:divide-y-0 lg:px-8">
        {STATS.map(([title, subtitle]) => (
          <div key={title} className="px-5 py-7 text-center">
            <p className="text-lg font-black text-slate-950">{title}</p>

            <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              {subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          label="What We Do"
          title="Three capabilities. One connected technology partner."
          description="We bring development, technology infrastructure, and cybersecurity together to help organizations build stronger digital foundations."
        />

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-6 py-3.5 font-black text-slate-900 transition duration-300 hover:border-blue-600 hover:text-blue-600"
          >
            View All Services
            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              label="How We Work"
              title="A clear process from idea to impact."
              description="Every project follows a practical process designed to reduce uncertainty, improve collaboration, and deliver stronger results."
              align="left"
            />

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 font-black text-blue-600"
            >
              Discuss your project
              <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-10 left-[27px] top-10 hidden w-px bg-slate-200 sm:block"
            />

            <div className="space-y-5">
              {PROCESS.map((step) => (
                <ProcessStep key={step.number} {...step} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ number, title, description }) {
  return (
    <article className="group relative rounded-[1.75rem] border border-slate-200 bg-white p-6 transition duration-300 hover:border-blue-200 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:ml-16 sm:p-7">
      <div className="absolute -left-[4.8rem] top-7 hidden h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-black text-blue-600 shadow-sm sm:flex">
        {number}
      </div>

      <div className="flex items-start justify-between gap-6">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 sm:hidden">
            Step {number}
          </span>

          <h3 className="mt-2 text-xl font-black text-slate-950 sm:mt-0 sm:text-2xl">
            {title}
          </h3>

          <p className="mt-3 max-w-xl leading-7 text-slate-600">
            {description}
          </p>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
          <FaArrowRight className="-rotate-45 text-xs transition-transform duration-300 group-hover:rotate-0" />
        </div>
      </div>
    </article>
  );
}

function CtaSection() {
  return (
    <section className="px-5 pb-6 sm:px-6 sm:pb-8 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-slate-950 px-6 py-16 text-white shadow-[0_35px_100px_rgba(15,23,42,0.28)] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <Eyebrow dark>Ready to build?</Eyebrow>

            <h2 className="mt-7 max-w-4xl text-3xl font-black leading-[1.08] sm:text-4xl lg:text-6xl">
              Let's turn your next idea into something{" "}
              <span className="text-blue-400">powerful.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Bring us your challenge, idea, or project. We will help you
              transform it into a secure, scalable, and high-performing digital
              solution.
            </p>
          </div>

          <Link
            to="/booking"
            className="group inline-flex items-center justify-center gap-4 rounded-2xl bg-blue-600 px-7 py-4 font-black text-white shadow-[0_20px_50px_rgba(37,99,235,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-blue-500 sm:px-8 sm:py-5"
          >
            Start Your Project
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition duration-300 group-hover:translate-x-1">
              <FaArrowRight className="text-sm" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <main className="overflow-hidden bg-white text-slate-700">
      <section className="relative">
        <Carousel />
      </section>

      <WhatsApp />
      <IntroSection />
      <StatsStrip />
      <Choose />
      <ServicesSection />
      <ProcessSection />
      <CtaSection />
    </main>
  );
}

export default Home;
