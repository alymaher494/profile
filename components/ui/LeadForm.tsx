"use client";

import { useState } from "react";

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "";
const TO_EMAIL = "alymaher.494@gmail.com";

const DOMAINS = [
  "Headless Web & E-commerce",
  "Payment Middleware & Checkout",
  "Applied AI & Automation",
  "Multi-Tenant & Infrastructure",
];

const field =
  "w-full border border-line bg-surface/40 px-4 py-3 font-mono text-sm text-ink placeholder:text-muted-2 transition-colors focus:border-signal focus:outline-none";

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">(
    "idle",
  );
  const [form, setForm] = useState({
    name: "",
    email: "",
    domain: "",
    message: "",
    leadMagnet: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const target = e.target as HTMLInputElement;
    setForm({
      ...form,
      [e.target.name]: target.type === "checkbox" ? target.checked : e.target.value,
    });
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      next.name = "Name is required (min 2 characters).";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailPattern.test(form.email.trim())) {
      next.email = "Please enter a valid email.";
    }
    if (!form.domain.trim()) {
      next.domain = "Please select a project type.";
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      next.message = "Message is required (min 10 characters).";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (!FORM_ID) {
      const body = `Name: ${form.name}\nEmail: ${form.email}\nProject: ${form.domain}\nLead Magnet: ${form.leadMagnet ? "Yes" : "No"}\n\n${form.message}`;
      window.location.href = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(
        "New project — " + form.domain,
      )}&body=${encodeURIComponent(body)}`;
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target as HTMLFormElement),
      });
      if (res.ok) {
        setStatus("ok");
        setForm({ name: "", email: "", domain: "", message: "", leadMagnet: false });
        setErrors({});
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  };

  return (
    <form onSubmit={submit} className="mx-auto mt-12 max-w-xl text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <input
            required
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Name"
            className={field}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-danger">{errors.name}</p>
          )}
        </div>
        <div>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="Email"
            className={field}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-danger">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <select
          required
          name="domain"
          value={form.domain}
          onChange={onChange}
          className={`${field} mt-4`}
        >
          <option value="" disabled>
            Project type
          </option>
          {DOMAINS.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        {errors.domain && (
          <p className="mt-1 text-sm text-danger">{errors.domain}</p>
        )}
      </div>

      <div>
        <textarea
          required
          name="message"
          value={form.message}
          onChange={onChange}
          placeholder="Tell me about the system you need shipped…"
          rows={4}
          className={`${field} mt-4 resize-none`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-danger">{errors.message}</p>
        )}
      </div>

      <label className="mt-4 flex items-center gap-3 text-left">
        <input
          type="checkbox"
          name="leadMagnet"
          checked={form.leadMagnet}
          onChange={onChange}
          className="h-4 w-4 rounded border-line bg-surface/40 text-signal focus:border-signal focus:ring-signal"
        />
        <span className="font-mono text-xs text-muted">
          Send me the free guide: &ldquo;Do you need a normal website or a custom system?&rdquo;
        </span>
      </label>

      {/* honeypot — hidden from humans, catches bots */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        type="submit"
        className="mt-6 w-full bg-signal px-6 py-4 font-mono text-xs uppercase tracking-widest2 text-void transition-transform hover:-translate-y-0.5"
      >
        {status === "sending"
          ? "Sending…"
          : status === "ok"
            ? "Brief received ✓"
            : "Send brief"}
      </button>

      {status === "err" && (
        <p className="mt-3 text-sm text-danger">
          Something went wrong — try email or WhatsApp.
        </p>
      )}
      {!FORM_ID && (
        <p className="mt-3 font-mono text-[10px] uppercase tracking-widest2 text-muted-2">
          No form key set — this opens your email client instead.
        </p>
      )}
    </form>
  );
}
