import { Link } from "react-router";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";
import { WhatsAppButton } from "@/components/WhatsApp";
import { footerNav } from "@/content/nav";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-ink-950 text-white/80">
      <Container size="wide" className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo variant="full" onDark size={60} />
            {/* FT01: preserved verbatim */}
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Omojolagbe Geriatric Care Foundation was established in 2018 in
              Ibadan, Oyo State Nigeria and fully registered by The Corporate
              Affairs Commission. It is a reputable organization working in the
              way of creating healthier, happier and fruitful life for the
              aged.
            </p>
            <div className="mt-6">
              <WhatsAppButton />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                  {col.heading}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="flex cursor-pointer items-center gap-2 text-sm text-white/70 underline-offset-4 transition-colors hover:text-brand-300 hover:underline"
                      >
                        {link.icon && (
                          <link.icon
                            size={15}
                            className="shrink-0 text-white/40"
                            aria-hidden="true"
                          />
                        )}
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <p className="flex items-start gap-2 text-sm text-white/70">
            <MapPin
              size={18}
              className="mt-0.5 shrink-0 text-brand-400"
              aria-hidden="true"
            />
            {site.address.full}
          </p>
          <div className="text-sm text-white/70">
            {site.phones.map((p) => (
              <a
                key={p}
                href={`tel:${p}`}
                className="flex cursor-pointer items-center gap-2 py-0.5 hover:text-white"
              >
                <Phone
                  size={16}
                  className="text-brand-400"
                  aria-hidden="true"
                />
                {p}
              </a>
            ))}
          </div>
          <div className="text-sm text-white/70">
            <a
              href={`mailto:${site.emails.homeCare}`}
              className="flex cursor-pointer items-center gap-2 break-all py-0.5 hover:text-white"
            >
              <Mail
                size={16}
                className="shrink-0 text-brand-400"
                aria-hidden="true"
              />
              {site.emails.homeCare}
            </a>
            <a
              href={`mailto:${site.emails.foundation}`}
              className="flex cursor-pointer items-center gap-2 break-all py-0.5 hover:text-white"
            >
              <Mail
                size={16}
                className="shrink-0 text-brand-400"
                aria-hidden="true"
              />
              {site.emails.foundation}
            </a>
          </div>
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer items-center gap-2 text-sm text-white/70 hover:text-white"
          >
            <Facebook
              size={16}
              className="text-brand-400"
              aria-hidden="true"
            />
            Connect with us on Facebook
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-center text-xs text-white/55 sm:flex-row sm:text-left">
          {/* FT09 preserved */}
          <p>
            Copyright &copy; {year}.{" "}
            <span className="font-semibold text-white/75">
              Omojolagbe Geriatric Care Foundation
            </span>
            , All Rights Reserved.
          </p>
          {/* FT10 preserved */}
          <p>
            Designed &amp; Developed by{" "}
            <a
              href={site.credit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer font-semibold text-white/75 hover:text-white"
            >
              {site.credit.label}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
