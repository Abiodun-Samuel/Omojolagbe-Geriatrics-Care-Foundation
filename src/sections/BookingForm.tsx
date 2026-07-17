import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Mail, ArrowRight, ArrowLeft } from "lucide-react";
import { FieldWrap, Honeypot } from "@/components/ui/Field";
import { fieldAria } from "@/lib/forms/aria";
import { WhatsAppButton } from "@/components/WhatsApp";
import { bookingSchema, type BookingValues } from "@/lib/forms/schemas";
import { submitForm, type SubmitResult } from "@/lib/forms/adapter";
import { services } from "@/content/services";
import { cn } from "@/lib/cn";

const steps = [
  { id: 0, label: "The care" },
  { id: 1, label: "The person" },
  { id: 2, label: "You" },
];

const stepFields: Array<Array<keyof BookingValues>> = [
  ["careFor", "careType"],
  ["recipientName", "city", "needs"],
  ["yourName", "email", "phone", "preferredContact"],
];

const careForOptions = [
  { value: "parent", label: "My parent" },
  { value: "relative", label: "Another relative" },
  { value: "myself", label: "Myself" },
  { value: "someone-else", label: "Someone else" },
] as const;

const contactOptions = [
  { value: "phone", label: "Phone call" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "email", label: "Email" },
] as const;

/** The money page form: multi-step, progress, per-step validation, honest
 *  submission (Phase 8). Buttons name exactly what happens. */
export function BookingForm() {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<SubmitResult | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    mode: "onBlur",
  });

  async function next() {
    const valid = await trigger(stepFields[step], { shouldFocus: true });
    if (valid) setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  async function onSubmit(values: BookingValues) {
    setResult(await submitForm("Free care assessment request", values));
  }

  if (result?.status === "sent") {
    return (
      <div role="status" aria-live="polite" className="card p-8 text-center">
        <CheckCircle2
          size={34}
          className="mx-auto text-verify-500"
          aria-hidden="true"
        />
        <h2 className="mt-4 type-h3">Your assessment is requested</h2>
        <p className="measure mx-auto mt-3 text-ink-600">
          Thank you. We will contact you within one working day to arrange the
          assessment. If it is urgent, message us on WhatsApp and we will
          respond faster.
        </p>
        <div className="mt-6 flex justify-center">
          <WhatsAppButton message="Hello Omojolagbe Care, I just requested a care assessment and it is urgent." />
        </div>
      </div>
    );
  }

  const isLast = step === steps.length - 1;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="card relative p-6 sm:p-8">
      <Honeypot register={register("company")} />

      {/* Progress */}
      <div>
        <div className="flex items-center justify-between">
          <p className="eyebrow">
            Step {step + 1} of {steps.length}
          </p>
          <p className="text-sm text-ink-500">{steps[step].label}</p>
        </div>
        <ol className="mt-3 flex gap-2" aria-label="Progress">
          {steps.map((s) => (
            <li
              key={s.id}
              className={cn(
                "h-1.5 flex-1 rounded-pill transition-colors duration-(--dur-base)",
                s.id <= step ? "bg-brand-400" : "bg-ink-200",
              )}
            >
              <span className="sr-only">
                {s.label}
                {s.id < step ? " (completed)" : s.id === step ? " (current)" : ""}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-8">
        {step === 0 && (
          <div className="grid gap-5">
            <fieldset>
              <legend className="mb-2 text-sm font-semibold text-ink-800">
                Who is the care for?{" "}
                <span className="text-danger" aria-hidden="true">
                  *
                </span>
              </legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {careForOptions.map((o) => (
                  <label
                    key={o.value}
                    className="flex cursor-pointer items-center gap-3 rounded-sm border border-ink-300 px-4 py-3 hover:border-ink-900 has-checked:border-ink-900 has-checked:bg-paper-sunken"
                  >
                    <input
                      type="radio"
                      value={o.value}
                      className="accent-ink-900"
                      {...register("careFor")}
                    />
                    <span className="text-ink-800">{o.label}</span>
                  </label>
                ))}
              </div>
              {errors.careFor && (
                <p className="mt-1.5 text-sm text-danger">
                  {errors.careFor.message}
                </p>
              )}
            </fieldset>

            <FieldWrap
              label="What care do you think you need?"
              htmlFor="b-caretype"
              hint="A best guess is fine. The assessment is where we work it out properly."
              error={errors.careType?.message}
              required
            >
              <select
                id="b-caretype"
                className="field"
                defaultValue=""
                {...fieldAria("b-caretype", true, !!errors.careType)}
                {...register("careType")}
              >
                <option value="" disabled>
                  Choose one
                </option>
                {services.map((s) => (
                  <option key={s.slug} value={s.name}>
                    {s.name}
                  </option>
                ))}
                <option value="Not sure yet">I am not sure yet</option>
              </select>
            </FieldWrap>
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <FieldWrap
                label="Their name"
                htmlFor="b-recipient"
                error={errors.recipientName?.message}
                required
              >
                <input
                  id="b-recipient"
                  type="text"
                  className="field"
                  {...fieldAria("b-recipient", false, !!errors.recipientName)}
                  {...register("recipientName")}
                />
              </FieldWrap>
              <FieldWrap
                label="Their city"
                htmlFor="b-city"
                error={errors.city?.message}
                required
              >
                <input
                  id="b-city"
                  type="text"
                  placeholder="Ibadan"
                  className="field"
                  {...fieldAria("b-city", false, !!errors.city)}
                  {...register("city")}
                />
              </FieldWrap>
            </div>
            <FieldWrap
              label="What help do they need day to day?"
              htmlFor="b-needs"
              hint="Tell us what worries you most. There is no wrong answer."
              error={errors.needs?.message}
              required
            >
              <textarea
                id="b-needs"
                rows={5}
                className="field"
                {...fieldAria("b-needs", true, !!errors.needs)}
                {...register("needs")}
              />
            </FieldWrap>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <FieldWrap
                label="Your name"
                htmlFor="b-yourname"
                error={errors.yourName?.message}
                required
              >
                <input
                  id="b-yourname"
                  type="text"
                  autoComplete="name"
                  className="field"
                  {...fieldAria("b-yourname", false, !!errors.yourName)}
                  {...register("yourName")}
                />
              </FieldWrap>
              <FieldWrap
                label="Email"
                htmlFor="b-email"
                error={errors.email?.message}
                required
              >
                <input
                  id="b-email"
                  type="email"
                  autoComplete="email"
                  className="field"
                  {...fieldAria("b-email", false, !!errors.email)}
                  {...register("email")}
                />
              </FieldWrap>
            </div>

            <FieldWrap
              label="Phone"
              htmlFor="b-phone"
              hint="Include your country code if you are outside Nigeria."
              error={errors.phone?.message}
              required
            >
              <input
                id="b-phone"
                type="tel"
                autoComplete="tel"
                placeholder="+234"
                className="field"
                {...fieldAria("b-phone", true, !!errors.phone)}
                {...register("phone")}
              />
            </FieldWrap>

            <fieldset>
              <legend className="mb-2 text-sm font-semibold text-ink-800">
                How should we reach you?{" "}
                <span className="text-danger" aria-hidden="true">
                  *
                </span>
              </legend>
              <div className="grid gap-2 sm:grid-cols-3">
                {contactOptions.map((o) => (
                  <label
                    key={o.value}
                    className="flex cursor-pointer items-center gap-3 rounded-sm border border-ink-300 px-4 py-3 hover:border-ink-900 has-checked:border-ink-900 has-checked:bg-paper-sunken"
                  >
                    <input
                      type="radio"
                      value={o.value}
                      className="accent-ink-900"
                      {...register("preferredContact")}
                    />
                    <span className="text-ink-800">{o.label}</span>
                  </label>
                ))}
              </div>
              {errors.preferredContact && (
                <p className="mt-1.5 text-sm text-danger">
                  {errors.preferredContact.message}
                </p>
              )}
            </fieldset>

            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 accent-ink-900"
                {...register("livesAbroad")}
              />
              <span className="text-ink-700">
                I live outside Nigeria and am arranging care from abroad
              </span>
            </label>
          </div>
        )}
      </div>

      {result?.status === "error" && (
        <p role="alert" aria-live="assertive" className="mt-5 text-sm text-danger">
          {result.message}
        </p>
      )}

      {result?.status === "mailto" && (
        <div role="status" aria-live="polite" className="mt-5 rounded-card bg-paper-sunken p-4">
          <p className="text-sm text-ink-700">
            Your request is ready to send from your mail app, with your answers
            filled in.
          </p>
          <a href={result.href} className="btn btn-primary mt-3">
            <Mail size={17} aria-hidden="true" />
            Open email to send
          </a>
        </div>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-ink-200 pt-6">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="btn btn-ghost"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Back
          </button>
        ) : (
          <WhatsAppButton variant="inline" label="Prefer WhatsApp?" />
        )}

        {isLast ? (
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <Loader2 size={17} className="animate-spin" aria-hidden="true" />
            )}
            {isSubmitting ? "Requesting assessment" : "Request my free assessment"}
          </button>
        ) : (
          <button type="button" onClick={next} className="btn btn-primary">
            Continue
            <ArrowRight size={17} aria-hidden="true" />
          </button>
        )}
      </div>
    </form>
  );
}
