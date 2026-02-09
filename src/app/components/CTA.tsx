import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-[#00D4FF] via-[#6B8EFF] to-[#9D7DFF] rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-[#9D7DFF] via-[#6B8EFF] to-[#00D4FF] rounded-full blur-3xl opacity-20" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
              Prêt à commander en 3 messages ?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Rejoins la liste d&apos;attente et sois parmi les premiers à
              découvrir KLYPOP dans ta ville.
            </p>

            <Link
              href="/waitlist"
              className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#00D4FF] via-[#6B8EFF] to-[#9D7DFF] hover:shadow-lg hover:scale-[1.02] transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              Rejoindre la liste d&apos;attente
              <ArrowRight className="w-5 h-5" />
            </Link>

            <p className="text-sm text-gray-500 mt-6">
              Pas de spam, promis. Juste des nouvelles de KLYPOP.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
