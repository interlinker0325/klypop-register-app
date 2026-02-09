import Link from "next/link";
import { ChatMockup } from "./ChatMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-gray-900 mb-6">
              Commande et paie tes plats en 3 messages.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              Un chatbot intelligent pour commander tes plats préférés, payer en
              ligne et récupérer au restaurant. Simple, rapide, sans friction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/waitlist"
                className="px-8 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-[#00D4FF] via-[#6B8EFF] to-[#9D7DFF] hover:shadow-lg hover:scale-[1.02] transition-all duration-200 text-center"
              >
                Rejoindre la liste d&apos;attente
              </Link>
              <Link
                href="/waitlist"
                className="px-8 py-4 rounded-full text-lg font-semibold text-gray-900 bg-white border-2 border-gray-300 hover:border-gray-400 hover:shadow-md transition-all duration-200 text-center"
              >
                Je suis restaurateur
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <ChatMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
