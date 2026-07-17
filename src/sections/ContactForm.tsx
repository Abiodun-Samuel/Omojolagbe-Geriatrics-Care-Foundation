import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Mail } from "lucide-react";
import { FieldWrap, Honeypot } from "@/components/ui/Field";
import { fieldAria } from "@/lib/forms/aria";
import { WhatsAppButton } from "@/components/WhatsApp";
import { contactSchema, type ContactValues } from "@/lib/forms/schemas";
import { submitForm, type SubmitResult } from "@/lib/forms/adapter";
import { site } from "@/lib/site";

/** The original contact form fields (CT03-CT07) are preserved as labels:
 *  Name, Email, Subject, Message, Send. */
export function ContactForm() {
  const [result, setResult] = useState<SubmitResult | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  async function onSubmit(values: ContactValues) {
    setResult(
      await submitForm(
        values.subject?.trim() || "Website enquiry",
        values,
        site.emails.foundation,
      ),
    );
  }

  if (result?.status === "sent") {
    return (
      <div role="status" aria-live="polite" className="rounded-card bg-verify-50 p-6">
        <CheckCircle2 size={26} className="text-verify-500" aria-hidden="true" />
        <h3 className="mt-3 text-[1.15rem] font-semibold text-ink-900">
          Message sent
        </h3>
        <p className="mt-2 text-ink-700">
          Thank you. We will reply to your email as soon as we can. If it is
          urgent, message us on WhatsApp and we will answer faster.
        </p>
        <WhatsAppButton className="mt-4" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
      <Honeypot register={register("company")} />

      <div className="grid gap-4 sm:grid-cols-2">
        {/* CT03 */}
        <FieldWrap label="Name" htmlFor="c-name" error={errors.name?.message} required>
          <input
            id="c-name"
            type="text"
            autoComplete="name"
            className="field"
            {...fieldAria("c-name", false, !!errors.name)}
            {...register("name")}
          />
        </FieldWrap>

        {/* CT04 */}
        <FieldWrap label="Email" htmlFor="c-email" error={errors.email?.message} required>
          <input
            id="c-email"
            type="email"
            autoComplete="email"
            className="field"
            {...fieldAria("c-email", false, !!errors.email)}
            {...register("email")}
          />
        </FieldWrap>
      </div>

      {/* CT05 */}
      <FieldWrap
        label="Subject"
        htmlFor="c-subject"
        error={errors.subject?.message}
        className="mt-4"
      >
        <input
          id="c-subject"
          type="text"
          className="field"
          {...fieldAria("c-subject", false, !!errors.subject)}
          {...register("subject")}
        />
      </FieldWrap>

      {/* CT06 */}
      <FieldWrap
        label="Message"
        htmlFor="c-message"
        error={errors.message?.message}
        required
        className="mt-4"
      >
        <textarea
          id="c-message"
          rows={5}
          className="field"
          {...fieldAria("c-message", false, !!errors.message)}
          {...register("message")}
        />
      </FieldWrap>

      {result?.status === "error" && (
        <p role="alert" aria-live="assertive" className="mt-4 text-sm text-danger">
          {result.message}
        </p>
      )}

      {result?.status === "mailto" && (
        <div role="status" aria-live="polite" className="mt-4 rounded-card bg-paper-sunken p-4">
          <p className="text-sm text-ink-700">
            Your message is ready to send from your mail app, filled in and
            addressed to us.
          </p>
          <a href={result.href} className="btn btn-primary mt-3">
            <Mail size={17} aria-hidden="true" />
            Open email to send
          </a>
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {/* CT07 "Send" preserved. */}
        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting && (
            <Loader2 size={17} className="animate-spin" aria-hidden="true" />
          )}
          {isSubmitting ? "Sending" : "Send"}
        </button>
        <WhatsAppButton variant="inline" label="Or chat on WhatsApp" />
      </div>
    </form>
  );
}
