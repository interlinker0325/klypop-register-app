import Link from "next/link";
import { Shield, Lock, Zap, Globe, CheckCircle, CreditCard, Users, Building2 } from "lucide-react";

export function SecurePayment() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-full">
              <Lock className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Infrastructure de paiement</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Propulsé par{' '}
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#6B8EFF] to-[#9D7DFF] bg-clip-text text-transparent">
              Stripe
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            KLYPOP utilise Stripe pour gérer tous les paiements en ligne. 
            Des millions d'entreprises dans le monde font confiance à Stripe pour accepter des paiements et développer leurs revenus.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>

      {/* Stripe's Role Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Une infrastructure de paiement mondiale
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Stripe traite des centaines de milliards d'euros chaque année pour des millions d'entreprises à travers le monde.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Utilisé par des millions d'entreprises</p>
                    <p className="text-gray-600">De la startup à la multinationale</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Disponible dans 135+ pays</p>
                    <p className="text-gray-600">Infrastructure mondiale, fiable et évolutive</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Paiements instantanés</p>
                    <p className="text-gray-600">Traitement en temps réel, disponibilité 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <Globe className="w-8 h-8 text-gray-900 mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">135+</div>
                <div className="text-sm text-gray-600">Pays couverts</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <Users className="w-8 h-8 text-gray-900 mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">Millions</div>
                <div className="text-sm text-gray-600">D'entreprises</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <Zap className="w-8 h-8 text-gray-900 mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">99.99%</div>
                <div className="text-sm text-gray-600">Disponibilité</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <CreditCard className="w-8 h-8 text-gray-900 mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support actif</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>

      {/* Secure Payments Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Paiements en ligne sécurisés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque transaction est protégée par les technologies de sécurité les plus avancées de l'industrie.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-6 border border-gray-100">
                <Lock className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Chiffrement de bout en bout</h3>
              <p className="text-gray-600">
                Toutes les données sont chiffrées avec les standards bancaires les plus élevés (TLS 1.2+, AES-256).
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-6 border border-gray-100">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Protection contre la fraude</h3>
              <p className="text-gray-600">
                Machine learning avancé et équipes dédiées pour détecter et bloquer les tentatives de fraude.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-6 border border-gray-100">
                <CheckCircle className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conformité PCI DSS</h3>
              <p className="text-gray-600">
                Certification niveau 1, le plus haut niveau de sécurité pour les systèmes de paiement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>

      {/* Security & Compliance Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sécurité et conformité
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stripe respecte les normes de sécurité et de conformité les plus strictes du secteur financier.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-12 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Certifications et normes</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6B8EFF]"></div>
                    <span className="text-gray-700">PCI DSS niveau 1 certifié</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6B8EFF]"></div>
                    <span className="text-gray-700">Conforme RGPD</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6B8EFF]"></div>
                    <span className="text-gray-700">ISO 27001 certifié</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6B8EFF]"></div>
                    <span className="text-gray-700">SOC 1 et SOC 2 Type II</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Protection des données</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6B8EFF]"></div>
                    <span className="text-gray-700">Aucune donnée bancaire stockée sur KLYPOP</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6B8EFF]"></div>
                    <span className="text-gray-700">Tokenisation des cartes bancaires</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6B8EFF]"></div>
                    <span className="text-gray-700">Infrastructure hautement sécurisée</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6B8EFF]"></div>
                    <span className="text-gray-700">Audits de sécurité réguliers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>

      {/* Customer Benefits Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full mb-6">
              <Users className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Pour les clients</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Une expérience de paiement fluide
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Paiement en un clic</h3>
              <p className="text-gray-600">
                Reçois un lien de paiement sécurisé directement dans WhatsApp. Un clic, c'est réglé.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tous les moyens de paiement</h3>
              <p className="text-gray-600">
                Carte bancaire, Apple Pay, Google Pay, et bien d'autres options disponibles.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Remboursements simples</h3>
              <p className="text-gray-600">
                En cas de problème, les remboursements sont traités rapidement et en toute sécurité.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reçus automatiques</h3>
              <p className="text-gray-600">
                Chaque paiement génère un reçu détaillé envoyé par email instantanément.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>

      {/* Restaurant Benefits Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Building2 className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Pour les restaurants</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Gérez vos paiements en toute sérénité
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Virements automatiques</h3>
              <p className="text-gray-600">
                Recevez vos revenus directement sur votre compte bancaire selon le calendrier que vous choisissez.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tableau de bord complet</h3>
              <p className="text-gray-600">
                Suivez toutes vos transactions, vos revenus et vos statistiques en temps réel.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Protection contre les impayés</h3>
              <p className="text-gray-600">
                Les paiements sont garantis avant la préparation de la commande. Zéro risque d'impayé.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Support dédié</h3>
              <p className="text-gray-600">
                Une équipe disponible pour vous accompagner et résoudre tout problème rapidement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>

      {/* Trust Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Confiance et transparence
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            KLYPOP a choisi Stripe pour sa fiabilité, sa sécurité et son engagement envers la protection des données. 
            Nous ne stockons aucune information bancaire. Toutes les transactions sont gérées directement par Stripe 
            dans un environnement ultra-sécurisé et conforme aux normes internationales les plus strictes.
          </p>
          
          <div className="bg-gray-50 rounded-3xl p-12 border border-gray-200">
            <p className="text-lg text-gray-700 italic leading-relaxed">
              "Des millions d'entreprises de toutes tailles, de la startup à l'entreprise du Fortune 500, 
              utilisent Stripe pour accepter des paiements et développer leurs revenus en ligne."
            </p>
            <p className="text-gray-600 mt-4">— Stripe.com</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Prêt à commander en toute sécurité ?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Rejoins KLYPOP et profite d'une expérience de commande simple, rapide et 100% sécurisée.
          </p>
          <Link
            href="/waitlist"
            className="inline-block px-8 py-4 rounded-full font-semibold text-white text-lg bg-gradient-to-r from-[#00D4FF] via-[#6B8EFF] to-[#9D7DFF] hover:shadow-xl transition-all duration-200"
          >
            Rejoindre la liste d&apos;attente
          </Link>
        </div>
      </section>
    </div>
  );
}