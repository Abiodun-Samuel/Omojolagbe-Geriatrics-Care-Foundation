import { MapPin } from "lucide-react";
import type { Caregiver } from "@/content/caregivers";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";

/** A caregiver "dossier" card (not a stock photo, per the design signature). */
export function CaregiverCard({ caregiver }: { caregiver: Caregiver }) {
  const initials = caregiver.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <article className="card flex h-full flex-col p-6">
      <div className="flex items-center gap-4">
        <span
          className="flex h-14 w-14 items-center justify-center rounded-full bg-ink-900 font-display text-lg font-semibold text-brand-400"
          aria-hidden="true"
        >
          {initials}
        </span>
        <div>
          <h3 className="font-semibold text-ink-900">
            {caregiver.name}
          </h3>
          <p className="text-sm text-ink-600">
            {caregiver.role}
          </p>
        </div>
      </div>

      <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink-600">
        <div className="flex items-center gap-1.5">
          <MapPin size={14} aria-hidden="true" />
          <dt className="sr-only">City</dt>
          <dd>{caregiver.city}</dd>
        </div>
        <div>
          <dt className="sr-only">Experience</dt>
          <dd>{caregiver.years} years experience</dd>
        </div>
      </dl>

      <p className="mt-4 flex-1 text-sm text-ink-700">
        {caregiver.bio}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {caregiver.specialties.map((s) => (
          <li key={s} className="chip">
            {s}
          </li>
        ))}
      </ul>

      {caregiver.placeholder && (
        <PlaceholderTag className="mt-4 self-start" label="Sample profile" />
      )}
    </article>
  );
}
