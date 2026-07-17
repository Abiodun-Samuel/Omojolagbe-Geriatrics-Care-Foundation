import { z } from "zod";

/** Shared zod schemas. Types are inferred from these, never duplicated. */

const phoneRegex = /^[+()\d\s-]{7,20}$/;

export const contactSchema = z.object({
  name: z.string().min(2, "Please tell us your name."),
  email: z.string().email("Enter an email we can reply to."),
  subject: z.string().optional(),
  message: z.string().min(10, "Tell us a little more so we can help."),
  company: z.string().max(0).optional(), // honeypot
});
export type ContactValues = z.infer<typeof contactSchema>;

export const applicationSchema = z.object({
  name: z.string().min(2, "Please tell us your name."),
  email: z.string().email("Enter an email we can reply to."),
  phone: z.string().regex(phoneRegex, "Enter a phone number we can call."),
  city: z.string().min(2, "Which city are you in?"),
  experience: z
    .string()
    .min(10, "Tell us briefly about your caregiving experience."),
  company: z.string().max(0).optional(), // honeypot
});
export type ApplicationValues = z.infer<typeof applicationSchema>;

/** The booking flow, split by step so each step validates on its own. */
export const bookingStep1 = z.object({
  careFor: z.enum(["parent", "relative", "myself", "someone-else"], {
    errorMap: () => ({ message: "Choose who the care is for." }),
  }),
  careType: z.string().min(1, "Choose the care you think you need."),
});

export const bookingStep2 = z.object({
  recipientName: z.string().min(2, "Please give us a name."),
  city: z.string().min(2, "Which city are they in?"),
  needs: z.string().min(10, "Describe what help they need day to day."),
});

export const bookingStep3 = z.object({
  yourName: z.string().min(2, "Please tell us your name."),
  email: z.string().email("Enter an email we can reply to."),
  phone: z.string().regex(phoneRegex, "Enter a phone number we can call."),
  livesAbroad: z.boolean().optional(),
  preferredContact: z.enum(["phone", "whatsapp", "email"], {
    errorMap: () => ({ message: "How should we reach you?" }),
  }),
  company: z.string().max(0).optional(), // honeypot
});

export const bookingSchema = bookingStep1
  .merge(bookingStep2)
  .merge(bookingStep3);
export type BookingValues = z.infer<typeof bookingSchema>;

export const bookingStepSchemas = [
  bookingStep1,
  bookingStep2,
  bookingStep3,
] as const;
