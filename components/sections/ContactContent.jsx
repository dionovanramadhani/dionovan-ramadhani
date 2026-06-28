import React from "react";
import { motion } from "framer-motion";
import { Mail, Twitter, Play } from "lucide-react";

const QuickCard = ({ Icon, label, value, href }) => {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 rounded-xl border border-bg-elev/60 bg-bg-hard/70 px-4 py-3 transition-colors hover:border-accent-green/40"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg-elev/60 ring-1 ring-bg-elev/60 group-hover:ring-accent-green/30">
        <Icon
          className="h-4 w-4 text-fg-dim group-hover:text-accent-green"
          strokeWidth={2}
        />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-wider text-fg-muted">{label}</div>
        <div className="truncate text-sm text-fg">{value}</div>
      </div>
    </a>
  );
};

const FieldInput = ({ id, label, type = "text", ...rest }) => {
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={label}
        className="w-full rounded-lg border border-bg-elev/60 bg-bg-hard/60 px-4 py-3 text-sm text-fg placeholder:text-fg-muted/80 outline-none transition focus:border-accent-green/60 focus:ring-2 focus:ring-accent-green/30"
        {...rest}
      />
    </div>
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
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
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
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          <QuickCard
            Icon={Mail}
            label="Email"
            value="hello@viratk.ai"
            href="mailto:hello@viratk.ai"
          />
          <QuickCard
            Icon={Twitter}
            label="Twitter"
            value="@viratk"
            href="https://twitter.com/viratk"
          />
        </motion.div>

        {/* Form container with subtle grid mesh background */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16 }}
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
            <div className="relative">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={6}
                required
                className="w-full resize-none rounded-lg border border-bg-elev/60 bg-bg-hard/60 px-4 py-3 text-sm text-fg placeholder:text-fg-muted/80 outline-none transition focus:border-accent-green/60 focus:ring-2 focus:ring-accent-green/30"
              />
            </div>

            <div className="pt-1">
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-md bg-fg px-4 py-2 text-sm font-medium text-bg-hard transition-colors hover:bg-accent-green"
              >
                <span>Send Message</span>
                <Play
                  className="h-3.5 w-3.5 fill-current transition-transform group-hover:translate-x-0.5"
                  strokeWidth={0}
                />
              </button>
            </div>
          </div>
        </motion.form>

        {/* Footer helper */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.28 }}
          className="text-center text-xs text-fg-muted"
        >
          Prefer to schedule a call? <span className="text-fg-dim">9005-123-456</span>
        </motion.div>
      </div>
    </div>
  );
};
