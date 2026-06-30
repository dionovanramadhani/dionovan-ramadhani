import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Play, Phone } from "lucide-react";

const quickCardVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } },
};

const QuickCard = ({ Icon, label, value, href }) => {
  const isExternal = href.startsWith("http");
  return (
    <motion.a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      variants={quickCardVariants}
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 350, damping: 15 }}
      className="group flex items-center gap-4 rounded-xl border border-bg-elev/60 bg-bg-hard/70 px-4 py-3 transition-all duration-300 hover:border-accent-green/40 hover:shadow-lg hover:shadow-black/10"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg-elev/60 ring-1 ring-bg-elev/60 group-hover:ring-accent-green/30">
        <Icon
          className="h-4 w-4 text-fg-dim transition-colors duration-200 group-hover:text-accent-green"
          strokeWidth={2}
        />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-wider text-fg-muted">{label}</div>
        <div className="truncate text-sm text-fg">{value}</div>
      </div>
    </motion.a>
  );
};

const FieldInput = ({ id, label, type = "text", ...rest }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -8 },
        show: { opacity: 1, x: 0 },
      }}
      className="relative"
    >
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={label}
        className="w-full rounded-lg border border-bg-elev/60 bg-bg-hard/60 px-4 py-3 text-sm text-fg placeholder:text-fg-muted/80 outline-none transition-all duration-300 focus:border-accent-green/60 focus:ring-2 focus:ring-accent-green/20 focus:shadow-md focus:shadow-accent-green/5"
        {...rest}
      />
    </motion.div>
  );
};

export const ContactContent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend yet — just a UX-friendly noop. Hook up to /api later.
    const form = e.currentTarget;
    form.reset();
  };

  // Subtle SVG mesh-grid pattern (encoded inline for performance)
  const gridBg =
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'><path d='M48 0H0v48' fill='none' stroke='%23ebdbb2' stroke-opacity='0.06' stroke-width='1'/></svg>\")";

  return (
    <div className="relative isolate">
      {/* Soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-40 -z-10 h-[420px] w-[420px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(184,187,38,0.22), rgba(29,32,33,0) 70%)",
        }}
      />

      <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-14 md:px-10 md:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          className="flex flex-col gap-3"
        >
          <h1 className="text-5xl font-semibold leading-none tracking-tight text-fg md:text-6xl">
            Get in Touch
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-fg-muted md:text-base">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Quick contact cards */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 gap-3 sm:grid-cols-3"
        >
          <QuickCard
            Icon={Mail}
            label="Email"
            value="dionovan7@gmail.com"
            href="mailto:dionovan7@gmail.com"
          />
          <QuickCard
            Icon={Linkedin}
            label="LinkedIn"
            value="Dionovan Ramadhani"
            href="https://www.linkedin.com/in/dionovan-ramadhani/"
          />
          <QuickCard
            Icon={Phone}
            label="WhatsApp"
            value="085156427188"
            href="https://wa.me/6285156427188"
          />
        </motion.div>

        {/* Form container with subtle grid mesh background */}
        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 150,
                damping: 20,
                staggerChildren: 0.05,
                delayChildren: 0.2,
              },
            },
          }}
          className="relative overflow-hidden rounded-2xl border border-bg-elev/60 bg-bg-normal/60 p-5 md:p-7"
        >
          {/* Mesh background */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{ backgroundImage: gridBg }}
          />
          {/* Soft inner vignette to fade grid at edges */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(29,32,33,0) 0%, rgba(29,32,33,0.6) 100%)",
            }}
          />

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FieldInput id="name" label="Name" required />
              <FieldInput id="email" label="Email" type="email" required />
            </div>
            <FieldInput id="subject" label="Subject" required />
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -8 },
                show: { opacity: 1, x: 0 },
              }}
              className="relative"
            >
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={6}
                required
                className="w-full resize-none rounded-lg border border-bg-elev/60 bg-bg-hard/60 px-4 py-3 text-sm text-fg placeholder:text-fg-muted/80 outline-none transition-all duration-300 focus:border-accent-green/60 focus:ring-2 focus:ring-accent-green/20 focus:shadow-md focus:shadow-accent-green/5"
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: { opacity: 1, y: 0 },
              }}
              className="pt-1"
            >
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded-md bg-fg px-4 py-2 text-sm font-medium text-bg-hard transition-colors hover:bg-accent-green cursor-pointer"
              >
                <span>Send Message</span>
                <Play
                  className="h-3.5 w-3.5 fill-current transition-transform group-hover:translate-x-0.5"
                  strokeWidth={0}
                />
              </motion.button>
            </motion.div>
          </div>
        </motion.form>
      </div>
    </div>
  );
};
export default ContactContent;
