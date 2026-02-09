"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plus, Minus, Loader2 } from "lucide-react";
import { SuccessPage } from "./SuccessPage";

export function WaitlistPage() {
  const router = useRouter();
  const [showReferral, setShowReferral] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    userType: 'client',
    city: '',
    referralCode: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue");
      }

      setSubmitStatus("success");
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        phone: '',
        userType: 'client',
        city: '',
        referralCode: ''
      });
      setShowReferral(false);
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Erreur lors de l'envoi. Veuillez réessayer."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitStatus === "success") {
    return (
      <SuccessPage onBackToHome={() => router.push("/")} />
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content */}
      <div className="flex-1 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Context */}
            <div className="lg:sticky lg:top-32">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors mb-8 inline-flex items-center gap-2"
              >
                ← Retour
              </Link>
              
              <h1 className="text-5xl md:text-6xl text-gray-900 mb-6 leading-tight">
                Rejoignez la liste d'attente Klypop
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Vous avez cliqué sur "Rejoindre la liste d'attente" sur notre page d'accueil. 
                Complétez ce formulaire pour être parmi les premiers à découvrir KLYPOP dans votre ville.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6B8EFF]" />
                  <span>Lancement progressif</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#6B8EFF] to-[#9D7DFF]" />
                  <span>Paiement sécurisé</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#9D7DFF]" />
                  <span>Retrait chez le restaurateur</span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-sm text-gray-600 mb-2">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-[#6B8EFF] focus:ring-0 outline-none text-gray-900 text-lg placeholder-gray-400 transition-colors bg-transparent"
                    placeholder="Votre prénom"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-sm text-gray-600 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-[#6B8EFF] focus:ring-0 outline-none text-gray-900 text-lg placeholder-gray-400 transition-colors bg-transparent"
                    placeholder="Votre nom"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-sm text-gray-600 mb-2">
                    Nom de l'entreprise
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-[#6B8EFF] focus:ring-0 outline-none text-gray-900 text-lg placeholder-gray-400 transition-colors bg-transparent"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
                    Adresse e-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-[#6B8EFF] focus:ring-0 outline-none text-gray-900 text-lg placeholder-gray-400 transition-colors bg-transparent"
                    placeholder="votre@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-600 mb-2">
                    Numéro de téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-[#6B8EFF] focus:ring-0 outline-none text-gray-900 text-lg placeholder-gray-400 transition-colors bg-transparent"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>

                {/* User Type */}
                <div>
                  <label htmlFor="userType" className="block text-sm text-gray-600 mb-2">
                    Vous êtes
                  </label>
                  <select
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-[#6B8EFF] focus:ring-0 outline-none text-gray-900 text-lg transition-colors bg-transparent"
                  >
                    <option value="client">Client</option>
                    <option value="restaurateur">Restaurateur</option>
                    <option value="boutique">Boutique</option>
                  </select>
                </div>

                {/* City */}
                <div>
                  <label htmlFor="city" className="block text-sm text-gray-600 mb-2">
                    Ville
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-[#6B8EFF] focus:ring-0 outline-none text-gray-900 text-lg placeholder-gray-400 transition-colors bg-transparent"
                    placeholder="Paris, Lyon, Marseille..."
                  />
                </div>

                {/* Referral Code - Collapsible */}
                <div>
                  <button
                    type="button"
                    onClick={() => setShowReferral(!showReferral)}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-3"
                  >
                    {showReferral ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                    <span className="text-sm">J'ai un code de parrainage</span>
                  </button>
                  
                  {showReferral && (
                    <input
                      type="text"
                      id="referralCode"
                      name="referralCode"
                      value={formData.referralCode}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-[#6B8EFF] focus:ring-0 outline-none text-gray-900 text-lg placeholder-gray-400 transition-colors bg-transparent"
                      placeholder="Code de parrainage"
                    />
                  )}
                </div>

                {/* Legal Consent */}
                <div className="pt-4">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    En soumettant ce formulaire, vous acceptez de recevoir des communications de KLYPOP concernant 
                    le lancement du service. Vous pouvez vous désinscrire à tout moment. 
                    Consultez notre{" "}
                    <Link
                      href="/privacy"
                      className="text-gray-700 hover:text-gray-900 underline"
                    >
                      politique de confidentialité
                    </Link>
                    .
                  </p>
                </div>

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm">
                      ❌ {errorMessage || "Une erreur est survenue. Veuillez réessayer."}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-5 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-[#00D4FF] via-[#6B8EFF] to-[#9D7DFF] hover:shadow-xl hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    "Rejoindre la liste d'attente"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}