import { ShoppingBag, CreditCard, Clock, Utensils, MapPin, Sparkles, Shield, ArrowRight, MessageCircle } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      {/* Icon Circle */}
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00D4FF] via-[#6B8EFF] to-[#9D7DFF] flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-white" strokeWidth={2} />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Arrow Link */}
      <div className="mt-6 flex items-center text-gray-400 group-hover:text-gray-900 transition-colors">
        <ArrowRight className="w-5 h-5" strokeWidth={2} />
      </div>
    </div>
  );
}

export function Features() {
  const mainFeatures = [
    {
      icon: ShoppingBag,
      title: "Commander",
      description: "Commande par message en quelques secondes."
    },
    {
      icon: CreditCard,
      title: "Payer en ligne",
      description: "Lien de paiement sécurisé via Stripe."
    },
    {
      icon: Clock,
      title: "Retrait express",
      description: "Ta commande t'attend au restaurant, déjà réglée."
    },
    {
      icon: Utensils,
      title: "Menus & options",
      description: "Choisis, personnalise, ajoute des suppléments facilement."
    },
    {
      icon: MapPin,
      title: "Restaurants proches",
      description: "Trouve les restaurants autour de toi rapidement."
    },
    {
      icon: Sparkles,
      title: "Promos & nouveautés",
      description: "Bons plans, plats du jour, nouveautés des restos."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Fonctionnalités
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tout ce dont tu as besoin pour commander facilement et rapidement
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {mainFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Centered WhatsApp & Security Cards */}
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-6 w-full lg:w-2/3">
            <FeatureCard
              icon={MessageCircle}
              title="WhatsApp"
              description="Passe tes commandes directement sur WhatsApp, ton appli préférée."
            />
            <FeatureCard
              icon={Shield}
              title="Sécurité"
              description="Paiement sécurisé, protection des données, confiance au cœur du service."
            />
          </div>
        </div>
      </div>
    </section>
  );
}