import { MessageCircle, CreditCard, Clock, CheckCircle } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      number: "1",
      title: "Ouvre ton chatbot préféré",
      description: "WhatsApp, Messenger ou Telegram – choisis ton canal favori"
    },
    {
      icon: MessageCircle,
      number: "2",
      title: "Commande en 3 messages",
      description: "Dis ce que tu veux, où et quand. Le bot s'occupe du reste"
    },
    {
      icon: CreditCard,
      number: "3",
      title: "Paie en un clic",
      description: "Règle directement via un lien sécurisé. Simple et rapide"
    },
    {
      icon: CheckCircle,
      number: "4",
      title: "Récupère ta commande",
      description: "Va chercher ton plat au restaurant à l'heure choisie"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Comment ça marche
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Commander n'a jamais été aussi simple. Quatre étapes suffisent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00D4FF] via-[#6B8EFF] to-[#9D7DFF] flex items-center justify-center mb-6 shadow-lg">
                  <step.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>

                {/* Step Number */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-sm font-semibold text-gray-900 shadow-sm">
                  {index + 1}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[calc(100%-20%)] h-0.5 bg-gradient-to-r from-gray-300 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}