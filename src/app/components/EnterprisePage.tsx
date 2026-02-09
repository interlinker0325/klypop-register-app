import Link from "next/link";

export function EnterprisePage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-12 leading-tight">
          KLYPOP pour les entreprises parce que votre métier n&apos;est pas
          d&apos;écrire des messages ni de répondre au téléphone
        </h1>

        <Link
          href="/waitlist"
          className="inline-block px-10 py-4 rounded-full font-bold text-white text-lg bg-gradient-to-r from-[#00D4FF] via-[#6B8EFF] to-[#9D7DFF] hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
        >
          Rejoindre
        </Link>
      </div>
    </div>
  );
}
