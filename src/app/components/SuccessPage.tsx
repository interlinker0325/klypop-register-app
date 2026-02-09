import { Check } from 'lucide-react';

interface SuccessPageProps {
  onBackToHome: () => void;
}

export function SuccessPage({ onBackToHome }: SuccessPageProps) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-[#00D4FF] via-[#6B8EFF] to-[#9D7DFF] mb-8">
          <Check className="w-12 h-12 text-white" strokeWidth={3} />
        </div>

        {/* Main Message */}
        <h1 className="text-5xl md:text-6xl text-gray-900 mb-6 leading-tight">
          Bienvenue dans l&apos;aventure KLYPOP
        </h1>

        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Votre inscription a été confirmée avec succès. Vous êtes maintenant sur notre liste d&apos;attente 
          et vous serez parmi les premiers à découvrir KLYPOP lors de notre lancement.
        </p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 rounded-3xl p-6 text-left">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6B8EFF] mb-4" />
            <h3 className="text-gray-900 font-semibold mb-2">E-mail de confirmation</h3>
            <p className="text-sm text-gray-600">
              Vous recevrez un e-mail de confirmation dans quelques instants
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-6 text-left">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#6B8EFF] to-[#9D7DFF] mb-4" />
            <h3 className="text-gray-900 font-semibold mb-2">Accès prioritaire</h3>
            <p className="text-sm text-gray-600">
              Vous serez informé dès le lancement dans votre ville
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-6 text-left">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#9D7DFF] mb-4" />
            <h3 className="text-gray-900 font-semibold mb-2">Offres exclusives</h3>
            <p className="text-sm text-gray-600">
              Profitez d&apos;avantages réservés aux premiers utilisateurs
            </p>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={onBackToHome}
          className="px-8 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-[#00D4FF] via-[#6B8EFF] to-[#9D7DFF] hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
        >
          Retour à l&apos;accueil
        </button>

        {/* Footer Note */}
        <p className="mt-12 text-sm text-gray-500">
          Des questions ? Contactez-nous à{' '}
          <a 
            href="mailto:support@klypop.ai" 
            className="text-gray-700 hover:text-gray-900 underline"
          >
            support@klypop.ai
          </a>
        </p>
      </div>
    </div>
  );
}
