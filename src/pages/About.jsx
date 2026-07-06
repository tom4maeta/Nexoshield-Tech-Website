import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaChartLine,
  FaCheck,
  FaCode,
  FaGlobe,
  FaLightbulb,
  FaQuoteLeft,
  FaRocket,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

import WhatsApp from "../components/Whatsapp";

import Story1 from "../assets/images/story1.jpg";
import CEO from "../assets/images/Founder.jpeg";
import Designer from "../assets/images/designer.jpg";
import Cybersecurity from "../assets/images/cybersecurityy.jpg";

/* =========================================================
   ANIMATION
========================================================= */

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 36,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* =========================================================
   DATA
========================================================= */

const TEAM = [
  {
    name: "Tom Maeta",
    role: "CEO & Founder",
    image: CEO,
    quote:
      "Our mission is to build secure, scalable technology that helps organizations move forward with confidence.",
  },
  {
    name: "Michael Glenn",
    role: "Senior Software Engineer",
    image: Designer,
    quote:
      "We engineer solutions that are efficient, reliable, maintainable, and prepared for future growth.",
  },
  {
    name: "Francisca Ayomide",
    role: "Cybersecurity Specialist",
    image: Cybersecurity,
    quote:
      "We protect what matters most by making security part of the technology foundation.",
  },
];

const PRINCIPLES = [
  {
    number: "01",
    icon: FaShieldAlt,
    title: "Security First",
    description:
      "Security is considered from the beginning of every project, not added as an afterthought.",
  },
  {
    number: "02",
    icon: FaCode,
    title: "Purposeful Engineering",
    description:
      "We build technology around real users, real challenges, and meaningful business objectives.",
  },
  {
    number: "03",
    icon: FaLightbulb,
    title: "Practical Innovation",
    description:
      "We use modern technology where it creates real value, not simply because it is new.",
  },
  {
    number: "04",
    icon: FaUsers,
    title: "Long-Term Partnership",
    description:
      "We believe strong technology is built through trust, clarity, collaboration, and shared purpose.",
  },
];

/* =========================================================
   REUSABLE EYEBROW
========================================================= */

function SectionEyebrow({ children, dark = false }) {
  return (
    <div
      className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 ${
        dark
          ? "border-blue-400/20 bg-blue-500/10"
          : "border-blue-100 bg-blue-50"
      }`}
    >
      <span
        className={`h-2 w-2 rounded-full ${
          dark ? "bg-blue-400" : "bg-blue-600"
        }`}
      />

      <span
        className={`text-[10px] font-black uppercase tracking-[0.24em] ${
          dark ? "text-blue-300" : "text-blue-700"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

/* =========================================================
   ABOUT PAGE
========================================================= */

function About() {
  return (
    <main className="overflow-hidden bg-white text-slate-700">
      <WhatsApp />

      {/* =====================================================
          HERO BANNER
      ====================================================== */}

      <section className="relative isolate flex min-h-[78vh] items-end overflow-hidden sm:min-h-[82vh] lg:min-h-[88vh]">
        {/* Full-section banner image */}
        <img
          src={Story1}
          alt="Nexoshield Technology Solutions"
          className="absolute inset-0 -z-30 h-full w-full scale-[1.02] object-cover object-center"
        />

        {/* Primary dark overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-gradient-to-r from-slate-950/78 via-slate-950/48 to-slate-950/10"
        />

        {/* Vertical depth overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-gradient-to-t from-slate-950/58 via-slate-950/10 to-transparent"
        />

        {/* Blue atmosphere */}
        <div
          aria-hidden="true"
          className="absolute -left-40 top-20 -z-10 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[150px]"
        />

        {/* Subtle grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:52px_52px]"
        />

        {/* Hero content */}
        <div className="mx-auto w-full max-w-7xl px-5 pb-12 pt-36 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp}>
              <SectionEyebrow dark>
                About Nexoshield
              </SectionEyebrow>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mt-7 max-w-5xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.4rem]"
            >
              We build technology for a{" "}
              <span className="text-blue-400">
                more secure digital future.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              Nexoshield Technology Solutions brings together software
              engineering, IT solutions, and cybersecurity to help
              organizations build stronger digital foundations.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-black text-white shadow-[0_18px_50px_rgba(37,99,235,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
              >
                Explore Our Services

                <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-black text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white hover:text-slate-950"
              >
                Talk to Our Team
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero bottom strip */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/35 backdrop-blur-xl sm:grid-cols-3"
          >
            {[
              {
                title: "Engineering",
                description: "Modern and scalable",
              },
              {
                title: "Security",
                description: "Integrated by design",
              },
              {
                title: "Partnership",
                description: "Focused on real outcomes",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`px-6 py-5 ${
                  index !== 0
                    ? "border-t border-white/10 sm:border-l sm:border-t-0"
                    : ""
                }`}
              >
                <p className="font-black text-white">{item.title}</p>

                <p className="mt-1 text-xs text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          WHO WE ARE
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="absolute -left-72 top-0 h-[520px] w-[520px] rounded-full bg-blue-500/[0.07] blur-[150px]"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-20">
            {/* Left statement */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:sticky lg:top-28"
            >
              <SectionEyebrow>Who We Are</SectionEyebrow>

              <h2 className="mt-6 max-w-xl text-3xl font-black leading-[1.06] tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
                Technology should create{" "}
                <span className="text-blue-600">
                  confidence,
                </span>{" "}
                not complexity.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                We exist to help businesses, individuals, and organizations
                use technology more effectively, more securely, and with a
                clearer path toward growth.
              </p>
            </motion.div>

            {/* Right content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <motion.div
                variants={fadeInUp}
                className="border-l-2 border-blue-600 pl-6 sm:pl-8"
              >
                <p className="text-xl font-black leading-9 text-slate-950 sm:text-2xl">
                  Nexoshield is built around one idea: powerful technology
                  should also be thoughtful, secure, and useful.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-9 grid gap-7 sm:grid-cols-2"
              >
                <div>
                  <p className="text-base leading-8 text-slate-600">
                    We bring engineering and cybersecurity together so that
                    performance and protection are considered as connected
                    parts of the same solution.
                  </p>
                </div>

                <div>
                  <p className="text-base leading-8 text-slate-600">
                    Our goal is not simply to deliver technology. It is to
                    create digital foundations that organizations can trust,
                    maintain, and grow with.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-10 grid gap-4 sm:grid-cols-3"
              >
                {[
                  "Built with purpose",
                  "Secure by design",
                  "Prepared for growth",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[9px] text-blue-600">
                      <FaCheck />
                    </span>

                    <span className="text-sm font-black text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION AND VISION
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="absolute -left-48 -top-48 h-[520px] w-[520px] rounded-full bg-blue-600/25 blur-[160px]"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-60 right-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[170px]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:50px_50px]"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20">
            <div>
              <SectionEyebrow dark>
                Our Direction
              </SectionEyebrow>
            </div>

            <div>
              <h2 className="max-w-4xl text-3xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                Driven by purpose.
                <span className="block text-blue-400">
                  Built for lasting impact.
                </span>
              </h2>
            </div>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 lg:grid-cols-2">
            {/* Mission */}
            <motion.article
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group relative overflow-hidden bg-slate-950/90 p-7 sm:p-10 lg:p-12"
            >
              <div
                aria-hidden="true"
                className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-blue-600/0 blur-[100px] transition duration-700 group-hover:bg-blue-600/20"
              />

              <div className="relative">
                <div className="flex items-center justify-between gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-xl text-blue-400">
                    <FaRocket />
                  </div>

                  <span className="text-[10px] font-black tracking-[0.22em] text-slate-700">
                    01
                  </span>
                </div>

                <p className="mt-10 text-[10px] font-black uppercase tracking-[0.24em] text-blue-400">
                  Our Mission
                </p>

                <h3 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl">
                  Build secure technology that creates measurable value.
                </h3>

                <p className="mt-5 max-w-xl leading-8 text-slate-400">
                  Our mission is to design and deliver scalable, secure, and
                  practical digital solutions that help organizations operate
                  more effectively and grow with confidence.
                </p>
              </div>
            </motion.article>

            {/* Vision */}
            <motion.article
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group relative overflow-hidden bg-slate-950/90 p-7 sm:p-10 lg:p-12"
            >
              <div
                aria-hidden="true"
                className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-cyan-500/0 blur-[100px] transition duration-700 group-hover:bg-cyan-500/15"
              />

              <div className="relative">
                <div className="flex items-center justify-between gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-xl text-blue-400">
                    <FaChartLine />
                  </div>

                  <span className="text-[10px] font-black tracking-[0.22em] text-slate-700">
                    02
                  </span>
                </div>

                <p className="mt-10 text-[10px] font-black uppercase tracking-[0.24em] text-blue-400">
                  Our Vision
                </p>

                <h3 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl">
                  Become a trusted African technology partner with global
                  impact.
                </h3>

                <p className="mt-5 max-w-xl leading-8 text-slate-400">
                  We envision a future where Nexoshield is recognized for
                  combining strong engineering, modern cybersecurity, and
                  meaningful innovation.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRINCIPLES
      ====================================================== */}

      <section className="relative bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <SectionEyebrow>What Guides Us</SectionEyebrow>

              <h2 className="mt-6 max-w-xl text-3xl font-black leading-[1.06] tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
                Principles behind every solution we build.
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-slate-600">
                Our work is shaped by a clear set of principles that help us
                make better technical decisions and create stronger outcomes.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid gap-px overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-200 sm:grid-cols-2"
            >
              {PRINCIPLES.map(
                ({ number, icon: Icon, title, description }) => (
                  <motion.article
                    key={number}
                    variants={fadeInUp}
                    className="group relative min-h-[280px] overflow-hidden bg-white p-7 transition duration-500 hover:bg-blue-50/40 sm:p-8"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-lg text-blue-600 transition duration-500 group-hover:bg-blue-600 group-hover:text-white">
                        <Icon />
                      </div>

                      <span className="text-[10px] font-black tracking-[0.22em] text-slate-300">
                        {number}
                      </span>
                    </div>

                    <div className="mt-12">
                      <h3 className="text-xl font-black tracking-tight text-slate-950">
                        {title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {description}
                      </p>
                    </div>
                  </motion.article>
                )
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TEAM
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/[0.06] blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <div>
              <SectionEyebrow>Our Team</SectionEyebrow>
            </div>

            <div>
              <h2 className="max-w-4xl text-3xl font-black leading-[1.06] tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
                Meet the people behind the{" "}
                <span className="text-blue-600">
                  vision.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                A multidisciplinary team bringing together leadership,
                engineering, design, and cybersecurity expertise.
              </p>
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid gap-7 md:grid-cols-3"
          >
            {TEAM.map((member) => (
              <motion.article
                key={member.name}
                variants={fadeInUp}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(15,23,42,0.14)]"
              >
                {/* Team image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-300">
                      {member.role}
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-white">
                      {member.name}
                    </h3>
                  </div>
                </div>

                {/* Quote */}
                <div className="p-6 sm:p-7">
                  <FaQuoteLeft className="text-xl text-blue-200" />

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    “{member.quote}”
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-5 py-8 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-slate-950 px-6 py-16 text-white shadow-[0_40px_120px_rgba(15,23,42,0.28)] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div
            aria-hidden="true"
            className="absolute -left-40 -top-40 h-[460px] w-[460px] rounded-full bg-blue-600/30 blur-[140px]"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-52 right-0 h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-[150px]"
          />

          <div className="relative grid items-end gap-12 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-blue-400" />

                <span className="text-[10px] font-black uppercase tracking-[0.24em] text-blue-300">
                  Build With Nexoshield
                </span>
              </div>

              <h2 className="mt-7 max-w-4xl text-3xl font-black leading-[1.06] tracking-[-0.04em] text-white sm:text-4xl lg:text-6xl">
                Ready to build something{" "}
                <span className="text-blue-400">
                  powerful?
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                Let&apos;s transform your idea, challenge, or project into a
                secure and scalable digital solution.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-4 rounded-2xl bg-blue-600 px-7 py-4 font-black text-white shadow-[0_20px_50px_rgba(37,99,235,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-blue-500 sm:px-8 sm:py-5"
            >
              Get in Touch

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition duration-300 group-hover:translate-x-1">
                <FaArrowRight className="text-sm" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
