"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "@/app/components/Container";

type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

const links: NavItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  {
    href: "/services",
    label: "Services",
    children: [
      {
        href: "/services/agence-youtube",
        label: "Agence YouTube pour créateurs",
      },
      {
        href: "/services/publicite-storytelling",
        label: "Publicité Storytelling",
      },
      {
        href: "/services/mariage-documentaire",
        label: "Mariage et documentaire de mariage",
      },
      {
        href: "/services/documentaire-entreprise",
        label: "Documentaire d’entreprise",
      },
      { href: "/services/3d-vfx", label: "3D VFX" },
    ],
  },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openServices, setOpenServices] = useState(false); // mobile accordéon

  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-30">
      <Container className="flex items-center justify-between py-3">
        <Link
          href="/"
          aria-label="Accueil"
          className="font-semibold tracking-tight text-lg"
        >
          Norde
        </Link>

        <button
          className="lg:hidden inline-flex items-center rounded-md px-3 py-2 text-sm border border-gray-300"
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-controls="primary-nav"
        >
          Menu
        </button>

        {/* Desktop nav */}
        <nav id="primary-nav" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {links.map((item) => {
              const active = pathname === item.href;

              if (!item.children) {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`text-sm ${
                        active
                          ? "text-black font-medium"
                          : "text-gray-600 hover:text-black"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              // Lien avec sous-menu (Services)
              return (
                <li key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 text-sm ${
                      active
                        ? "text-black font-medium"
                        : "text-gray-600 hover:text-black"
                    }`}
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {item.label}
                    <svg
                      className="h-4 w-4 transition-transform group-hover:rotate-180"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>

                  {/* Dropdown desktop */}
                  <div
                    className={`
                        absolute left-0 top-full pt-2   /* pas de mt-2 -> plus de trou, on ajoute du padding ici */
                        invisible opacity-0 translate-y-1
                        transition-all duration-150
                        group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                        group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0
                        pointer-events-none  /* évite les survols quand fermé */
                    `}
                    role="menu"
                  >
                    {/* Le vrai panneau du menu, cliquable */}
                    <div className="w-72 rounded-md border border-gray-100 bg-white shadow-lg pointer-events-auto">
                      <ul className="py-2">
                        {item.children.map((child) => {
                          const childActive = pathname === child.href;
                          return (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className={`block px-4 py-2 text-sm ${
                                  childActive
                                    ? "text-black font-medium bg-gray-50"
                                    : "text-gray-700 hover:bg-gray-50 hover:text-black"
                                }`}
                                role="menuitem"
                              >
                                {child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>

      {/* Mobile */}
      {open && (
        <div className="lg:hidden border-t border-gray-100">
          <Container>
            <ul className="grid py-2">
              {links.map((item) => {
                const active = pathname === item.href;

                if (!item.children) {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block py-2 text-sm ${
                          active ? "text-black font-medium" : "text-gray-700"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                // Item avec enfants (accordéon)
                const isOpen = openServices;

                return (
                  <li key={item.href} className="py-1">
                    <button
                      className={`w-full flex items-center justify-between py-2 text-left text-sm ${
                        active ? "text-black font-medium" : "text-gray-700"
                      }`}
                      onClick={() => setOpenServices((s) => !s)}
                      aria-expanded={isOpen}
                      aria-controls="mobile-services"
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`h-4 w-4 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    <div
                      id="mobile-services"
                      className={`grid overflow-hidden transition-[grid-template-rows] duration-200 ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <ul className="min-h-0 overflow-hidden">
                        {item.children.map((child) => {
                          const childActive = pathname === child.href;
                          return (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className={`block py-2 pl-4 text-sm ${
                                  childActive
                                    ? "text-black font-medium"
                                    : "text-gray-700"
                                }`}
                                onClick={() => {
                                  setOpen(false);
                                  setOpenServices(false);
                                }}
                              >
                                {child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
