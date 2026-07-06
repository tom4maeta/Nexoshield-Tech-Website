import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheck,
  FaCode,
  FaHeadset,
  FaLock,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

import image from "../assets/images/story1.jpg";

const REASONS = [
  {
    icon: FaShieldAlt,
    title: "Security-first delivery",
    description:
      "Every solution is planned with protection, reliability, and long-term risk reduction in mind.",
  },
  {
    icon: FaCode,
    title: "Clean modern engineering",
    description:
      "We build maintainable websites, systems, and digital tools that are easy to scale and support.",
  },
  {
    icon: FaRocket,
    title: "Business-focused execution",
    description:
      "Our work is shaped around real outcomes: better operations, stronger visibility, and faster growth.",
  },
  {
    icon: FaHeadset,
    title: "Support beyond launch",
    description:
      "We stay available for improvements, maintenance, security checks, and technical guidance.",
  },
];

const PROOF_POINTS = [
  "Secure development practices",
  "Responsive user experiences",
  "Reliable technical support",
  "Clear communication from start to finish",
];

function Choose() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-8">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-blue-600" />

            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-blue-700">
              Why Choose Us
            </span>
          </div>

          <h2 className="mt-6 max-w-3xl text-3xl font-black leading-[1.08] text-slate-950 sm:text-4xl lg:text-5xl">
            Practical technology built with security, clarity, and growth in
            mind.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Nexoshield combines software development, IT support, and
            cybersecurity thinking into one dependable technology partner for
            businesses that need solutions they can trust.
          </p>

          <div className="mt-9 space-y-4">
            {PROOF_POINTS.map((point) => (
              <div key={point} className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs text-blue-600">
                  <FaCheck />
                </span>

                <span className="font-semibold text-slate-700">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-black text-white shadow-[0_18px_40px_rgba(37,99,235,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              Explore Services
              <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-7 py-4 font-black text-slate-900 transition duration-300 hover:-translate-y-1 hover:border-slate-950 hover:bg-slate-950 hover:text-white"
            >
              Talk to Us
            </Link>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 text-white shadow-[0_30px_90px_rgba(15,23,42,0.2)]">
            <img
              src={image}
              alt="Nexoshield technology team"
              className="h-72 w-full object-cover opacity-70 sm:h-80 lg:h-96"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-xl shadow-lg shadow-blue-950/40">
                <FaLock />
              </div>

              <h3 className="mt-5 max-w-md text-2xl font-black leading-tight sm:text-3xl">
                Built to look good, work fast, and stay protected.
              </h3>

              <p className="mt-3 max-w-xl leading-7 text-slate-300">
                From the first consultation to deployment, we focus on clean
                execution and dependable support.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {REASONS.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white transition duration-300 group-hover:bg-blue-600">
                  <Icon />
                </div>

                <h3 className="mt-5 text-lg font-black text-slate-950">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Choose;
