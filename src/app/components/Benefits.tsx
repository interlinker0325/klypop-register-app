import { Zap, Wallet, Clock3, TrendingUp, PhoneOff, UserCheck } from 'lucide-react';

const customerBenefits = [
  {
    icon: Zap,
    title: 'Ultra rapide',
    description: 'Commande en 3 messages, pas besoin d\'appeler ou de naviguer dans un menu compliqué.'
  },
  {
    icon: Wallet,
    title: 'Paiement en ligne',
    description: 'Règle ta commande à l\'avance et récupère-la sans sortir ta carte.'
  },
  {
    icon: Clock3,
    title: 'Zéro attente',
    description: 'Tu sais exactement quand venir chercher ton plat, déjà prêt pour toi.'
  }
];

const restaurantBenefits = [
  {
    icon: TrendingUp,
    title: 'Paiement avant préparation',
    description: 'Aucun risque de commande non payée. Tu prépares seulement ce qui est déjà réglé.'
  },
  {
    icon: PhoneOff,
    title: 'Moins d\'appels',
    description: 'Concentre-toi sur la cuisine, KLYPOP gère les commandes automatiquement.'
  },
  {
    icon: UserCheck,
    title: 'Moins de no-shows',
    description: 'Les clients qui paient en avance viennent toujours récupérer leur commande.'
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Customer Benefits */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
              Pour les clients
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une expérience de commande fluide et sans friction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {customerBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00D4FF] via-[#6B8EFF] to-[#9D7DFF] flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Restaurant Benefits */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
              Pour les restaurateurs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Gagnez du temps et réduisez les pertes avec KLYPOP.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {restaurantBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00D4FF] via-[#6B8EFF] to-[#9D7DFF] flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}