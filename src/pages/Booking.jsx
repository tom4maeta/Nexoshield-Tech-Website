import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaPaperPlane,
  FaSpinner,
} from "react-icons/fa";

import WhatsApp from "../components/Whatsapp";
import bookingImg from "../assets/images/booking.jpg";

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
  honeypot: "",
};

const SERVICES = [
  "Software Development",
  "Web Design & Development",
  "POS Systems",
  "IT Services",
  "Penetration Testing",
  "Systems Hardening",
  "Cybersecurity",
  "Computer Accessories",
  "Computer Repair",
  "IT Consulting",
];

const TIME_SLOTS = [
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 01:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
  "04:00 PM - 05:00 PM",
];

const TEXT_FIELDS = [
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
  {
    id: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "+254 700 123 456",
  },
];

const BOOKING_STEPS = [
  {
    icon: FaCalendarAlt,
    title: "Choose service",
    description: "Tell us which solution or support request you need.",
  },
  {
    icon: FaClock,
    title: "Pick a time",
    description: "Select a preferred date and time for the consultation.",
  },
  {
    icon: FaCheckCircle,
    title: "Get confirmation",
    description: "Our team will review your request and follow up shortly.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function validateBooking(formData) {
  const nextErrors = {};

  if (!formData.fullName.trim()) {
    nextErrors.fullName = "Full name is required";
  }

  if (!formData.email.trim()) {
    nextErrors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    nextErrors.email = "Invalid email address";
  }

  if (!formData.phone.trim()) {
    nextErrors.phone = "Phone number is required";
  }

  if (!formData.service) {
    nextErrors.service = "Please select a service";
  }

  if (!formData.preferredDate) {
    nextErrors.preferredDate = "Select a date";
  }

  if (!formData.preferredTime) {
    nextErrors.preferredTime = "Choose a time slot";
  }

  return nextErrors;
}

function FieldError({ message }) {
  if (!message) {
    return null;
  }

  return <p className="mt-2 text-sm font-semibold text-red-500">{message}</p>;
}

function Booking() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const today = new Date().toISOString().split("T")[0];

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

    const validationErrors = validateBooking(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID_BOOKING;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_BOOKING;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert("Configuration error. Please contact support.");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.fullName,
          reply_to: formData.email,
          phone: formData.phone,
          service: formData.service,
          preferred_date: formData.preferredDate,
          preferred_time: formData.preferredTime,
          message: formData.message,
        },
        publicKey
      );

      setBookingSuccess(true);
      setFormData(INITIAL_FORM);
      setTimeout(() => setBookingSuccess(false), 5000);
    } catch (error) {
      console.error("Booking submission failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (fieldName) => {
    return `w-full rounded-2xl border bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 ${
      errors[fieldName] ? "border-red-400" : "border-slate-300"
    }`;
  };

  return (
    <main className="overflow-hidden bg-white text-slate-700">
      <WhatsApp />

      <section className="relative isolate flex min-h-[78vh] items-center overflow-hidden text-white sm:min-h-[82vh] lg:min-h-[88vh]">
        <img
          src={bookingImg}
          alt="Book a Nexoshield service"
          className="absolute inset-0 -z-30 h-full w-full scale-[1.02] object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-gradient-to-r from-slate-950/78 via-slate-950/42 to-transparent"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-gradient-to-t from-slate-950/58 via-transparent to-transparent"
        />

        <div className="mx-auto w-full max-w-7xl px-5 pt-24 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl rounded-[2rem] bg-slate-950/20 p-6 backdrop-blur-[2px] sm:p-8"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-400" />

              <span className="text-[11px] font-black uppercase tracking-[0.22em] text-blue-200">
                Book a Service
              </span>
            </div>

            <h1 className="mt-7 text-4xl font-black leading-[1.02] sm:text-5xl lg:text-7xl">
              Schedule expert technology support with Nexoshield.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Choose your service, share your preferred time, and our team will
              follow up to confirm the best next step.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-6 md:grid-cols-3 lg:px-8">
          {BOOKING_STEPS.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                <Icon />
              </div>

              <h2 className="mt-5 font-black text-slate-950">{title}</h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10"
          >
            {bookingSuccess ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-4xl text-green-500">
                  <FaCheckCircle />
                </div>

                <h2 className="mt-6 text-2xl font-black text-slate-950 sm:text-3xl">
                  Booking request received.
                </h2>

                <p className="mx-auto mt-3 max-w-md leading-7 text-slate-600">
                  We have received your request and will get back to you shortly
                  to finalise your appointment.
                </p>

                <Link
                  to="/"
                  className="group mt-8 inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-black text-white transition hover:bg-blue-700"
                >
                  Back to Home
                  <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            ) : (
              <>
                <div>
                  <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">
                    Booking Details
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    Fill out the form below and we will handle the rest.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    {TEXT_FIELDS.map((field) => (
                      <div key={field.id}>
                        <label
                          htmlFor={field.id}
                          className="mb-2 block text-sm font-black text-slate-800"
                        >
                          {field.label} *
                        </label>

                        <input
                          id={field.id}
                          type={field.type}
                          name={field.id}
                          value={formData[field.id]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className={inputClass(field.id)}
                        />

                        <FieldError message={errors[field.id]} />
                      </div>
                    ))}

                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-black text-slate-800"
                      >
                        Select Service *
                      </label>

                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={inputClass("service")}
                      >
                        <option value="">Choose a service</option>
                        {SERVICES.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>

                      <FieldError message={errors.service} />
                    </div>

                    <div>
                      <label
                        htmlFor="preferredDate"
                        className="mb-2 block text-sm font-black text-slate-800"
                      >
                        Preferred Date *
                      </label>

                      <input
                        id="preferredDate"
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={today}
                        className={inputClass("preferredDate")}
                      />

                      <FieldError message={errors.preferredDate} />
                    </div>

                    <div>
                      <label
                        htmlFor="preferredTime"
                        className="mb-2 block text-sm font-black text-slate-800"
                      >
                        Preferred Time Slot *
                      </label>

                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className={inputClass("preferredTime")}
                      >
                        <option value="">Select a time</option>
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>

                      <FieldError message={errors.preferredTime} />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-black text-slate-800"
                    >
                      Additional Details
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any specific requirements..."
                      className="w-full resize-none rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
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
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-black text-white shadow-[0_18px_40px_rgba(37,99,235,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Confirm Booking
                        <FaPaperPlane />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Booking;
