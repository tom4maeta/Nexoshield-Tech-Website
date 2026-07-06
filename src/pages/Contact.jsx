import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaCheckCircle,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

import WhatsApp from "../components/Whatsapp";
import contact from "../assets/images/contact.jpg";

const INITIAL_FORM = {
  fullName: "",
  email: "",
  message: "",
  honeypot: "",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const CONTACT_INFO = [
  {
    icon: FaMapMarkerAlt,
    title: "Visit Us",
    lines: ["Shepherd-Arcade Building", "Nairobi, Kenya"],
  },
  {
    icon: FaPhoneAlt,
    title: "Call Us",
    lines: ["+254 738 552 698", "+254 728 107 598"],
  },
  {
    icon: FaEnvelope,
    title: "Email Us",
    lines: ["info@nexoshieldtech.co.ke"],
  },
  {
    icon: FaClock,
    title: "Working Hours",
    lines: ["Mon-Fri: 8AM - 6PM", "Sat: 9AM - 2PM"],
  },
];

const FORM_FIELDS = [
  {
    id: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "John Doe",
  },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    placeholder: "john@example.com",
  },
];

const SOCIALS = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61574696861347",
  },
  {
    icon: FaTwitter,
    label: "Twitter",
    href: "#",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nexoshieldsoln-254s",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "#",
  },
];

function validateForm(formData) {
  const nextErrors = {};

  if (!formData.fullName.trim()) {
    nextErrors.fullName = "Full name is required";
  }

  if (!formData.email.trim()) {
    nextErrors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    nextErrors.email = "Enter a valid email";
  }

  if (!formData.message.trim()) {
    nextErrors.message = "Message cannot be empty";
  }

  return nextErrors;
}

function ContactCard({ icon: Icon, title, lines }) {
  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
        <Icon />
      </div>

      <h3 className="mt-5 font-black text-slate-950">{title}</h3>

      <div className="mt-3 space-y-1">
        {lines.map((line) => (
          <p key={line} className="text-sm leading-6 text-slate-600">
            {line}
          </p>
        ))}
      </div>
    </motion.article>
  );
}

function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.honeypot) {
      return;
    }

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID_CONTACT;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert("Configuration error. Please contact support.");
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.fullName,
          reply_to: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setIsSubmitted(true);
      setFormData(INITIAL_FORM);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Failed to send contact message:", error);
      alert("Oops! Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="overflow-hidden bg-white text-slate-700">
      <WhatsApp />

      <section className="relative isolate flex min-h-[78vh] items-center overflow-hidden text-white sm:min-h-[82vh] lg:min-h-[88vh]">
        <img
          src={contact}
          alt="Contact Nexoshield Technology Solutions"
          className="absolute inset-0 -z-30 h-full w-full scale-[1.02] object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-gradient-to-r from-slate-950/70 via-slate-950/35 to-transparent"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent"
        />

        <div className="mx-auto w-full max-w-7xl px-5 pt-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl rounded-[2rem] bg-slate-950/25 p-6 backdrop-blur-[2px] sm:p-8"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-400" />

              <span className="text-[11px] font-black uppercase tracking-[0.22em] text-blue-200">
                Contact Nexoshield
              </span>
            </div>

            <h1 className="mt-7 text-4xl font-black leading-[1.02] sm:text-5xl lg:text-7xl">
              Let's build something secure, useful, and ready to grow.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Have a question, project, or technical challenge? Reach out and
              our team will help you take the next step with clarity.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {CONTACT_INFO.map((item) => (
            <ContactCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.08)] sm:p-8"
          >
            <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">
              Send a Message
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Tell us what you need. We will review your message and respond as
              soon as possible.
            </p>

            {isSubmitted && (
              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 font-semibold text-green-700">
                <FaCheckCircle />
                Message sent successfully. We'll be in touch soon.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5">
              {FORM_FIELDS.map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="mb-2 block text-sm font-black text-slate-800"
                  >
                    {field.label} *
                  </label>

                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    value={formData[field.id]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className={`w-full rounded-2xl border bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 ${
                      errors[field.id] ? "border-red-400" : "border-slate-300"
                    }`}
                  />

                  {errors[field.id] && (
                    <p className="mt-2 text-sm font-semibold text-red-500">
                      {errors[field.id]}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-black text-slate-800"
                >
                  Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className={`w-full resize-none rounded-2xl border bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 ${
                    errors.message ? "border-red-400" : "border-slate-300"
                  }`}
                />

                {errors.message && (
                  <p className="mt-2 text-sm font-semibold text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-black text-white shadow-[0_18px_40px_rgba(37,99,235,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? "Sending..." : "Send Message"}
                <FaPaperPlane />
              </button>
            </form>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-[0_30px_90px_rgba(15,23,42,0.22)] sm:p-9 lg:sticky lg:top-28"
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl">
              <FaEnvelope />
            </div>

            <h3 className="mt-7 text-2xl font-black sm:text-3xl">
              Connect With Us
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              Follow Nexoshield for technology updates, cybersecurity insight,
              and project announcements.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-blue-400 hover:bg-blue-600"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>

            <div className="mt-10 border-t border-white/10 pt-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-300">
                Response Time
              </p>

              <p className="mt-3 leading-7 text-slate-300">
                We usually respond within 24 hours during business days.
              </p>
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
  );
}

export default Contact;
