import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Comment fonctionne le paiement ?',
    answer: 'Le paiement se fait directement dans la conversation via un lien sécurisé. Tu paies en ligne avant que le restaurant ne commence à préparer ta commande. Aucune surprise au moment de récupérer ton plat !'
  },
  {
    question: 'Quels restaurants sont disponibles ?',
    answer: 'KLYPOP est actuellement en phase de lancement. Inscris-toi sur la liste d\'attente pour être parmi les premiers à découvrir les restaurants partenaires de ta ville.'
  },
  {
    question: 'Puis-je annuler ma commande ?',
    answer: 'Tu peux annuler ta commande tant qu\'elle n\'a pas été confirmée par le restaurant. Une fois la préparation commencée, l\'annulation n\'est plus possible, mais tu peux toujours contacter le restaurant directement.'
  },
  {
    question: 'Comment le chatbot comprend ma commande ?',
    answer: 'Notre chatbot utilise l\'intelligence artificielle pour comprendre ta commande en langage naturel. Pas besoin de formuler ta demande d\'une façon précise, écris comme tu parles !'
  },
  {
    question: 'Est-ce que mes données sont sécurisées ?',
    answer: 'Absolument. Nous utilisons les standards de sécurité les plus élevés pour protéger tes informations personnelles et tes données de paiement. Ton paiement est traité par des prestataires certifiés PCI-DSS.'
  },
  {
    question: 'Comment rejoindre KLYPOP en tant que restaurateur ?',
    answer: 'Clique sur le bouton "Je suis restaurateur" en haut de la page pour nous contacter. Nous te recontacterons rapidement pour t\'expliquer comment intégrer KLYPOP dans ton restaurant.'
  }
];

export function FAQ() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Tout ce que tu as besoin de savoir sur KLYPOP.
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion.Item 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full px-6 py-5 flex items-center justify-between text-left group">
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200 group-data-[state=open]:rotate-180 flex-shrink-0" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <div className="px-6 pb-5 pt-0">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
