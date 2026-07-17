import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Mail } from "lucide-react";
import { FieldWrap, Honeypot } from "@/components/ui/Field";
import { fieldAria } from "@/lib/forms/aria";
import { WhatsAppButton } from "@/components/WhatsApp";
import { applicationSchema, type ApplicationValues } from "@/lib/forms/schemas";
import { submitForm, type SubmitResult } from "@/lib/forms/adapter";

type Props = { roleTitle?: string };

export function ApplicationForm({ roleTitle }: Props) {
  const [result, setResult] = useState<SubmitResult | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationValues>({
    resolver: zodResolver(applicationSchema),
    mode: "onBlur",
  });

  async function onSubmit(values: ApplicationValues) {
    const subject = roleTitle
      ? `Caregiver application: ${roleTitle}`
      : "Caregiver application";
    setResult(await submitForm(subject, { ...values, role: roleTitle }));
  }

  if (result?.status === "sent") {
    return (
      <div className="card p-6" role="status" aria-live="polite">
        <CheckCircle2 size={26} className="text-verify-500" aria-hidden="true" />
        <h3 className="mt-3 text-[1.15rem] font-semibold text-ink-900">
          Application received
        </h3>
        <p className="mt-2 text-ink-600">
          Thank you. We read every application. If there is a fit we will
          contact you to arrange an interview.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
      <Honeypot register={register("company")} />

      <div className="grid gap-4 sm:grid-cols-2">
        <FieldWrap label="Your name" htmlFor="app-name" error={errors.name?.message} required>
          <input
            id="app-name"
            type="text"
            autoComplete="name"
            className="field"
            {...fieldAria("app-name", false, !!errors.name)}
            {...register("name")}
          />
        </FieldWrap>

        <FieldWrap label="Email" htmlFor="app-email" error={errors.email?.message} required>
          <input
            id="app-email"
            type="email"
            autoComplete="email"
            className="field"
            {...fieldAria("app-email", false, !!errors.email)}
            {...register("email")}
          />
        </FieldWrap>

        <FieldWrap label="Phone" htmlFor="app-phone" error={errors.phone?.message} required>
          <input
            id="app-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+234"
            className="field"
            {...fieldAria("app-phone", false, !!errors.phone)}
            {...register("phone")}
          />
        </FieldWrap>

        <FieldWrap label="City" htmlFor="app-city" error={errors.city?.message} required>
          <input
            id="app-city"
            type="text"
            autoComplete="address-level2"
            className="field"
            {...fieldAria("app-city", false, !!errors.city)}
            {...register("city")}
          />
        </FieldWrap>
      </div>

      <FieldWrap
        label="Your caregiving experience"
        htmlFor="app-exp"
        hint="A few lines is plenty. Tell us who you have cared for and for how long."
        error={errors.experience?.message}
        required
        className="mt-4"
      >
        <textarea
          id="app-exp"
          rows={5}
          className="field"
          {...fieldAria("app-exp", true, !!errors.experience)}
          {...register("experience")}
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
            Your application is ready to send from your mail app. This opens
            your email with everything filled in.
          </p>
          <a href={result.href} className="btn btn-primary mt-3">
            <Mail size={17} aria-hidden="true" />
            Open email to send
          </a>
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting && (
            <Loader2 size={17} className="animate-spin" aria-hidden="true" />
          )}
          {isSubmitting ? "Sending application" : "Send application"}
        </button>
        <WhatsAppButton
          variant="inline"
          label="Or ask us on WhatsApp"
          message="Hello Omojolagbe Care, I would like to apply to work as a caregiver."
        />
      </div>
    </form>
  );
}
