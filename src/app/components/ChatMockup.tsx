import { Check, CheckCheck } from 'lucide-react';

export function ChatMockup() {
  return (
    <div className="relative w-full max-w-sm">
      {/* Phone Frame */}
      <div className="bg-white rounded-[3rem] shadow-2xl p-3 border-8 border-gray-800">
        {/* Screen */}
        <div className="bg-gray-50 rounded-[2.5rem] overflow-hidden h-[600px] flex flex-col">
          {/* Header */}
          <div className="bg-white px-6 py-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00D4FF] via-[#6B8EFF] to-[#9D7DFF]" />
              <div>
                <p className="font-semibold text-gray-900">KLYPOP</p>
                <p className="text-xs text-gray-500">en ligne</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 px-4 py-6 space-y-4 overflow-y-auto">
            {/* Bot Message */}
            <div className="flex gap-2">
              <div className="bg-white rounded-3xl rounded-tl-md px-5 py-3 shadow-sm max-w-[80%]">
                <p className="text-sm text-gray-900">Salut ! 👋 Dis-moi ce que tu veux commander.</p>
              </div>
            </div>

            {/* User Message */}
            <div className="flex gap-2 justify-end">
              <div className="bg-gradient-to-r from-[#00D4FF] via-[#6B8EFF] to-[#9D7DFF] rounded-3xl rounded-tr-md px-5 py-3 shadow-sm max-w-[80%]">
                <p className="text-sm text-white">1 burger végé et 1 frite</p>
              </div>
            </div>

            {/* Bot Message */}
            <div className="flex gap-2">
              <div className="bg-white rounded-3xl rounded-tl-md px-5 py-3 shadow-sm max-w-[80%]">
                <p className="text-sm text-gray-900 mb-2">Parfait ! Voici ton récap :</p>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>• 1 Burger Végétarien - 12€</p>
                  <p>• 1 Frites - 4€</p>
                  <p className="pt-2 font-semibold">Total : 16€</p>
                </div>
              </div>
            </div>

            {/* User Message */}
            <div className="flex gap-2 justify-end">
              <div className="bg-gradient-to-r from-[#00D4FF] via-[#6B8EFF] to-[#9D7DFF] rounded-3xl rounded-tr-md px-5 py-3 shadow-sm max-w-[80%]">
                <p className="text-sm text-white">Je confirme</p>
              </div>
            </div>

            {/* Bot Message with Payment */}
            <div className="flex gap-2">
              <div className="bg-white rounded-3xl rounded-tl-md px-5 py-3 shadow-sm max-w-[80%]">
                <p className="text-sm text-gray-900 mb-3">✅ Paiement confirmé !</p>
                <p className="text-sm text-gray-700">Prêt dans 15 min au restaurant La Bella.</p>
              </div>
            </div>

            {/* Read Receipt */}
            <div className="flex justify-end">
              <CheckCheck className="w-4 h-4 text-[#6B8EFF]" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Blur */}
      <div className="absolute -z-10 -top-20 -right-20 w-72 h-72 bg-gradient-to-r from-[#00D4FF] via-[#6B8EFF] to-[#9D7DFF] rounded-full blur-3xl opacity-20" />
    </div>
  );
}
