import { useState } from "react";

import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Website inquiry from ${formData.name || "Oviedo visitor"}`);
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        "",
        formData.message,
      ].join("
"),
    );

    window.location.href = `mailto:info@oviedoproperties.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-card space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="text-sm font-semibold text-foreground" htmlFor="name">
          Full Name
        </label>
        <input
          id="name"
          className="contact-field"
          autoComplete="name"
          value={formData.name}
          onChange={(event) => handleChange("name", event.target.value)}
          placeholder="Your name"
          required
        />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-foreground" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            className="contact-field"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={(event) => handleChange("email", event.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-foreground" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            className="contact-field"
            autoComplete="tel"
            value={formData.phone}
            onChange={(event) => handleChange("phone", event.target.value)}
            placeholder="778.218.2662"
          />
        </div>
      </div>
      <div>
        <label className="text-sm font-semibold text-foreground" htmlFor="message">
          How can we help?
        </label>
        <textarea
          id="message"
          className="contact-field min-h-36 resize-y"
          value={formData.message}
          onChange={(event) => handleChange("message", event.target.value)}
          placeholder="Tell us about your project, property, or customer care inquiry."
          required
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-sm leading-6 text-muted-foreground">
          This form opens your email app so your message can be sent directly to our team.
        </p>
        <Button type="submit" variant="hero" size="lg">
          Contact Us
        </Button>
      </div>
    </form>
  );
}
