import {
  BookOpen,
  CalendarDays,
  Home,
  Laptop,
  LayoutList,
  PawPrint,
  Sprout,
} from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { SMS_E164, SMS_LABEL } from "@/lib/site";

const services = [
  {
    title: "Home organisation",
    blurb: "Sorting, decluttering, and tidy-ups so your space feels calm again.",
    icon: LayoutList,
  },
  {
    title: "Tutoring & homework help",
    blurb: "Patient support for schoolwork — primary to early secondary.",
    icon: BookOpen,
  },
  {
    title: "Tech help",
    blurb: "Phones, laptops, Wi‑Fi, email, and simple “how do I…?” moments.",
    icon: Laptop,
  },
  {
    title: "Gardening & outdoor work",
    blurb: "Light gardening, sweeping, and outdoor tidy-ups.",
    icon: Sprout,
  },
  {
    title: "Pet & house help",
    blurb: "Pet feeding and walks, mail collection, plants watered while you are out.",
    icon: PawPrint,
  },
] as const;

const pricingTiers = [
  {
    name: "Indoor & home help",
    detail: "Organisation, pet visits, light house help",
    price: "From $40 / hr",
  },
  {
    name: "Learning & tech",
    detail: "Tutoring, homework help, devices & setup",
    price: "From $45 / hr",
  },
  {
    name: "Outdoor work",
    detail: "Gardening and outdoor tasks",
    price: "From $45 / hr",
  },
] as const;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 border-b border-ink/5 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-lg font-semibold tracking-tight text-ink">
            Apex Assist
          </Link>
          <a
            href={`sms:${SMS_E164}`}
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-ink transition hover:bg-primary-deep/30"
          >
            Text me
          </a>
        </div>
      </header>

      <main>
        <section
          id="hero"
          className="border-b border-ink/5 bg-gradient-to-b from-primary to-white px-5 pb-20 pt-16 sm:pb-24 sm:pt-20"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-ink/55">
              Brighton, Victoria
            </p>
            <h1 className="text-balance text-3xl font-semibold leading-tight text-ink sm:text-4xl sm:leading-tight">
              Local help for busy families — right near Dendy Street
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-ink/70">
              I am a Brighton-based student offering calm, reliable assistance:
              organising, tutoring, tech help, light gardening, and pet and house
              help. If you live within about a ten-minute drive of Dendy Street, I
              would love to hear from you.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={`sms:${SMS_E164}`}
                className="inline-flex w-full max-w-xs items-center justify-center rounded-xl bg-ink px-8 py-4 text-[17px] font-medium text-white shadow-sm transition hover:bg-ink/90 active:scale-[0.99] sm:w-auto"
              >
                Text me
              </a>
              <a
                href="#contact"
                className="inline-flex w-full max-w-xs items-center justify-center rounded-xl border border-ink/15 bg-white px-8 py-4 text-[17px] font-medium text-ink transition hover:bg-ink/[0.03] sm:w-auto"
              >
                Send a message
              </a>
            </div>
            <p className="mt-6 text-sm text-ink/50">
              Serving homes within a 10-minute drive of Dendy St, Brighton
            </p>
          </div>
        </section>

        <section id="about" className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              About Apex Assist
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-ink/70">
              Apex Assist is my local service for neighbours who need an extra pair
              of hands. I grew up in this area, I am easy to reach by text, and I
              take pride in showing up on time and doing the job properly. Whether
              it is decluttering a cupboard, walking the dog, or sitting with
              someone while we fix a tricky app, my aim is always the same: make
              your week a little simpler.
            </p>
          </div>
        </section>

        <section
          id="services"
          className="border-t border-ink/5 bg-primary/40 px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Services
            </h2>
            <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-ink/65">
              Every category gets the same care — pick one thing or mix a few.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {services.map(({ title, blurb, icon: Icon }) => (
                <li
                  key={title}
                  className="flex gap-4 rounded-2xl border border-ink/5 bg-white p-5 shadow-sm shadow-ink/[0.02]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-ink">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-medium text-ink">{title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink/65">
                      {blurb}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="pricing" className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Pricing
            </h2>
            <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-ink/65">
              Straightforward rates by type of work. I will confirm the exact quote
              when you text — no surprises.
            </p>
            <div className="mt-10 space-y-4">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className="flex flex-col justify-between gap-3 rounded-2xl border border-ink/8 bg-white px-5 py-5 sm:flex-row sm:items-center"
                >
                  <div>
                    <h3 className="font-medium text-ink">{tier.name}</h3>
                    <p className="mt-1 text-sm text-ink/60">{tier.detail}</p>
                  </div>
                  <p className="text-lg font-semibold tabular-nums text-ink sm:text-right">
                    {tier.price}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm leading-relaxed text-ink/55">
              Final pricing depends on the job. Longer bookings or regular help may
              be discounted — ask when you get in touch.
            </p>
          </div>
        </section>

        <section
          id="availability"
          className="border-t border-ink/5 bg-primary/35 px-5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Availability
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-ink/70">
              I take on new jobs around study and other commitments. Typical hours
              are:
            </p>
            <ul className="mt-6 space-y-4 text-[17px] leading-relaxed text-ink/80">
              <li className="flex gap-3 rounded-xl bg-white/80 px-4 py-3">
                <Home className="mt-0.5 h-5 w-5 shrink-0 text-ink/50" aria-hidden />
                <span>
                  <strong className="font-medium text-ink">Thursday afternoons</strong>
                  — finishing before 6&nbsp;pm
                </span>
              </li>
              <li className="flex gap-3 rounded-xl bg-white/80 px-4 py-3">
                <CalendarDays
                  className="mt-0.5 h-5 w-5 shrink-0 text-ink/50"
                  aria-hidden
                />
                <span>
                  <strong className="font-medium text-ink">Every second Saturday</strong>
                  — afternoons
                </span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-ink/55">
              Text to check the next free Saturday or to suggest another time — I
              sometimes have flexibility.
            </p>
          </div>
        </section>

        <section id="contact" className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Contact
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-ink/70">
              The fastest way to reach me is a text. You can also fill in the form
              — it will open a text with your details ready to send.
            </p>
            <div className="mt-8 rounded-2xl bg-primary/50 p-6 sm:p-8">
              <p className="mb-6 text-center">
                <a
                  href={`sms:${SMS_E164}`}
                  className="text-lg font-semibold text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink/50"
                >
                  {SMS_LABEL}
                </a>
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/5 bg-white px-5 py-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-medium text-ink">Apex Assist</p>
          <p className="mt-2 text-sm text-ink/55">
            Serving Brighton, Victoria (10-minute radius from Dendy St)
          </p>
          <p className="mt-6 text-xs text-ink/40">
            © {new Date().getFullYear()} Apex Assist. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
