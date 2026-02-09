"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/features", label: "Fonctionnalités" },
    { href: "/privacy", label: "Confidentialité" },
    { href: "/enterprise", label: "Entreprises" },
    { href: "/payment", label: "Paiement sécurisé" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="focus:outline-none block">
              <Image
                src="/logo.png"
                alt="KLYPOP"
                width={144}
                height={144}
                className="h-36 w-auto cursor-pointer hover:opacity-90 transition-opacity"
                priority
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/waitlist"
              className="hidden lg:block px-6 py-2.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#00D4FF] via-[#6B8EFF] to-[#9D7DFF] hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
            >
              Rejoindre
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
              aria-expanded={mobileMenuOpen}
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-left text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/waitlist"
                className="mt-2 px-6 py-2.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#00D4FF] via-[#6B8EFF] to-[#9D7DFF] hover:shadow-lg transition-all duration-200 text-center block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Rejoindre la liste d&apos;attente
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
