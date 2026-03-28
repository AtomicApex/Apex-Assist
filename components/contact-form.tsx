"use client";

import { useState } from "react";
import { SMS_E164 } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = [
      name && `Name: ${name}`,
      phone && `My number: ${phone}`,
      message && message,
    ]
      .filter(Boolean)
      .join("\n");
    const url = `sms:${SMS_E164}${body ? `?body=${encodeURIComponent(body)}` : ""}`;
    window.location.href = url;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="rounded-xl bg-primary px-5 py-4 text-center text-[15px] leading-relaxed text-ink">
        If your device did not open Messages, text the number above with your
        details. I will get back to you as soon as I can.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink/80">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-ink outline-none ring-ink/20 transition focus:ring-2"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink/80">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-ink outline-none ring-ink/20 transition focus:ring-2"
          placeholder="So I can text you back"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-y rounded-xl border border-ink/10 bg-white px-4 py-3 text-ink outline-none ring-ink/20 transition focus:ring-2"
          placeholder="What you need help with, and preferred times"
        />
      </div>
      <button
        type="submit"
        className="mt-1 rounded-xl bg-ink px-6 py-3.5 text-[15px] font-medium text-white transition hover:bg-ink/90 active:scale-[0.99]"
      >
        Open text message
      </button>
    </form>
  );
}
