import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarAlt,
  FaCheck,
  FaClock,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import { SERVICES } from "./Services";

const DEFAULT_DETAIL = {
  eyebrow: "Professional Service",
  intro:
    "We provide practical technology solutions shaped around your goals, users, operations, and long-term growth needs.",
  overview: [
    "Our team starts by understanding your current challenge, business objectives, technical environment, and expected outcomes.",
    "We then recommend a clear plan, execute with reliable engineering practices, and support you after delivery.",
  ],
  deliverables: [
    "Needs assessment and project consultation",
    "Clear implementation plan",
    "Professional service delivery",
    "Testing, documentation, and support guidance",
  ],
  process: ["Discover", "Plan", "Implement", "Support"],
  outcomes: [
    "Improved reliability",
    "Better operational clarity",
    "Scalable technology foundation",
  ],
  bestFor: [
    "Growing businesses",
    "Teams improving operations",
    "Organizations that need dependable technology support",
  ],
  timeline: "Flexible",
};

const SERVICE_DETAILS = {
  software: {
    eyebrow: "Custom Software",
    intro:
      "Build secure, scalable software that fits your workflow instead of forcing your team to work around generic tools.",
    overview: [
      "We design and develop custom systems for businesses that need better control over operations, data, customer workflows, or internal processes.",
      "From planning and architecture to development, testing, and deployment, we focus on clean code, practical usability, and long-term maintainability.",
    ],
    deliverables: [
      "Requirements analysis and feature planning",
      "Custom web or business application development",
      "Database design and API integration",
      "Testing, deployment, and technical documentation",
      "Maintenance and feature improvement support",
    ],
    process: ["Discovery", "System design", "Development", "Testing", "Launch"],
    outcomes: [
      "Automated business workflows",
      "Centralized data management",
      "Reduced manual work",
      "Software that can grow with your business",
    ],
    bestFor: [
      "Internal business systems",
      "Customer portals",
      "Workflow automation",
      "Reporting dashboards",
    ],
    timeline: "2-12 weeks depending on scope",
  },
  web: {
    eyebrow: "Web Design & Development",
    intro:
      "Create a fast, responsive, and professional website that communicates trust and helps visitors take action.",
    overview: [
      "We build websites that look polished, load quickly, and work smoothly across mobile, tablet, and desktop screens.",
      "Every website is planned around your audience, business goals, content, and conversion paths such as calls, bookings, inquiries, or purchases.",
    ],
    deliverables: [
      "Responsive website design",
      "Frontend development",
      "Content structure and page layout",
      "Contact, booking, or quote forms",
      "Basic SEO and performance optimization",
    ],
    process: ["Content planning", "UI design", "Development", "Testing", "Go live"],
    outcomes: [
      "Stronger online presence",
      "Better mobile experience",
      "Clearer service presentation",
      "More visitor confidence",
    ],
    bestFor: [
      "Company websites",
      "Service websites",
      "Landing pages",
      "Portfolio and product pages",
    ],
    timeline: "1-6 weeks depending on pages and features",
  },
  pos: {
    eyebrow: "POS Systems",
    intro:
      "Manage sales, stock, payments, and reporting with a practical point-of-sale setup for daily business operations.",
    overview: [
      "We help shops, restaurants, and service businesses set up POS systems that make transactions easier to manage and track.",
      "The goal is to reduce manual record keeping, improve accountability, and give business owners clearer visibility into sales and inventory.",
    ],
    deliverables: [
      "POS needs assessment",
      "Sales and inventory workflow setup",
      "User accounts and access configuration",
      "Receipt, product, and category setup",
      "Training and support guidance",
    ],
    process: ["Assess workflow", "Configure system", "Test transactions", "Train users"],
    outcomes: [
      "Faster checkout process",
      "Better stock tracking",
      "Clearer sales reporting",
      "Improved business accountability",
    ],
    bestFor: ["Retail shops", "Restaurants", "Pharmacies", "Small businesses"],
    timeline: "Several days to 2 weeks",
  },
  it: {
    eyebrow: "IT Services",
    intro:
      "Keep your technology environment reliable with practical support for devices, systems, networks, and daily operations.",
    overview: [
      "We support businesses with the technical setup, troubleshooting, and maintenance needed to keep work moving without unnecessary disruption.",
      "Whether you need new systems configured or existing infrastructure improved, we focus on stability, security, and usability.",
    ],
    deliverables: [
      "IT environment assessment",
      "Device and software setup",
      "Network and connectivity support",
      "Troubleshooting and maintenance",
      "User support and documentation",
    ],
    process: ["Audit", "Prioritize", "Resolve", "Document", "Support"],
    outcomes: [
      "Reduced downtime",
      "More reliable systems",
      "Better user productivity",
      "Cleaner IT operations",
    ],
    bestFor: ["Offices", "Schools", "Small teams", "Growing businesses"],
    timeline: "Same-day support to ongoing maintenance",
  },
  pentesting: {
    eyebrow: "Penetration Testing",
    intro:
      "Find security weaknesses in your applications, websites, APIs, or systems before attackers can exploit them.",
    overview: [
      "Our penetration testing service simulates real-world attack techniques in a controlled and authorized way.",
      "After testing, you receive clear findings, risk explanations, and practical remediation guidance your team can act on.",
    ],
    deliverables: [
      "Scope definition and testing plan",
      "Website, application, API, or system testing",
      "Vulnerability validation",
      "Risk-rated security report",
      "Remediation recommendations",
    ],
    process: ["Scope", "Test", "Validate", "Report", "Retest"],
    outcomes: [
      "Discovered vulnerabilities",
      "Reduced security exposure",
      "Clear remediation priorities",
      "Improved confidence before launch",
    ],
    bestFor: ["Web apps", "APIs", "Company websites", "Pre-launch systems"],
    timeline: "3 days to 3 weeks depending on scope",
  },
  hardening: {
    eyebrow: "Systems Hardening",
    intro:
      "Strengthen systems, servers, endpoints, and applications by reducing unnecessary exposure and improving secure configuration.",
    overview: [
      "Systems hardening focuses on closing avoidable security gaps, removing risky defaults, and applying practical controls.",
      "We review configurations, access, services, updates, and security settings to make your environment harder to attack.",
    ],
    deliverables: [
      "Configuration review",
      "Access and permission tightening",
      "Service and port reduction",
      "Patch and update recommendations",
      "Hardening checklist and support notes",
    ],
    process: ["Review", "Prioritize risks", "Harden", "Verify", "Document"],
    outcomes: [
      "Reduced attack surface",
      "Improved access control",
      "Stronger system baseline",
      "Better operational security",
    ],
    bestFor: ["Servers", "Workstations", "Web systems", "Business networks"],
    timeline: "2 days to 2 weeks",
  },
  cybersecurity: {
    eyebrow: "Cybersecurity",
    intro:
      "Protect your digital assets with practical security measures designed around your business risks and technology environment.",
    overview: [
      "We help organizations understand risk, strengthen defenses, and improve security practices without making technology harder to use.",
      "Our cybersecurity work can include assessments, policies, monitoring guidance, user awareness, and protection planning.",
    ],
    deliverables: [
      "Security assessment",
      "Risk review and recommendations",
      "Policy and process guidance",
      "Security awareness support",
      "Protection roadmap",
    ],
    process: ["Assess", "Identify risks", "Recommend controls", "Support implementation"],
    outcomes: [
      "Better risk visibility",
      "Stronger protection practices",
      "Improved readiness",
      "Reduced exposure to common threats",
    ],
    bestFor: ["Businesses", "Schools", "Teams handling sensitive data", "Online platforms"],
    timeline: "1-4 weeks depending on depth",
  },
  accessories: {
    eyebrow: "Computer Accessories",
    intro:
      "Get practical, reliable computer accessories and hardware guidance for work, study, office productivity, and business operations.",
    overview: [
      "We help clients choose accessories that match their machines, daily use, and budget instead of buying equipment that creates compatibility problems.",
      "This service supports individuals, offices, and organizations that need dependable peripherals and replacement accessories.",
    ],
    deliverables: [
      "Accessory recommendation",
      "Compatibility guidance",
      "Hardware sourcing support",
      "Setup and basic testing",
      "Usage and maintenance advice",
    ],
    process: ["Understand need", "Recommend", "Supply or guide", "Setup"],
    outcomes: [
      "Better device usability",
      "Reduced compatibility issues",
      "Improved productivity",
      "Practical buying decisions",
    ],
    bestFor: ["Office setups", "Students", "Remote work", "Replacement accessories"],
    timeline: "Same day to several days",
  },
  repair: {
    eyebrow: "Computer Repair",
    intro:
      "Restore faulty computers and improve performance with careful diagnostics, repair, maintenance, and practical advice.",
    overview: [
      "We diagnose hardware and software issues, explain the problem clearly, and recommend a practical repair path.",
      "The goal is to recover usability, protect important data where possible, and help prevent repeat problems.",
    ],
    deliverables: [
      "Device diagnostics",
      "Software troubleshooting",
      "Hardware repair recommendations",
      "Performance cleanup",
      "Maintenance advice",
    ],
    process: ["Diagnose", "Explain issue", "Repair", "Test", "Advise"],
    outcomes: [
      "Improved device performance",
      "Resolved common faults",
      "Reduced downtime",
      "Clear repair guidance",
    ],
    bestFor: ["Laptops", "Desktops", "Slow machines", "Software issues"],
    timeline: "Same day to several days depending on issue",
  },
  consulting: {
    eyebrow: "IT Consulting",
    intro:
      "Make better technology decisions with clear guidance on systems, security, infrastructure, software, and digital growth.",
    overview: [
      "We help businesses evaluate their current technology, identify gaps, and plan practical improvements.",
      "Consulting is useful when you need direction before investing in software, infrastructure, cybersecurity, or operational tools.",
    ],
    deliverables: [
      "Technology needs assessment",
      "System and workflow review",
      "Recommendations and roadmap",
      "Vendor or tool guidance",
      "Implementation support planning",
    ],
    process: ["Consult", "Assess", "Recommend", "Plan", "Support"],
    outcomes: [
      "Clear technology direction",
      "Better investment decisions",
      "Reduced implementation risk",
      "Practical growth roadmap",
    ],
    bestFor: ["Business planning", "System upgrades", "Digital transformation", "Security planning"],
    timeline: "Single session to multi-week engagement",
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function getDetail(serviceId) {
  return SERVICE_DETAILS[serviceId] || DEFAULT_DETAIL;
}

function Eyebrow({ children, dark = false }) {
  return (
    <div
      className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 ${
        dark ? "border-white/10 bg-white/5" : "border-blue-100 bg-blue-50"
      }`}
    >
      <span
        className={`h-2 w-2 rounded-full ${
          dark ? "bg-blue-400" : "bg-blue-600"
        }`}
      />
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

function BulletList({ items }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <div key={item} className="flex gap-3">
          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[10px] text-blue-600">
            <FaCheck />
          </span>
          <span className="leading-7 text-slate-700">{item}</span>
        </div>
      ))}
    </div>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5">
      <div className="max-w-lg text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50 text-3xl font-black text-blue-600">
          NS
        </div>

        <h1 className="mt-8 text-3xl font-black text-slate-950">
          Service Not Found
        </h1>

        <p className="mt-4 leading-7 text-slate-600">
          The service you are looking for does not exist or may have been moved.
        </p>

        <Link
          to="/services"
          className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-black text-white transition hover:bg-blue-700"
        >
          <FaArrowLeft />
          Back to Services
        </Link>
      </div>
    </main>
  );
}

function ServiceDetail() {
  const { serviceId } = useParams();
  const service = SERVICES.find((item) => item.id === serviceId);

  if (!service) {
    return <NotFound />;
  }

  const detail = getDetail(service.id);
  const relatedServices = SERVICES.filter((item) => item.id !== service.id).slice(0, 4);

  return (
    <main className="overflow-hidden bg-white text-slate-700">
      <section className="relative isolate flex min-h-[78vh] items-end overflow-hidden text-white sm:min-h-[82vh] lg:min-h-[88vh]">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 -z-30 h-full w-full scale-[1.02] object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-gradient-to-r from-slate-950/82 via-slate-950/52 to-transparent"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10"
        />

        <div className="mx-auto w-full max-w-7xl px-5 pb-14 pt-36 sm:px-6 lg:px-8 lg:pb-20">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="max-w-4xl rounded-[2rem] bg-slate-950/20 p-6 backdrop-blur-[2px] sm:p-8"
          >
            <Link
              to="/services"
              className="mb-6 inline-flex items-center gap-2 text-sm font-black text-blue-200 transition hover:text-white"
            >
              <FaArrowLeft />
              All Services
            </Link>

            <Eyebrow dark>{detail.eyebrow}</Eyebrow>

            <h1 className="mt-7 text-4xl font-black leading-[1.02] sm:text-5xl lg:text-7xl">
              {service.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              {detail.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_0.38fr] lg:items-start lg:gap-16 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Eyebrow>Service Details</Eyebrow>

            <h2 className="mt-6 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              What this service includes
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              {detail.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7">
                <h3 className="text-xl font-black text-slate-950">
                  Deliverables
                </h3>
                <div className="mt-6">
                  <BulletList items={detail.deliverables} />
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-black text-slate-950">
                  Best For
                </h3>
                <div className="mt-6">
                  <BulletList items={detail.bestFor} />
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-black text-slate-950">
                How we deliver it
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {detail.process.map((step, index) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <span className="text-xs font-black tracking-[0.2em] text-blue-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 font-black text-slate-950">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-[2rem] bg-slate-950 p-7 text-white sm:p-8">
              <h3 className="text-2xl font-black">Expected outcomes</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {detail.outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                  >
                    <FaCheck className="text-blue-400" />
                    <p className="mt-4 font-semibold leading-6 text-slate-200">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <aside className="space-y-6 lg:sticky lg:top-28">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
              <h3 className="text-xl font-black text-slate-950">Quick Info</h3>

              <div className="mt-6 space-y-5">
                <div className="flex gap-3">
                  <FaCalendarAlt className="mt-1 text-blue-600" />
                  <div>
                    <p className="font-black text-slate-950">Timeline</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {detail.timeline}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FaPhoneAlt className="mt-1 text-blue-600" />
                  <div>
                    <p className="font-black text-slate-950">Phone</p>
                    <a
                      href="tel:+254738552698"
                      className="mt-1 block text-sm text-slate-600 transition hover:text-blue-600"
                    >
                      +254 738 552 698
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FaEnvelope className="mt-1 text-blue-600" />
                  <div>
                    <p className="font-black text-slate-950">Email</p>
                    <a
                      href="mailto:info@nexoshieldtech.co.ke"
                      className="mt-1 block text-sm text-slate-600 transition hover:text-blue-600"
                    >
                      info@nexoshieldtech.co.ke
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-blue-600 p-7 text-white shadow-[0_25px_70px_rgba(37,99,235,0.28)]">
              <h3 className="text-2xl font-black">Need {service.title}?</h3>
              <p className="mt-4 leading-7 text-blue-100">
                Tell us what you want to achieve and we will recommend the right
                next step.
              </p>

              <Link
                to="/booking"
                className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 font-black text-blue-700 transition hover:bg-blue-50"
              >
                Book This Service
                <FaArrowRight />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Related Services</Eyebrow>
              <h2 className="mt-6 text-3xl font-black text-slate-950 sm:text-4xl">
                Other services you might need
              </h2>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-3 font-black text-blue-600"
            >
              View all services
              <FaArrowRight />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((related) => (
              <Link
                key={related.id}
                to={`/services/${related.id}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-black text-slate-950">{related.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
                    {related.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-blue-600">
                    Learn More
                    <FaArrowRight className="text-xs" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServiceDetail;
