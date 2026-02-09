import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-3">
            <Link href="/" className="block">
              <Image
                src="/logo.png"
                alt="KLYPOP"
                width={48}
                height={48}
                className="h-12 w-auto mb-8"
              />
            </Link>
            <div>
              <p className="text-sm text-gray-500 mb-2">Parlons-en</p>
              <a
                href="mailto:support@klypop.ai"
                className="text-gray-900 hover:text-gray-700 transition-colors"
              >
                support@klypop.ai
              </a>
            </div>
          </div>

          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Légal</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Politique de confidentialité
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Entreprise</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Devenir partenaire
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    L&apos;équipe Klypop
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Social</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-1.5"
                  >
                    Instagram
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-1.5"
                  >
                    WhatsApp
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} Klypop — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
