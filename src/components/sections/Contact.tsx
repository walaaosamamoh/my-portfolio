import { ArrowUpRight, Mail, MapPin, Send, Sparkles } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mwlvwlkq");

  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden py-24 sm:py-28"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 size-80 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container relative mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            <Sparkles size={16} />
            Get in touch
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
            Let's Build Something{" "}
            <span className="text-primary">Together.</span>
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-text-secondary">
            Have a project, opportunity, or idea in mind? Let's connect and
            create something amazing together!
          </p>
        </div>

        {/* Contact content */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact information */}
          <div className="flex flex-col rounded-2xl border border-white/10 bg-surface p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-text">Let's connect</h3>

            <p className="mt-3 leading-7 text-text-secondary">
              I'm open to Front-End Developer opportunities and interesting
              projects. Whether you have a question or want to collaborate, feel
              free to reach out!
            </p>

            <a
              href="mailto:walaaosamamoh@hotmail.com"
              className="mt-8 flex items-center gap-4 rounded-xl border border-white/10 bg-background/60 p-4 transition-colors hover:border-primary/40"
            >
              <span className="rounded-lg bg-primary/10 p-3 text-primary">
                <Mail size={21} />
              </span>

              <span className="min-w-0">
                <span className="block text-sm text-text-secondary">
                  Email me
                </span>
                <span className="break-all text-sm font-medium text-text">
                  walaaosamamoh@hotmail.com
                </span>
              </span>

              <ArrowUpRight
                size={18}
                className="ml-auto shrink-0 text-text-secondary"
              />
            </a>

            <div className="mt-4 flex items-center gap-4 rounded-xl border border-white/10 bg-background/60 p-4">
              <span className="rounded-lg bg-primary/10 p-3 text-primary">
                <MapPin size={21} />
              </span>

              <span>
                <span className="block text-sm text-text-secondary">
                  Location
                </span>
                <span className="text-sm font-medium text-text">
                  Cairo, Egypt
                </span>
              </span>
            </div>

            <div className="mt-auto pt-8">
              <p className="mb-4 text-sm font-medium text-text">
                Find me online
              </p>

              <div className="flex gap-3">
                <a
                  href="https://github.com/walaaosamamoh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="rounded-lg border border-white/10 p-3 text-text-secondary transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <SiGithub size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/walaaosamamoh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="rounded-lg border border-white/10 p-3 text-text-secondary transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <SlSocialLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-surface p-6 sm:p-8"
          >
            <h3 className="text-xl font-semibold text-text">
              Send me a message
            </h3>

            <p className="mt-2 mb-6 text-sm leading-6 text-text-secondary">
              Fill in the details below to start a conversation.
            </p>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-text"
                >
                  Your name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-white/10 bg-background px-4 py-3 text-text outline-none transition placeholder:text-text-secondary/60 focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-text"
                >
                  Email address
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-lg border border-white/10 bg-background px-4 py-3 text-text outline-none transition placeholder:text-text-secondary/60 focus:border-primary focus:ring-2 focus:ring-primary/10"
                />

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-text"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your opportunity or idea..."
                  className="w-full resize-y rounded-lg border border-white/10 bg-background px-4 py-3 text-text outline-none transition placeholder:text-text-secondary/60 focus:border-primary focus:ring-2 focus:ring-primary/10"
                />

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <ValidationError errors={state.errors} />

              {state.succeeded && (
                <p role="status" className="text-sm text-primary">
                  Thank you! Your message has been sent successfully.
                </p>
              )}

              {state.errors && !state.succeeded && (
                <p role="alert" className="text-sm text-red-400">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:w-auto"
              >
                {state.submitting ? "Sending..." : "Send Message"}
                {!state.submitting && <Send size={17} />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
