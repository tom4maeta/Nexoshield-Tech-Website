import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheck,
  FaCode,
  FaDesktop,
  FaLaptopMedical,
  FaNetworkWired,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";

import WhatsApp from "../components/Whatsapp";
import softwareImg from "../assets/images/softwareimage.jpg";
import webImg from "../assets/images/web.jpg";
import posImg from "../assets/images/Pos.jpeg";
import itImg from "../assets/images/IT.jpg";
import pentestImg from "../assets/images/Pentest.jpg";
import hardeningImg from "../assets/images/Hardening.jpeg";
import cyberImg from "../assets/images/Cyber.jpeg";
import accessoriesImg from "../assets/images/Accesories.jpg";
import repairImg from "../assets/images/Repair.jpg";
import consultingImg from "../assets/images/Consulting.jpg";

export const SERVICES = [
  {
    id: "software",
    title: "Software Development",
    image: softwareImg,
    description: "Custom software solutions built for performance and scalability.",
  },
  {
    id: "web",
    title: "Web Design & Development",
    image: webImg,
    description: "Modern, responsive, and SEO-friendly websites.",
  },
  {
    id: "pos",
    title: "POS Systems",
    image: posImg,
    description: "Smart retail and business transaction systems.",
  },
  {
    id: "it",
    title: "IT Services",
    image: itImg,
    description: "Reliable IT infrastructure and support services.",
  },
  {
    id: "pentesting",
    title: "Penetration Testing",
    image: pentestImg,
    description: "Identify vulnerabilities before attackers do.",
  },
  {
    id: "hardening",
    title: "Systems Hardening",
    image: hardeningImg,
    description: "Secure configurations for maximum protection.",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    image: cyberImg,
    description: "Comprehensive protection for digital systems.",
  },
  {
    id: "accessories",
    title: "Computer Accessories",
    image: accessoriesImg,
    description: "Quality hardware for your computing needs.",
  },
  {
    id: "repair",
    title: "Computer Repair",
    image: repairImg,
    description: "Fast and reliable repair services.",
  },
  {
    id: "consulting",
    title: "IT Consulting",
    image: consultingImg,
    description: "Strategic IT solutions for business growth.",
  },
];

const SERVICE_META = {
  software: {
    icon: FaCode,
    category: "Digital Engineering",
    points: ["Custom workflows", "Scalable systems", "Secure architecture"],
  },
  web: {
    icon: FaDesktop,
    category: "Web Experience",
    points: ["Responsive design", "Performance focused", "SEO-ready pages"],
  },
  pos: {
    icon: FaLaptopMedical,
    category: "Business Systems",
    points: ["Sales tracking", "Stock control", "Operational reporting"],
  },
  it: {
    icon: FaNetworkWired,
    category: "Infrastructure",
    points: ["System support", "Network setup", "Reliable operations"],
  },
  pentesting: {
    icon: FaShieldAlt,
    category: "Security Testing",
    points: ["Vulnerability discovery", "Risk reports", "Remediation guidance"],
  },
  hardening: {
    icon: FaShieldAlt,
    category: "System Protection",
    points: ["Secure configuration", "Access control", "Attack surface reduction"],
  },
  cybersecurity: {
    icon: FaShieldAlt,
    category: "Digital Protection",
    points: ["Threat reduction", "Security monitoring", "Policy guidance"],
  },
  accessories: {
    icon: FaDesktop,
    category: "Hardware",
    points: ["Quality accessories", "Business equipment", "Practical advice"],
  },
  repair: {
    icon: FaTools,
    category: "Technical Support",
    points: ["Diagnostics", "Fast repair", "Maintenance support"],
  },
  consulting: {
    icon: FaNetworkWired,
    category: "Strategy",
    points: ["Technology planning", "System audits", "Growth roadmaps"],
  },
};

const HIGHLIGHTS = [
  "Development",
  "Infrastructure",
  "Cybersecurity",
  "Support",
];

function Eyebrow({ children, dark = false }) {
  return (
    <div
      className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 ${
        dark ? "border-white/10 bg-white/5" : "border-blue-100 bg-blue-50"
      }`}
    >
      <span className={dark ? "h-2 w-2 rounded-full bg-blue-400" : "h-2 w-2 rounded-full bg-blue-600"} />

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

function ServiceCard({ service, index }) {
  const meta = SERVICE_META[service.id];
  const Icon = meta.icon;

  return (
    <article id={service.id} className="scroll-mt-28">
      <Link
        to={`/services/${service.id}`}
        className="group block h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)]"
      >
        <div className="relative h-60 overflow-hidden bg-slate-950">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />

          <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-blue-600 shadow-lg">
            <Icon />
          </div>

          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200">
              {meta.category}
            </p>

            <h2 className="mt-2 text-2xl font-black leading-tight text-white">
              {service.title}
            </h2>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <p className="leading-7 text-slate-600">{service.description}</p>

            <span className="text-sm font-black tracking-[0.2em] text-slate-300">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
            {meta.points.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 text-sm font-semibold text-slate-700"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[10px] text-blue-600">
                  <FaCheck />
                </span>
                <span>{point}</span>
              </div>
            ))}
          </div>

          <span className="mt-7 inline-flex items-center gap-3 font-black text-slate-950 transition group-hover:text-blue-600">
            Learn More
            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}

function Services() {
  return (
    <main className="overflow-hidden bg-white text-slate-700">
      <WhatsApp />

      <section className="relative isolate flex min-h-[78vh] items-center overflow-hidden bg-slate-950 px-5 py-24 text-white sm:min-h-[82vh] sm:px-6 lg:min-h-[88vh] lg:px-8">
        <img
          src={itImg}
          alt="Nexoshield IT services"
          className="absolute inset-0 -z-30 h-full w-full scale-[1.02] object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-gradient-to-r from-slate-950/78 via-slate-950/45 to-transparent"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/10"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl rounded-[2rem] bg-slate-950/20 p-6 backdrop-blur-[2px] sm:p-8">
            <Eyebrow dark>Our Services</Eyebrow>

            <h1 className="mt-7 text-4xl font-black leading-[1.02] sm:text-5xl lg:text-7xl">
              Technology services built for performance and protection.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore practical software, infrastructure, cybersecurity, and
              support services designed to help your organization operate with
              confidence.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4"
              >
                <p className="font-black text-white">{item}</p>
                <p className="mt-1 text-sm text-slate-400">Nexoshield ready</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Service Catalogue</Eyebrow>

              <h2 className="mt-6 max-w-3xl text-3xl font-black leading-[1.08] text-slate-950 sm:text-4xl lg:text-5xl">
                Choose the solution that fits your next step.
              </h2>
            </div>

            <Link
              to="/booking"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-black text-white shadow-[0_18px_40px_rgba(37,99,235,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              Book a Service
              <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
