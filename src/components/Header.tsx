import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/WhatsApp";
import { primaryNav } from "@/content/nav";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu on route change.
  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Basic focus management for the mobile drawer.
  useEffect(() => {
    if (open) {
      firstLinkRef.current?.focus();
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setOpen(false);
          toggleRef.current?.focus();
        }
      };
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-(--dur-base)",
        scrolled
          ? "bg-paper/90 shadow-card backdrop-blur"
          : "bg-transparent",
      )}
    >
      <Container size="wide">
        <div className="flex h-16 items-center justify-between gap-4 md:h-20">
          <Link
            to="/"
            aria-label="Omojolagbe Geriatric Care, home"
            className="cursor-pointer"
          >
            <Logo variant="full" size={56} />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {primaryNav.map((item) => (
                <li key={item.label} className="group relative">
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        className="flex cursor-pointer items-center gap-1.5 rounded-sm px-3 py-2 text-[0.95rem] font-medium text-ink-700 transition-colors hover:text-ink-900 group-focus-within:text-ink-900"
                        aria-haspopup="true"
                      >
                        {item.icon && (
                          <item.icon size={16} aria-hidden="true" />
                        )}
                        {item.label}
                        <ChevronDown size={15} aria-hidden="true" />
                      </button>
                      <div className="invisible absolute left-0 top-full w-80 pt-2 opacity-0 transition-opacity duration-(--dur-fast) group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                        <ul className="card overflow-hidden p-2">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                to={child.to}
                                className="flex cursor-pointer items-start gap-3 rounded-sm px-3 py-2 hover:bg-paper-sunken"
                              >
                                {child.icon && (
                                  <span
                                    className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-paper-sunken text-ink-700"
                                    aria-hidden="true"
                                  >
                                    <child.icon size={16} />
                                  </span>
                                )}
                                <span>
                                  <span className="block text-[0.9rem] font-semibold text-ink-900">
                                    {child.label}
                                  </span>
                                  {child.description && (
                                    <span className="block text-sm text-ink-600">
                                      {child.description}
                                    </span>
                                  )}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={item.to!}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        cn(
                          "flex cursor-pointer items-center gap-1.5 rounded-sm px-3 py-2 text-[0.95rem] font-medium transition-colors",
                          isActive
                            ? "text-ink-900"
                            : "text-ink-700 hover:text-ink-900",
                        )
                      }
                    >
                      {item.icon && <item.icon size={16} aria-hidden="true" />}
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <WhatsAppButton variant="inline" label="WhatsApp" />
            <Link to="/book-assessment" className="btn btn-primary">
              Book a free assessment
            </Link>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="btn-ghost inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-sm lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">
              {open ? "Close menu" : "Open menu"}
            </span>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-ink-200 bg-paper pb-8">
            <Container>
              <ul className="flex flex-col py-4">
                {primaryNav.map((item, i) => (
                  <li key={item.label} className="py-1">
                    {item.to && (
                      <Link
                        ref={i === 0 ? firstLinkRef : undefined}
                        to={item.to}
                        className="flex cursor-pointer items-center gap-3 py-2 text-lg font-semibold text-ink-900"
                      >
                        {item.icon && (
                          <item.icon
                            size={20}
                            className="text-ink-500"
                            aria-hidden="true"
                          />
                        )}
                        {item.label}
                      </Link>
                    )}
                    {item.children && (
                      <>
                        {!item.to && (
                          <span className="eyebrow block pb-1 pt-2">
                            {item.label}
                          </span>
                        )}
                        <ul className="flex flex-col pl-3">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                to={child.to}
                                className="flex cursor-pointer items-center gap-3 py-2 text-ink-700"
                              >
                                {child.icon && (
                                  <child.icon
                                    size={18}
                                    className="text-ink-400"
                                    aria-hidden="true"
                                  />
                                )}
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 pt-2">
                <Link
                  to="/book-assessment"
                  className="btn btn-primary w-full"
                >
                  Book a free assessment
                </Link>
                <WhatsAppButton className="w-full justify-center" />
              </div>
            </Container>
          </div>
        </div>
      )}
    </header>
  );
}
